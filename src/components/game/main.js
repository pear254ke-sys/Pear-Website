//sorry if you're reading/maintaining this am mutating global state everywhere,but you're smart enough to handle it



function startGame(canvas,assets,dim){
  setGameWindow(canvas,dim.width,dim.height)
  const ctx = canvas.getContext("2d");
  const gameScaleX=dim.width/1000
  console.log(gameScaleX)
  const audio=assets.audio
  const controller = new AbortController();
  const { signal } = controller;
  //GAME STATES
   const STATE_NOT_PLAYING=0
   const STATE_PLAYING= 1
   const STATE_PAUSED=2
   const STATE_WON=3
   const STATE_GAMEOVER=4
//PEAR PROPERTIES
   const PEAR_START= 2
   const PEAR_COUNT=20
   const PEAR_RATE= 4
   const PEAR_SIZE= 64 * gameScaleX
   const PEAR_SHRINK_RATE=0.1
   const  PEAR_GROW_RATE=5
//ENEMY PROPERTIES
  const  ENEMY_COUNT= 20
  const  ENEMY_SIZE= 32 * gameScaleX
  const  ENEMY_RATE= 4
  const  ENEMY_START= PEAR_START + PEAR_COUNT 
  const  ENEMY_SHRINK_RATE=0.10
  const  ENEMY_GROW_RATE=100
  //PLAYER PROPERTIES
  const PLAYER_ID_START= 0
  const  PLAYER_ID_END=1
  const  PLAYER_SIZE= 100 * gameScaleX
  const  PLAYER_SHRINK_RATE=0.01
  const  PLAYER_ENEMY_SHRINK_RATE=0.01
  const  PLAYER_GROW_RATE=5
  //TIMER PROPERTIES
  let  enemyTimer= 0
  let  pearTimer= 0
  let  lastTime=0
  let accumulator= 0
  const  FIXED_STEP= 1/64
   const gameWinReset=200
  const  gameLostReset=500
//EXPLOSION PROPERTIES
const EXPLOSION_ARRAY_MAX_SIZE=16
  const explosion_array=new Float32Array(EXPLOSION_ARRAY_MAX_SIZE)
  let explosion_array_current_write_index=0
  const explosion_max_radius= 50
  const ENTITY_SIZE = 100;
//GAME_DATA positions,sizes,consumed objects
  const position = new Float32Array(ENTITY_SIZE)
  const size= new Float32Array(ENTITY_SIZE)
  const consumed= new Uint8Array(ENTITY_SIZE)


  let images=assets.images
  let animationId=requestAnimationFrame(animate)
  let currentGameState=STATE_NOT_PLAYING

  function playAudio(audio,key,loop,volume) {
    const audioClone = audio[key];
    audioClone.pause();
    audioClone.currentTime = 0;
    audioClone.loop=loop;
    audioClone.volume=volume;
    audioClone.play();
  }
  

  function setGameWindow(canvas,width,height) {
   canvas.width=width
   canvas.height=height
  }
  

  
  function setGame() {
    createPlayer();
    createPears();
    createEnemies();
    currentGameState=STATE_NOT_PLAYING
  }
  
  function createPlayer() {
    size[PLAYER_ID_START] = PLAYER_SIZE;
    size[PLAYER_ID_END] = PLAYER_SIZE;
    position[PLAYER_ID_START] = 0;
    position[PLAYER_ID_END] = 0;
  }
  function createPears() {
    for (let i = PEAR_START; i < PEAR_START + PEAR_COUNT; i += 2) {
      position[i] = Math.random() * (canvas.width - PEAR_SIZE);
      size[i]= PEAR_SIZE;
      consumed[i] = 0;
    }
    for (let i = PEAR_START+1; i < PEAR_START + PEAR_COUNT; i += 2) {
      position[i] = Math.random() * (canvas.height - PEAR_SIZE);
      size[i] = PEAR_SIZE;
    }
  }
  
  function createEnemies() {
    for (let i = ENEMY_START; i < ENEMY_START + ENEMY_COUNT; i += 2) {
      position[i] = Math.random() * (canvas.width - ENEMY_SIZE);
      size[i] = ENEMY_SIZE;
      consumed[i] = 0;
    }
    for (let i = ENEMY_START+1; i < ENEMY_START + ENEMY_COUNT; i += 2) {
      position[i] = Math.random() * (canvas.width - ENEMY_SIZE);
      size[i] = ENEMY_SIZE;
    }
  }
  
  function drawEntity(sprite, x, y, w, h, angle) {
    if (!sprite || w <= 0 || h <= 0) return;
    const cx = x + w;
    const cy = y + h;
    ctx.save();
      ctx.translate(cx, cy);
    ctx.rotate(angle);
    ctx.drawImage(sprite, -w, -h, w, h);
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
    
  function createExplosion(x, y, radius, alpha) {
    const x_index=explosion_array_current_write_index
    const y_index=explosion_array_current_write_index + 1
    const radius_index=explosion_array_current_write_index + 2
    const alpha_index=explosion_array_current_write_index + 3
    if (explosion_array_current_write_index >= EXPLOSION_ARRAY_MAX_SIZE) {
      explosion_array_current_write_index = 0;
    }
  
  
    explosion_array[x_index] = x;
    explosion_array[y_index] = y;
    explosion_array[radius_index] = 5;
    explosion_array[alpha_index] = 1;  
    explosion_array_current_write_index += 4;
  }
  function updateExplosions(dt) {
    for (let i = 0; i < explosion_array_current_write_index; i += 4) {
      if (explosion_array[i + 2] < explosion_max_radius) {
        explosion_array[i + 2] += 64 * dt; 
      }
    }
    for (let i = 0; i < explosion_array_current_write_index; i += 4) {
      if (explosion_array[i + 3] > 0) {
        explosion_array[i + 3] -= 1.6 * dt;
      }
    }
  }
  function playExplosions() {
    for (let i = 0; i < explosion_array_current_write_index; i += 4) {
      if (explosion_array[i + 3] <= 0) continue;
      ctx.save();
      ctx.globalAlpha = explosion_array[i + 3];
      const gradient = ctx.createRadialGradient(
        explosion_array[i],     
        explosion_array[i + 1],
        0,
        explosion_array[i],    
        explosion_array[i + 1],
        explosion_array[i + 2] 
      );
  
      gradient.addColorStop(0, "white");
      gradient.addColorStop(0.2, "yellow");
      gradient.addColorStop(0.5, "orange");
      gradient.addColorStop(1, "red");
  
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(
        explosion_array[i], 
        explosion_array[i + 1], 
        explosion_array[i + 2],
        0, 
        Math.PI * 2
      );
      ctx.fill();
  
      ctx.restore();
    }
  }
  
  function broadPhase(start, count) {
    const px = position[PLAYER_ID_START];
    const py = position[PLAYER_ID_END];
    const ps = size[PLAYER_ID_START];
    const pcx = px + ps*0.5;
    const pcy = py + ps*0.5;
    const pr = ps*0.5;
  
    for (let n = 0; n < count; n++) {
      const i = start + n;
      if (consumed[i] || size[i] <= 0) continue;
      const s = size[i];
      const dx = pcx - (position[i] + s*0.5);
      const dy = pcy - (position[i+1] + s*0.5);
      const rr = pr + s*0.5;
      if (dx*dx + dy*dy <= rr*rr) return i;
    }
    return -1;
  }
  
  function setPlayerPos(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    position[PLAYER_ID_START] = (clientX - rect.left) * (canvas.width / rect.width) / (window.devicePixelRatio || 1);
    position[PLAYER_ID_END] = (clientY - rect.top) * (canvas.height / rect.height) / (window.devicePixelRatio || 1);
  }

  
  canvas.addEventListener("pointerenter",()=>{
    currentGameState=STATE_PLAYING
  },{touchAction:"none",once:false,signal})
  canvas.addEventListener("pointerleave",()=>{
    currentGameState=STATE_PAUSED
  },{touchAction:"none",once:false,signal})
  canvas.addEventListener("pointermove", e => {
      setPlayerPos(e.clientX, e.clientY);
  },{touchAction:"none",once:false,signal});
  canvas.addEventListener("pointerdown", () => {
    currentGameState = STATE_PLAYING;
  },{touchAction:"none",once:false,signal});
  function update(dt) {
    
    if (currentGameState!=STATE_PLAYING) return;
    pearTimer += dt;
    enemyTimer += dt;
    updateExplosions(dt);
    if (pearTimer >= PEAR_RATE) {
      createPears();
      pearTimer = 0;
    }
    if (enemyTimer >= ENEMY_RATE) {
      createEnemies();
      enemyTimer = 0;
    }
   collisionDetection() 
    if (size[PLAYER_ID_START] >= 100) currentGameState = STATE_WON;
    if (size[PLAYER_ID_START] <= 0) currentGameState = STATE_GAMEOVER;
  }
 function collisionDetection(){
  const hitPear = broadPhase(PEAR_START, PEAR_COUNT);
  const hitEnemy = broadPhase(ENEMY_START, ENEMY_COUNT);
  if (hitPear !== -1) {
    consumed[hitPear] = 1;
    
    playAudio(audio,"eat",false,1)
    reduceSize(hitPear, PEAR_GROW_RATE);
    increaseSize(PLAYER_ID_START, PLAYER_GROW_RATE);
    
  }

  if (hitEnemy !== -1) {
    consumed[hitEnemy] = 1;
    createExplosion(
      position[hitEnemy] + size[hitEnemy],
      position[hitEnemy + 1] + size[hitEnemy + 1]
    );
    playAudio(audio,"explosion",false,1)
    reduceSize(hitEnemy,ENEMY_GROW_RATE)
    reduceSize(PLAYER_ID_START, PLAYER_ENEMY_SHRINK_RATE);
  }
  reduceSize(PLAYER_ID_START, PLAYER_SHRINK_RATE);
  for (let n = 0; n < PEAR_COUNT; n++) {
    const i = PEAR_START + n;
    if (!consumed[i]) reduceSize(i, PEAR_SHRINK_RATE);
  }
  for (let n = 0; n < ENEMY_COUNT; n++) {
    const i = ENEMY_START + n;
    if (!consumed[i]) reduceSize(i, ENEMY_SHRINK_RATE);
  }

 }
  
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEntity(images.background, 0, 0, canvas.width, canvas.height, 0);
    drawEntity(images.player, position[PLAYER_ID_START], position[PLAYER_ID_END], size[PLAYER_ID_START], size[PLAYER_ID_END], 0);
    playExplosions();
    for (let i = PEAR_START; i < PEAR_START + PEAR_COUNT; i += 2) {
      if (!consumed[i] && size[i] > 0)
        drawEntity(images.pear, position[i], position[i+1], size[i], size[i+1], 0);
    }
  
    for (let i = ENEMY_START; i < ENEMY_START + ENEMY_COUNT; i += 2) {
      if (!consumed[i] && size[i] > 0)
        drawEntity(images.enemy, position[i], position[i+1], size[i], size[i+1], 0);
    }
  }
  
  function renderGameState() {
    const state = currentGameState;
    if (state === STATE_PLAYING) {
   
      render();
   ;
    } 
    else if (state === STATE_GAMEOVER) {
    
      drawEntity(images.gameOver, 0, 0, canvas.width, canvas.height, 0);
    
    
        setTimeout(() => {
     
          setGame();
       
        }, gameLostReset);
      }
    
    else if (state === STATE_WON) {

      drawEntity(images.win, 0, 0, canvas.width, canvas.height, 0);
     
        setTimeout(() => {
          setGame();
        }, gameWinReset);
      }
    
    else if (state ===STATE_PAUSED) {    
      drawEntity(images.gamePaused, 0, 0, canvas.width, canvas.height, 0);
     
    }
  }
 

  function gameTimer(ts){

    if (!lastTime) lastTime = ts;
  
    let dt = (ts - lastTime) / 1000;
    lastTime = ts;
    accumulator += dt;
  
    while (accumulator >= FIXED_STEP) 
      accumulator -= FIXED_STEP;
      
    update(FIXED_STEP);
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
    controller.abort();
   ;
  };
}
export default startGame