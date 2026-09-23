
function startGame(canvas, assets, dim) {
  setGameWindow(canvas, dim.width, dim.height);
  const ctx = canvas.getContext("2d");
  const gameScaleX = dim.width / 1000;
  const audio = assets.audio;
  const controller = new AbortController();
  const { signal } = controller;
  const STATE_NOT_PLAYING = 0;
  const STATE_PLAYING = 1;
  const STATE_PAUSED = 2;
  const STATE_WON = 3;
  const STATE_GAMEOVER = 4;
  let currentGameState = STATE_NOT_PLAYING;
  const PEAR_START = 0;
  const PEAR_COUNT = 20;
  const PEAR_RATE = 4;
  const PEAR_SIZE = 64 * gameScaleX;
  const PEAR_SHRINK_RATE = 0.1;
  const PEAR_GROW_RATE = 5;
  const PEAR_POSITIONS = new Float32Array(PEAR_COUNT);
  const PEAR_SIZES = new Float32Array(PEAR_COUNT);

  const ENEMY_COUNT = 20;
  const ENEMY_SIZE = 32 * gameScaleX;
  const ENEMY_RATE = 4;
  const ENEMY_SHRINK_RATE = 0.10;
  const ENEMY_GROW_RATE = 100;
  const ENEMY_POSITIONS = new Float32Array(ENEMY_COUNT);
  const ENEMY_SIZES = new Float32Array(ENEMY_COUNT);

  const PLAYER_ID_START = 0;
  const PLAYER_ID_END = 1;
  const PLAYER_ARRAY_SIZE = 2;
  const PLAYER_POSITIONS = new Float32Array(PLAYER_ARRAY_SIZE);
  const PLAYER_SIZES = new Float32Array(PLAYER_ARRAY_SIZE);
  const PLAYER_SIZE = 100 * gameScaleX;
  const PLAYER_SHRINK_RATE = 0.01;
  const PLAYER_ENEMY_SHRINK_RATE = 0.01;
  const PLAYER_GROW_RATE = 0.1;

  let enemyTimer = 0;
  let pearTimer = 0;
  let lastTime = 0;
  let accumulator = 0;
  const FIXED_STEP = 1 / 64;

  const gameWinReset = 200;
  const gameLostReset = 500;


  const EXPLOSION_ARRAY_MAX_SIZE = 64;

  const explosion_array =
    new Float32Array(EXPLOSION_ARRAY_MAX_SIZE);

  let explosion_array_current_write_index = 0;

  const explosion_max_radius = 50;

  const images = assets.images;
  let animationId = 0;

  function playAudio(audio, key, loop = false, volume = 1) {
    const audioClone = audio[key];

    if (!audioClone) return;

    audioClone.pause();
    audioClone.currentTime = 0;
    audioClone.loop = loop;
    audioClone.volume = volume;

    audioClone.play().catch(() => {});
  }

  function setGameWindow(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
  }

  function setGame() {
    createPlayer();
    createPears();
    createEnemies();

    enemyTimer = 0;
    pearTimer = 0;

    explosion_array.fill(0);
    explosion_array_current_write_index = 0;

    currentGameState = STATE_NOT_PLAYING;
  }



  function createPlayer() {
    PLAYER_POSITIONS[PLAYER_ID_START] =0
    PLAYER_POSITIONS[PLAYER_ID_END] =0
    PLAYER_SIZES[PLAYER_ID_START] = PLAYER_SIZE;
    PLAYER_SIZES[PLAYER_ID_END] = PLAYER_SIZE;
  }


  function createPears() {
    for (let i = PEAR_START; i < PEAR_COUNT; i += 2) {
      PEAR_POSITIONS[i] =
        Math.random() * Math.max(0, canvas.width - PEAR_SIZE);

      PEAR_POSITIONS[i + 1] =
        Math.random() * Math.max(0, canvas.height - PEAR_SIZE);

      PEAR_SIZES[i] = PEAR_SIZE;
      PEAR_SIZES[i + 1] = PEAR_SIZE;
    }
  }

  function createEnemies() {
    for (let i = 0; i < ENEMY_COUNT; i += 2) {
      ENEMY_POSITIONS[i] =
        Math.random() * Math.max(0, canvas.width - ENEMY_SIZE);

      ENEMY_POSITIONS[i + 1] =
        Math.random() * Math.max(0, canvas.height - ENEMY_SIZE);

      ENEMY_SIZES[i] = ENEMY_SIZE;
      ENEMY_SIZES[i + 1] = ENEMY_SIZE;
    }
  }

  function drawEntity(sprite, x, y, w, h, angle = 0) {
    if (!sprite || w <= 0 || h <= 0) return;

    const cx = x + w * 0.5;
    const cy = y + h * 0.5;

    ctx.save();

    ctx.translate(cx, cy);
    ctx.rotate(angle);

    ctx.drawImage(
      sprite,
      -w * 0.5,
      -h * 0.5,
      w,
      h
    );

    ctx.restore();
  }

  function reduceSize(entity_sizes, id, amount) {
    if (id < 0 || id + 1 >= entity_sizes.length) {
      return;
    }

    entity_sizes[id] -=amount
    entity_sizes[id + 1] -=amount
     
  }

  function increaseSize(entity_sizes, id, amount) {
    if (id < 0 || id + 1 >= entity_sizes.length) {
      return;
    }

    entity_sizes[id] += amount;
    entity_sizes[id + 1] += amount;
  }


  function createExplosion(x,y,type = "enemy") {
    if (
      explosion_array_current_write_index + 3 >=
      EXPLOSION_ARRAY_MAX_SIZE
    ) {
      explosion_array_current_write_index = 0;
    }

    const i = explosion_array_current_write_index;

    explosion_array[i] = x;
    explosion_array[i + 1] = y;
    explosion_array[i + 2] = 5;
    explosion_array[i + 3] = 1;
    if (type === "pear") {
      explosion_array[i + 2] = -5;
    }

    explosion_array_current_write_index += 4;
  }

  function updateExplosions(dt) {
    for (
      let i = 0;
      i < explosion_array_current_write_index;
      i += 4
    ) {
      let radius = explosion_array[i + 2];

      const isPearExplosion = radius < 0;

      radius = Math.abs(radius);

      if (radius < explosion_max_radius) {
        radius += 64 * dt;
      }

      if (radius > explosion_max_radius) {
        radius = explosion_max_radius;
      }

      explosion_array[i + 2] =
        isPearExplosion ? -radius : radius;

      if (explosion_array[i + 3] > 0) {
        explosion_array[i + 3] -= 1.6 * dt;
      }

      if (explosion_array[i + 3] < 0) {
        explosion_array[i + 3] = 0;
      }
    }
  }


  function playExplosions() {
    for (
      let i = 0;
      i < explosion_array_current_write_index;
      i += 4
    ) {
      const alpha = explosion_array[i + 3];

      if (alpha <= 0) continue;

      const rawRadius = explosion_array[i + 2];

      const isPearExplosion = rawRadius < 0;

      const radius = Math.abs(rawRadius);

      const x = explosion_array[i];
      const y = explosion_array[i + 1];

      ctx.save();

      ctx.globalAlpha = alpha;

      const gradient = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        radius
      );

      if (isPearExplosion) {
        gradient.addColorStop(
          0,
          "white"
        );

        gradient.addColorStop(
          0.20,
          "#f0ff80"
        );

        gradient.addColorStop(
          0.50,
          "#bfff00"
        );

        gradient.addColorStop(
          1,
          "#7fff00"
        );
      } else {
        gradient.addColorStop(
          0,
          "white"
        );

        gradient.addColorStop(
          0.20,
          "yellow"
        );

        gradient.addColorStop(
          0.50,
          "orange"
        );

        gradient.addColorStop(
          1,
          "red"
        );
      }

      ctx.fillStyle = gradient;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        radius,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();
    }
  }
  function broadPhase(
    entity_positions,
    entity_sizes,
    count
  ) {
    const px =
      PLAYER_POSITIONS[PLAYER_ID_START];

    const py =
      PLAYER_POSITIONS[PLAYER_ID_END];

    const ps =
      PLAYER_SIZES[PLAYER_ID_START];

    const pcx =
      px + ps * 0.5;

    const pcy =
      py + ps * 0.5;

    const pr =
      ps * 0.5;

    for (let n = 0; n < count; n += 2) {
      const s = entity_sizes[n];

      if (s <= 0) {
        continue;
      }

      const entityX =
        entity_positions[n];

      const entityY =
        entity_positions[n + 1];

      const ecx =
        entityX + s * 0.5;

      const ecy =
        entityY + s * 0.5;

      const dx = pcx - ecx;
      const dy = pcy - ecy;

      const radius =
        pr + s * 0.5;

      if (
        dx * dx + dy * dy <=
        radius * radius
      ) {
        return n;
      }
    }

    return -1;
  }

  function collisionDetection() {
    const hitPear = broadPhase(
      PEAR_POSITIONS,
      PEAR_SIZES,
      PEAR_COUNT
    );

    if (hitPear !== -1) {
      const pearX =
        PEAR_POSITIONS[hitPear];

      const pearY =
        PEAR_POSITIONS[hitPear + 1];

      const pearSize =
        PEAR_SIZES[hitPear];


      createExplosion(
        pearX + pearSize,
        pearY + pearSize,
        "pear"
      );

      playAudio(
        audio,
        "eat",
        false,
        1
      );

      
      reduceSize(
        PEAR_SIZES,
        hitPear,
        PEAR_GROW_RATE
      );

      increaseSize(
        PLAYER_SIZES,
        PLAYER_ID_START,
        PLAYER_GROW_RATE
      );
    }


    const hitEnemy = broadPhase(
      ENEMY_POSITIONS,
      ENEMY_SIZES,
      ENEMY_COUNT
    );

    if (hitEnemy !== -1) {
      const enemyX =
        ENEMY_POSITIONS[hitEnemy];

      const enemyY =
        ENEMY_POSITIONS[hitEnemy + 1];

      const enemySize =
        ENEMY_SIZES[hitEnemy];

      createExplosion(
        enemyX + enemySize * 0.5,
        enemyY + enemySize * 0.5,
        "enemy"
      );

      playAudio(
        audio,
        "explosion",
        false,
        1
      );

      // Remove enemy.
      reduceSize(
        ENEMY_SIZES,
        hitEnemy,
        ENEMY_GROW_RATE
      );

      // Shrink player.
      reduceSize(
        PLAYER_SIZES,
        PLAYER_ID_START,
        PLAYER_ENEMY_SHRINK_RATE
      );
    }
  }

  
  function reduceEntitySizes() {
    reduceSize(
      PLAYER_SIZES,
      PLAYER_ID_START,
      PLAYER_SHRINK_RATE
    );

    for (
      let i = 0;
      i < PEAR_COUNT;
      i += 2
    ) {
      reduceSize(
        PEAR_SIZES,
        i,
        PEAR_SHRINK_RATE
      );
    }


    for (
      let i = 0;
      i < ENEMY_COUNT;
      i += 2
    ) {
      reduceSize(
        ENEMY_SIZES,
        i,
        ENEMY_SHRINK_RATE
      );
    }
  }

  // ============================================================
  // PLAYER POSITION
  // ============================================================

  function setPlayerPos(clientX, clientY) {
    const rect =
      canvas.getBoundingClientRect();

    PLAYER_POSITIONS[PLAYER_ID_START] =
      (clientX - rect.left) *
      (canvas.width / rect.width);

    PLAYER_POSITIONS[PLAYER_ID_END] =
      (clientY - rect.top) *
      (canvas.height / rect.height);

    // Keep player inside canvas.
    const playerWidth =
      PLAYER_SIZES[PLAYER_ID_START];

    const playerHeight =
      PLAYER_SIZES[PLAYER_ID_END];

    PLAYER_POSITIONS[PLAYER_ID_START] =
      Math.max(
        0,
        Math.min(
          canvas.width - playerWidth,
          PLAYER_POSITIONS[PLAYER_ID_START]
        )
      );

    PLAYER_POSITIONS[PLAYER_ID_END] =
      Math.max(
        0,
        Math.min(
          canvas.height - playerHeight,
          PLAYER_POSITIONS[PLAYER_ID_END]
        )
      );
  }

  // ============================================================
  // INPUT
  // ============================================================

  canvas.addEventListener(
    "pointerenter",
    () => {
      currentGameState = STATE_PLAYING;
    },
    {
      signal
    }
  );

  canvas.addEventListener(
    "pointerleave",
    () => {
      currentGameState = STATE_PAUSED;
    },
    {
      signal
    }
  );

  canvas.addEventListener(
    "pointermove",
    event => {
      setPlayerPos(
        event.clientX,
        event.clientY
      );
    },
    {
      signal
    }
  );

  canvas.addEventListener(
    "pointerdown",
    event => {
      currentGameState = STATE_PLAYING;

      setPlayerPos(
        event.clientX,
        event.clientY
      );
    },
    {
      signal
    }
  );

  // ============================================================
  // UPDATE
  // ============================================================

  function update(dt) {
    if (
      currentGameState !==
      STATE_PLAYING
    ) {
      return;
    }

    reduceEntitySizes();

    collisionDetection();

    updateExplosions(dt);

    pearTimer += dt;
    enemyTimer += dt;

    // ----------------------------------------------------------
    // CREATE NEW PEARS
    // ----------------------------------------------------------

    if (pearTimer >= PEAR_RATE) {
      createPears();

      pearTimer = 0;
    }

    // ----------------------------------------------------------
    // CREATE NEW ENEMIES
    // ----------------------------------------------------------

    if (enemyTimer >= ENEMY_RATE) {
      createEnemies();

      enemyTimer = 0;
    }
  }

  // ============================================================
  // RENDER
  // ============================================================

  function render() {
    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    // Background
    drawEntity(
      images.background,
      0,
      0,
      canvas.width,
      canvas.height,
      0
    );

    // ----------------------------------------------------------
    // PLAYER
    // ----------------------------------------------------------

    for (
      let i = 0;
      i < PLAYER_ARRAY_SIZE;
      i += 2
    ) {
      drawEntity(
        images.player,
        PLAYER_POSITIONS[i],
        PLAYER_POSITIONS[i + 1],
        PLAYER_SIZES[i],
        PLAYER_SIZES[i + 1],
        0
      );
    }

    // ----------------------------------------------------------
    // PEARS
    // ----------------------------------------------------------

    for (
      let i = 0;
      i < PEAR_COUNT;
      i += 2
    ) {
      if (PEAR_SIZES[i] <= 0) {
        continue;
      }

      drawEntity(
        images.pear,
        PEAR_POSITIONS[i],
        PEAR_POSITIONS[i + 1],
        PEAR_SIZES[i],
        PEAR_SIZES[i + 1],
        0
      );
    }

    // ----------------------------------------------------------
    // ENEMIES
    // ----------------------------------------------------------

    for (
      let i = 0;
      i < ENEMY_COUNT;
      i += 2
    ) {
      if (ENEMY_SIZES[i] <= 0) {
        continue;
      }

      drawEntity(
        images.enemy,
        ENEMY_POSITIONS[i],
        ENEMY_POSITIONS[i + 1],
        ENEMY_SIZES[i],
        ENEMY_SIZES[i + 1],
        0
      );
    }

    // Explosions should be drawn last so they appear
    // over the entities.
    playExplosions();
  }

  // ============================================================
  // GAME STATE RENDERING
  // ============================================================

  let stateResetTimer = null;

  function renderGameState() {
    const state = currentGameState;
    if (state === STATE_NOT_PLAYING){
      drawEntity(
        images.loadingScreen,
        0,
        0,
        canvas.width,
        canvas.height,
        0
      );
     } 
    if (state === STATE_PLAYING) {
      render();
      return;
    }

    if (state === STATE_PAUSED) {

      drawEntity(
        images.gamePaused,
        0,
        0,
        canvas.width,
        canvas.height,
        0
      );

      return;
    }

    if (state === STATE_GAMEOVER) {
      drawEntity(
        images.gameOver,
        0,
        0,
        canvas.width,
        canvas.height,
        0
      );

      if (!stateResetTimer) {
        stateResetTimer = setTimeout(
          () => {
            stateResetTimer = null;
            setGame();
          },
          gameLostReset
        );
      }

      return;
    }

    if (state === STATE_WON) {
      drawEntity(
        images.win,
        0,
        0,
        canvas.width,
        canvas.height,
        0
      );
     

      // if (!stateResetTimer) {
      //   stateResetTimer = setTimeout(
      //     () => {
      //       stateResetTimer = null;
      //       setGame();
      //     },
      //     gameWinReset
      //   );
      // }

      return;
    }

    
  
  }

  // ============================================================
  // FIXED TIMESTEP GAME LOOP
  // ============================================================

  function gameTimer(ts) {
    if (!lastTime) {
      lastTime = ts;
      return;
    }

    const dt =
      Math.min(
        (ts - lastTime) / 1000,
        0.1
      );

    lastTime = ts;

    accumulator += dt;

    while (
      accumulator >= FIXED_STEP
    ) {
      update(FIXED_STEP);

      accumulator -= FIXED_STEP;
    }
  }

  function animate(ts) {
    animationId =
      requestAnimationFrame(animate);

    gameTimer(ts);

    renderGameState();
  }

  // ============================================================
  // START
  // ============================================================

  setGame();

  animationId =
    requestAnimationFrame(animate);
  return () => {
    cancelAnimationFrame(
      animationId
    );

    if (stateResetTimer) {
      clearTimeout(
        stateResetTimer
      );

      stateResetTimer = null;
    }

    controller.abort();
  };
}

export default startGame;
