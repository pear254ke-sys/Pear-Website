import { gameImages } from "../../utils/data";
function startGame(canvas,gameStateRef){;
  window.addEventListener("resize", setGameWindow);
  const ctx = canvas.getContext("2d");
  const images=loadImages()
  const GAME_STATES = {
    STATE_PLAYING: 0,
    STATE_PAUSED: 1,
    STATE_WON: 2,
    STATE_GAMEOVER: 3
  };
  const pearShrinkRate=generateRandomShrinkRates(0.1,0.10)
  const PEAR = {
    PEAR_START: 2,
    PEAR_COUNT: 10,
    PEAR_RATE: 2,
    PEAR_SIZE: 50,
    PEAR_SHRINK_RATE:pearShrinkRate,
    PEAR_GROW_RATE:5
   
  };
  const enemyShrinkRate=generateRandomShrinkRates(0.1,0.5)
  const ENEMY = {
    ENEMY_COUNT: 10,
    ENEMY_SIZE: 50,
    ENEMY_RATE: 5,
    ENEMY_START: PEAR.PEAR_START + PEAR.PEAR_COUNT * 2,
    ENEMY_SHRINK_RATE:enemyShrinkRate,
    ENEMY_GROW_RATE:10
  
  };
  
  const PLAYER = {
    PLAYER_ID: 0,
    PLAYER_SIZE: 70,
    PLAYER_SHRINK_RATE:0.1,
    PLAYER_ENEMY_SHRINK_RATE:5,
    PLAYER_GROW_RATE:1,
  };
  
  const TIMER = {
    enemyTimer: 0,
    pearTimer: 0,
    lastTime: 0,
    accumulator: 0,
    FIXED_STEP: 1/60
  };
  function generateRandomShrinkRates(min, max) {
    return Math.random() * (max - min) + min;
  }
  function GameEntityVectors() {
    const ENTITY_SIZE = 42;
    return {
      position: new Float32Array(ENTITY_SIZE),
      size: new Float32Array(ENTITY_SIZE),
      consumed: new Uint8Array(ENTITY_SIZE)
    };
  }
  function loadImages(){
const images={}
for(let key in gameImages){
images[key]=loadImage(gameImages[key])
}
return images
  }
  function loadImage(src) {
    const img = new Image();
    img.src = src;
    return img;
  }
  setGameWindow()
  const gameData = GameEntityVectors();
  const position = gameData.position;
  const size = gameData.size;
  const consumed = gameData.consumed;
  
  // const audio = {
  //   eat: document.getElementById("eat"),
  //   bomb_audio: document.getElementById("bomb_audio")
  // };
  
  
  function playSound(sound) {
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();
  }
  
  function setGameWindow() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
  
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
  
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function resetGame() {
    gameStateRef.current = GAME_STATES.STATE_PAUSED;
    TIMER.enemyTimer = 0;
    TIMER.pearTimer = 0;
    createPlayer();
    createPears();
    createEnemies();
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
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    position[PLAYER.PLAYER_ID] = (clientX - rect.left) * scaleX;
    position[PLAYER.PLAYER_ID+1] = (clientY - rect.top) * scaleY;
  }
  canvas.addEventListener("pointerenter",()=>{
    gameStateRef.current=GAME_STATES.STATE_PLAYING
  })
  canvas.addEventListener("pointerleave",()=>{
    gameStateRef.current=GAME_STATES.STATE_PAUSED
  })
  canvas.addEventListener("pointermove", e => {
    if (parseInt(gameStateRef.current) === GAME_STATES.STATE_PLAYING) {
      setPlayerPos(e.clientX, e.clientY);
    }
  },{touchAction:"none"});
  canvas.addEventListener("pointerdown", () => {
    gameStateRef.current = GAME_STATES.STATE_PLAYING;
  },{touchAction:"none"});
  function update(dt) {
    TIMER.pearTimer += dt;
    TIMER.enemyTimer += dt;
  
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
      // playSound(audio.eat);
      reduceSize(hitPear, PEAR.PEAR_GROW_RATE);
      increaseSize(PLAYER.PLAYER_ID, PLAYER.PLAYER_GROW_RATE);
    }
  
    if (hitEnemy !== -1) {
      consumed[hitEnemy] = 1;
      // playSound(audio.bomb_audio);
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
  
    if (size[PLAYER.PLAYER_ID] >= 100) gameStateRef.current = GAME_STATES.STATE_WON;
    if (size[PLAYER.PLAYER_ID] <= 0) gameStateRef.current = GAME_STATES.STATE_GAMEOVER;
  }
  
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawEntity(images.gameBg, 0, 0, canvas.width, canvas.height, 0);
    drawEntity(images.playerImg, position[PLAYER.PLAYER_ID], position[PLAYER.PLAYER_ID+1], size[PLAYER.PLAYER_ID], size[PLAYER.PLAYER_ID+1], 0);
  
    for (let i = PEAR.PEAR_START; i < PEAR.PEAR_START + PEAR.PEAR_COUNT*2; i += 2) {
      if (!consumed[i] && size[i] > 0)
        drawEntity(images.pearImg, position[i], position[i+1], size[i], size[i+1], 0);
    }
  
    for (let i = ENEMY.ENEMY_START; i < ENEMY.ENEMY_START + ENEMY.ENEMY_COUNT*2; i += 2) {
      if (!consumed[i] && size[i] > 0)
        drawEntity(images.bombImg, position[i], position[i+1], size[i], size[i+1], 0);
    }
  }
  
  function gameStatesEffects() {
    
 if (parseInt(gameStateRef.current) === GAME_STATES.STATE_PLAYING) {
      render();
      update(TIMER.FIXED_STEP);
    } else if (parseInt(gameStateRef.current) === GAME_STATES.STATE_GAMEOVER) {
      drawEntity(images.gameOver, 0, 0, canvas.width, canvas.height, 0);
    } else if (parseInt(gameStateRef.current) === GAME_STATES.STATE_WON) {
      drawEntity(images.gameWon, 0, 0, canvas.width, canvas.height, 0);
    }
    else if(parseInt(gameStateRef.current) === GAME_STATES.STATE_PAUSED){
      drawEntity(images.gamePaused, 0, 0, canvas.width, canvas.height, 0);
    
    }
  }
  
  function animate(ts) {
    requestAnimationFrame(animate);
    if (!TIMER.lastTime) TIMER.lastTime = ts;
    let dt = (ts - TIMER.lastTime)/1000;
    TIMER.lastTime = ts;
    TIMER.accumulator += dt;
    while (TIMER.accumulator >= TIMER.FIXED_STEP) {
      TIMER.accumulator -= TIMER.FIXED_STEP;
      gameStatesEffects();
    }
  }
  
 
  resetGame();
  requestAnimationFrame(animate);
  
  
 
}
export default startGame