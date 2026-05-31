
function startGame(canvas,assets,dim){

  setGameWindow(canvas,dim.width,dim.height)
  const ctx = canvas.getContext("2d");
  const gameScaleX=dim.width/800
  const audio=assets.audio
  
  const GAME_STATES = {
    STATE_NOT_PLAYING:-1,
    STATE_PLAYING: 0,
    STATE_PAUSED: 1,
    STATE_WON: 2,
    STATE_GAMEOVER: 3
  };

  const PEAR = {
    PEAR_START: 2,
    PEAR_COUNT: 10,
    PEAR_RATE: 4,
    PEAR_SIZE: 60 * gameScaleX,
    PEAR_SHRINK_RATE:0.001,
    PEAR_GROW_RATE:5
   
  };
  const ENEMY = {
    ENEMY_COUNT: 10,
    ENEMY_SIZE: 30 * gameScaleX,
    ENEMY_RATE: 2,
    ENEMY_START: PEAR.PEAR_START + PEAR.PEAR_COUNT * 2,
    ENEMY_SHRINK_RATE:0.10,
    ENEMY_GROW_RATE:100
  
  };

  const explosion_array=[]
  const PLAYER = {
    PLAYER_ID: 0,
    PLAYER_SIZE: 60 * gameScaleX,
    PLAYER_SHRINK_RATE:0.1,
    PLAYER_ENEMY_SHRINK_RATE:0.01,
    PLAYER_GROW_RATE:5
  };
  
  const TIMER = {
    enemyTimer: 0,
    pearTimer: 0,
    lastTime: 0,
    accumulator: 0,
    FIXED_STEP: 1/60
  };
  let changeState=true
  let images=assets.images
  let animationId=requestAnimationFrame(animate);;
  let currentGameState=GAME_STATES.STATE_PAUSED
  let resetScheduled = false;

  function GameEntityVectors() {
    const ENTITY_SIZE = 50;
    return {
      position: new Float32Array(ENTITY_SIZE),
      size: new Float32Array(ENTITY_SIZE),
      consumed: new Uint8Array(ENTITY_SIZE)
    };
  }

 
  let gameData = GameEntityVectors();
  let position = gameData.position;
  let size = gameData.size;
  let consumed = gameData.consumed;  
  function playAudio(audio,key,loop,volume) {
    const audioClone = audio[key];
    audioClone.pause();
    audioClone.currentTime = 0;
    audioClone.loop=loop;
    audioClone.currentTime=0;
    audioClone.volume=volume;
    audioClone.play();
  }
  
  function stopAudio(sound){
    if (!sound) return;
    sound.pause();
    sound.currentTime=0;
  }

  function setGameWindow(canvas,width,height) {
   canvas.width=width
   canvas.height=height
  }

  function setGame() {
    gameData=GameEntityVectors()
    position = gameData.position;
size = gameData.size;
consumed = gameData.consumed;
      TIMER.enemyTimer= 0,
      TIMER.pearTimer= 0,
      TIMER.lastTime= 0,
      TIMER.accumulator= 0,
      TIMER.FIXED_STEP= 1/60
    createPlayer();
    createPears();
    createEnemies();
    currentGameState=GAME_STATES.STATE_PAUSED
  }
  
  function createPlayer() {
    size[PLAYER.PLAYER_ID] = PLAYER.PLAYER_SIZE;
    size[PLAYER.PLAYER_ID+1] = PLAYER.PLAYER_SIZE;
    position[PLAYER.PLAYER_ID] = canvas.width/2;
    position[PLAYER.PLAYER_ID+1] = canvas.height/2;
  }
  
  function createPears() {
    for (let i = PEAR.PEAR_START; i < PEAR.PEAR_START + PEAR.PEAR_COUNT*2; i += 2) {
      position[i] = Math.random() * (canvas.width - PEAR.PEAR_SIZE);
      position[i+1] = Math.random() * (canvas.height - PEAR.PEAR_SIZE);
      size[i] = size[i+1] = PEAR.PEAR_SIZE;
      consumed[i] = 0;
    }
  }

  
  function createEnemies() {
    for (let i = ENEMY.ENEMY_START; i < ENEMY.ENEMY_START + ENEMY.ENEMY_COUNT*2; i += 2) {
      position[i] = Math.random() * (canvas.width - ENEMY.ENEMY_SIZE);
      position[i+1] = Math.random() * (canvas.height - ENEMY.ENEMY_SIZE);
      size[i] = size[i+1] = ENEMY.ENEMY_SIZE;
      consumed[i] = 0;
    }
  }
  
  function drawEntity(sprite, x, y, w, h, angle) {
    if (!sprite || w <= 0 || h <= 0) return;
    const cx = x + w*0.5;
    const cy = y + h*0.5;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    ctx.drawImage(sprite, -w*0.5, -h*0.5, w, h);
    ctx.restore();
  }
  
  function reduceSize(id, amt) {
    size[id] -= amt;
    size[id+1] -= amt;
  }
  
  function increaseSize(id, amt) {
    size[id] += amt;
    size[id+1] += amt;
  }
  
  const COLLISION_SCALE = {
    player: 0.6,
    pear: 0.75,
    enemy: 0.7
  };
  function createExplosion(x, y) {
    explosion_array.push({
      x,
      y,
      radius: 5,
      maxRadius: 50,
      alpha: 1
    });
  }
  function updateExplosions(dt) {

    for (let i = explosion_array.length - 1; i >= 0; i--) {
  
      const e = explosion_array[i];
  
      e.radius += 120 * dt;
      e.alpha -= 1.8 * dt;
  
      if (e.radius >= e.maxRadius || e.alpha <= 0) {
        explosion_array.splice(i, 1);
      }
    }
  }
  function playExplosions() {

    for (const e of explosion_array) {
  
      ctx.save();
  
      ctx.globalAlpha = e.alpha;
  
      const gradient = ctx.createRadialGradient(
        e.x,
        e.y,
        0,
        e.x,
        e.y,
        e.radius
      );
  
      gradient.addColorStop(0, "white");
      gradient.addColorStop(0.2, "yellow");
      gradient.addColorStop(0.5, "orange");
      gradient.addColorStop(1, "red");
  
      ctx.fillStyle = gradient;
  
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
      ctx.fill();
  
      ctx.restore();
    }
  }
  
  function broadPhase(playerId, start, count, targetScale) {
    const px = position[playerId];
    const py = position[playerId+1];
    const ps = size[playerId];
    const pcx = px + ps*0.5;
    const pcy = py + ps*0.5;
    const pr = ps*0.5*COLLISION_SCALE.player;
  
    for (let n = 0; n < count; n++) {
      const i = start + n*2;
      if (consumed[i] || size[i] <= 0) continue;
      const s = size[i];
      const dx = pcx - (position[i] + s*0.5);
      const dy = pcy - (position[i+1] + s*0.5);
      const rr = pr + s*0.5*targetScale;
      if (dx*dx + dy*dy <= rr*rr) return i;
    }
    return -1;
  }
  
  function setPlayerPos(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    position[PLAYER.PLAYER_ID] = (clientX - rect.left) * (canvas.width / rect.width) / (window.devicePixelRatio || 1);
    position[PLAYER.PLAYER_ID+1] = (clientY - rect.top) * (canvas.height / rect.height) / (window.devicePixelRatio || 1);
  }

  
  canvas.addEventListener("pointerenter",()=>{
    if(changeState===true)
    currentGameState=GAME_STATES.STATE_PLAYING
  },{touchAction:"none",once:false})
  canvas.addEventListener("pointerleave",()=>{
    currentGameState=GAME_STATES.STATE_PAUSED
  },{touchAction:"none",once:false})
  canvas.addEventListener("pointermove", e => {
  //  currentGameState === GAME_STATES.STATE_PLAYING
      setPlayerPos(e.clientX, e.clientY);
    
  },{touchAction:"none",once:false});
  canvas.addEventListener("pointerdown", () => {
    currentGameState = GAME_STATES.STATE_PLAYING;
  },{touchAction:"none",once:false});
  function update(dt) {
    if (currentGameState !== GAME_STATES.STATE_PLAYING) return;
    if (currentGameState === GAME_STATES.STATE_WON) {
      updateFireworks(dt);
    }
    TIMER.pearTimer += dt;
    TIMER.enemyTimer += dt;
    updateExplosions(dt);
    if (TIMER.pearTimer >= PEAR.PEAR_RATE) {
      createPears();
      TIMER.pearTimer = 0;
    }
    if (TIMER.enemyTimer >= ENEMY.ENEMY_RATE) {
      createEnemies();
      TIMER.enemyTimer = 0;
    }
  
    const hitPear = broadPhase(PLAYER.PLAYER_ID, PEAR.PEAR_START, PEAR.PEAR_COUNT, COLLISION_SCALE.pear);
    const hitEnemy = broadPhase(PLAYER.PLAYER_ID, ENEMY.ENEMY_START, ENEMY.ENEMY_COUNT, COLLISION_SCALE.enemy);
  
    reduceSize(PLAYER.PLAYER_ID, PLAYER.PLAYER_SHRINK_RATE);
  
    if (hitPear !== -1) {
      consumed[hitPear] = 1;
      
      playAudio(audio,"eat",false,1)
      reduceSize(hitPear, PEAR.PEAR_GROW_RATE);
      increaseSize(PLAYER.PLAYER_ID, PLAYER.PLAYER_GROW_RATE);
      
    }
  
    if (hitEnemy !== -1) {
      consumed[hitEnemy] = 1;
      createExplosion(
        position[hitEnemy] + size[hitEnemy] * 0.5,
        position[hitEnemy + 1] + size[hitEnemy + 1] * 0.5
      );
      playAudio(audio,"explosion",false,1)
      reduceSize(hitEnemy,ENEMY.ENEMY_GROW_RATE)
      reduceSize(PLAYER.PLAYER_ID, PLAYER.PLAYER_ENEMY_SHRINK_RATE);
    }
  
    for (let n = 0; n < PEAR.PEAR_COUNT; n++) {
      const i = PEAR.PEAR_START + n*2;
      if (!consumed[i]) reduceSize(i, PEAR.PEAR_SHRINK_RATE);
    }
    for (let n = 0; n < ENEMY.ENEMY_COUNT; n++) {
      const i = ENEMY.ENEMY_START + n*2;
      if (!consumed[i]) reduceSize(i, ENEMY.ENEMY_SHRINK_RATE);
    }
  
    if (size[PLAYER.PLAYER_ID] >= 100) currentGameState = GAME_STATES.STATE_WON;
    if (size[PLAYER.PLAYER_ID] <= 0) currentGameState = GAME_STATES.STATE_GAMEOVER;
  }
 
  
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEntity(images.background, 0, 0, canvas.width, canvas.height, 0);
    drawEntity(images.player, position[PLAYER.PLAYER_ID], position[PLAYER.PLAYER_ID+1], size[PLAYER.PLAYER_ID], size[PLAYER.PLAYER_ID+1], 0);
    playExplosions();
    for (let i = PEAR.PEAR_START; i < PEAR.PEAR_START + PEAR.PEAR_COUNT*2; i += 2) {
      if (!consumed[i] && size[i] > 0)
        drawEntity(images.pear, position[i], position[i+1], size[i], size[i+1], 0);
    }
  
    for (let i = ENEMY.ENEMY_START; i < ENEMY.ENEMY_START + ENEMY.ENEMY_COUNT*2; i += 2) {
      if (!consumed[i] && size[i] > 0)
        drawEntity(images.enemy, position[i], position[i+1], size[i], size[i+1], 0);
    }
  }
  let paused=false
  function renderGameState() {
    const state = currentGameState;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    if (state === GAME_STATES.STATE_PLAYING) {
      changeState=true
      render();
      paused=false;
    } 
    else if (state === GAME_STATES.STATE_GAMEOVER) {
      changeState = false;
    paused=true
      drawEntity(images.gameOver, 0, 0, canvas.width, canvas.height, 0);
    
      if (!resetScheduled) {
        resetScheduled = true;
    
        setTimeout(() => {
          resetScheduled = false;
          setGame();
          paused=false
        }, 500);
      }
    }
    else if (state === GAME_STATES.STATE_WON) {
 changeState=false
 paused=true
      drawEntity(images.win, 0, 0, canvas.width, canvas.height, 0);
      if (!resetScheduled) {
        resetScheduled = true;
       
      
        setTimeout(() => {
          resetScheduled = false;
          paused=false
          setGame();
        }, 5000);
      }
    } 
    else if (state === GAME_STATES.STATE_PAUSED) {
      changeState=true
      
      if(paused===true){
        for(let key in audio){   
          stopAudio(audio[key])
        }
      }
      
      drawEntity(images.gamePaused, 0, 0, canvas.width, canvas.height, 0);
     
    }
  }
 

  function gameTimer(ts){

    if (!TIMER.lastTime) TIMER.lastTime = ts;
  
    let dt = (ts - TIMER.lastTime) / 1000;
    TIMER.lastTime = ts;
    TIMER.accumulator += dt;
  
    while (TIMER.accumulator >= TIMER.FIXED_STEP) 
      TIMER.accumulator -= TIMER.FIXED_STEP;
      
    update(TIMER.FIXED_STEP);
  }
 
  function animate(ts) {
    animationId = requestAnimationFrame(animate);
    renderGameState();
    gameTimer(ts)
    
  }
  
 
  setGame();
  requestAnimationFrame(animate);
  
  
  return () => {
    cancelAnimationFrame(animationId);
    
   ;
  };
}
export default startGame