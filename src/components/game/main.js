
function startGame(canvas,gameStateRef,config,dim){
  setGameWindow(canvas,dim.width,dim.height)
  const ctx = canvas.getContext("2d");
  const gameScaleX=dim.width/800
  const configImages=config.images
  const configAudio=config.audio
  const currentLevel=getCurrentLevel()
  const gameLevelChange={
    winSizeCodition:100,
    loseSizeCondition:20,
    noOfEnemiesOnScreen:10,
    noOfPearsOnScreen:10,
    enemyShrinkRate:generateRandomShrinkRates(0.1,0.10),
    pearShrinkRate:generateRandomShrinkRates(0.1,0.10),
    enemyRate:5,
    pearRate:2,
    playerShrinkRate:0.1,
    playerPearGrowRate:0.5,
    playerEnemyShrinkRate:1,
  }
  setGameSettings(currentLevel,gameLevelChange)
  let images=loadImages(configImages)
  const GAME_STATES = {
    STATE_PLAYING: 0,
    STATE_PAUSED: 1,
    STATE_WON: 2,
    STATE_GAMEOVER: 3
  };

  const PEAR = {
    PEAR_START: 2,
    PEAR_COUNT: gameLevelChange.noOfPearsOnScreen,
    PEAR_RATE: gameLevelChange.pearRate,
    PEAR_SIZE: 60 * gameScaleX,
    PEAR_SHRINK_RATE:gameLevelChange.pearShrinkRate,
    PEAR_GROW_RATE:100
   
  };
  const ENEMY = {
    ENEMY_COUNT: gameLevelChange.noOfEnemiesOnScreen,
    ENEMY_SIZE: 30 * gameScaleX,
    ENEMY_RATE: gameLevelChange.enemyRate,
    ENEMY_START: PEAR.PEAR_START + PEAR.PEAR_COUNT * 2,
    ENEMY_SHRINK_RATE:gameLevelChange.enemyShrinkRate,
    ENEMY_GROW_RATE:100
  
  };
  const EXPLOSIONS={
    START:ENEMY.ENEMY_START + ENEMY.ENEMY_COUNT,
    SIZE:20,
    FRAME_WIDTH: 64,
   FRAME_HEIGHT: 64,
   TOTAL_FRAMES: 16,
   FPS: 12
  }
  const explosion_array=[]
  const PLAYER = {
    PLAYER_ID: 0,
    PLAYER_SIZE: 60 * gameScaleX,
    PLAYER_SHRINK_RATE:gameLevelChange.playerShrinkRate,
    PLAYER_ENEMY_SHRINK_RATE:gameLevelChange.playerEnemyShrinkRate,
    PLAYER_GROW_RATE:gameLevelChange.playerPearGrowRate,
  };
  
  const TIMER = {
    enemyTimer: 0,
    pearTimer: 0,
    lastTime: 0,
    accumulator: 0,
    FIXED_STEP: 1/60
  };
  function getCurrentLevel(){
    const key="current-level"
    let level=localStorage.getItem(key);
    if(level===null){
      level=1
    }
    return level
  }
  function setCurrentLevel(){
    const key="current-level"
    currentLevel++
    localStorage.setItem(key,currentLevel)
  }
  function generateRandomShrinkRates(min, max) {
    return Math.random() * (max - min) + min;
  }
  function GameEntityVectors() {
    const ENTITY_SIZE = 50;
    return {
      position: new Float32Array(ENTITY_SIZE),
      size: new Float32Array(ENTITY_SIZE),
      consumed: new Uint8Array(ENTITY_SIZE)
    };
  }
  function loadImages(configImages){
const images={}
for(let key in configImages){
images[key]=loadImage(configImages[key])
}
return images
  }
  function drawScoreboard(score, countToNextLevel) {
    const padding = 12;
    const x = padding;
    const y = padding;
    ctx.font = "16px Inter, sans-serif";
    ctx.textBaseline = "top";
    const boxWidth = 100;
    const boxHeight = 30;
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(x - 8, y - 8, boxWidth, boxHeight);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`Level: ${currentLevel}`, x, y);
    ctx.fillText(`Score: ${score}`, x, y + 22);
    ctx.fillText(`Next: ${countToNextLevel}`, x, y + 44);
  }
  function loadImage(src) {
    const img = new Image();
    img.src = src;
    return img;
  }
 
  const gameData = GameEntityVectors();
  const position = gameData.position;
  const size = gameData.size;
  const consumed = gameData.consumed;  
  function playAudio(sound,islooped,volume) {
    if (!sound) return;
    sound.currentTime = 0;
    sound.loop=islooped;
    sound.volume=volume
    sound.play();
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
  function resetGame() {
    TIMER.enemyTimer = 0;
    TIMER.pearTimer = 0;
    images=loadImages(configImages)
    createPlayer();
    createPears();
    createEnemies();
    setGameSettings(currentLevel,gameLevelChange)
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

    function setGameSettings(currentLevel, gameLevelChange) {
      const level = parseInt(currentLevel) || 1;
      gameLevelChange.noOfEnemiesOnScreen = Math.min(10 + level * 2, 40);
      gameLevelChange.noOfPearsOnScreen = Math.max(10 - level, 3);
      gameLevelChange.enemyRate = Math.max(5 - level * 0.3, 1.5);
      gameLevelChange.pearRate = Math.max(2 - level * 0.1, 0.8);
      gameLevelChange.enemyShrinkRate = generateRandomShrinkRates(
        0.1 + level * 0.05,
        0.2 + level * 0.05
      );
    
      gameLevelChange.pearShrinkRate = generateRandomShrinkRates(
        0.05 + level * 0.02,
        0.1 + level * 0.03
      );
      gameLevelChange.playerShrinkRate = 0.01 + level * 0.02;
      gameLevelChange.playerEnemyShrinkRate = 1 + level * 0.3;
      gameLevelChange.playerPearGrowRate = Math.max(0.5 - level * 0.03, 0.2);
      gameLevelChange.winSizeCodition = 100 + level * 10;
      gameLevelChange.loseSizeCondition = Math.max(20 - level * 2, 5);
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
    position[PLAYER.PLAYER_ID] = (clientX - rect.left) * (canvas.width / rect.width) / (window.devicePixelRatio || 1);
    position[PLAYER.PLAYER_ID+1] = (clientY - rect.top) * (canvas.height / rect.height) / (window.devicePixelRatio || 1);
  }

  
  canvas.addEventListener("pointerenter",()=>{
    gameStateRef.current=GAME_STATES.STATE_PLAYING
  },{touchAction:"none"})
  canvas.addEventListener("pointerleave",()=>{
    gameStateRef.current=GAME_STATES.STATE_PAUSED
  },{touchAction:"none"})
  canvas.addEventListener("pointermove", e => {
    if (parseInt(gameStateRef.current) === GAME_STATES.STATE_PLAYING) {
      setPlayerPos(e.clientX, e.clientY);
    }
  },{touchAction:"none"});
  canvas.addEventListener("pointerdown", () => {
    gameStateRef.current = GAME_STATES.STATE_PLAYING;
  },{touchAction:"none"});
  function update(dt) {
    if (gameStateRef.current !== GAME_STATES.STATE_PLAYING) return;
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
      playAudio(configAudio.eat,false,1);
      reduceSize(hitPear, PEAR.PEAR_GROW_RATE);
      increaseSize(PLAYER.PLAYER_ID, PLAYER.PLAYER_GROW_RATE);
      
    }
  
    if (hitEnemy !== -1) {
      consumed[hitEnemy] = 1;
      playAudio(configAudio.explosion,false,1);
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
    drawEntity(images.background, 0, 0, canvas.width, canvas.height, 0);
    drawEntity(images.player, position[PLAYER.PLAYER_ID], position[PLAYER.PLAYER_ID+1], size[PLAYER.PLAYER_ID], size[PLAYER.PLAYER_ID+1], 0);
    drawScoreboard(2, 100, 50)
    for (let i = PEAR.PEAR_START; i < PEAR.PEAR_START + PEAR.PEAR_COUNT*2; i += 2) {
      if (!consumed[i] && size[i] > 0)
        drawEntity(images.fodder, position[i], position[i+1], size[i], size[i+1], 0);
    }
  
    for (let i = ENEMY.ENEMY_START; i < ENEMY.ENEMY_START + ENEMY.ENEMY_COUNT*2; i += 2) {
      if (!consumed[i] && size[i] > 0)
        drawEntity(images.enemy, position[i], position[i+1], size[i], size[i+1], 0);
    }
  }
  window.addEventListener('click', () => {
    playAudio(configAudio.bg_track,true,0.5);
}, { once: true });
  function renderGameState() {
    const state = gameStateRef.current;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    if (state === GAME_STATES.STATE_PLAYING) {
      configAudio.bg_track.play()
      configAudio.bg_track.loop=true
      configAudio.bg_track.volume=0.5
      render();
    } 
    else if (state === GAME_STATES.STATE_GAMEOVER) {
   
      drawEntity(images.gameOver, 0, 0, canvas.width, canvas.height, 0);
    resetGame()
    for(let audioKey in configAudio){
      stopAudio(configAudio[audioKey])
    }
    } 
    else if (state === GAME_STATES.STATE_WON) {
   
      drawEntity(images.gameWon, 0, 0, canvas.width, canvas.height, 0);
    
      setCurrentLevel()
      resetGame()
    } 
    else if (state === GAME_STATES.STATE_PAUSED) {
      for(let audioKey in configAudio){
        stopAudio(configAudio[audioKey])
      }
      drawEntity(images.gamePaused, 0, 0, canvas.width, canvas.height, 0);
    }
  }
  let animationId=undefined;
  function animate(ts) {
    animationId = requestAnimationFrame(animate);
  
    if (!TIMER.lastTime) TIMER.lastTime = ts;
  
    let dt = (ts - TIMER.lastTime) / 1000;
    TIMER.lastTime = ts;
    TIMER.accumulator += dt;
  
    while (TIMER.accumulator >= TIMER.FIXED_STEP) {
      TIMER.accumulator -= TIMER.FIXED_STEP;
      update(TIMER.FIXED_STEP);
    }
  
    renderGameState();
  }
  
 
  resetGame();
  requestAnimationFrame(animate);
  
  
  return () => {
    cancelAnimationFrame(animationId);
   ;
  };
}
export default startGame