JackDanger.Zhedar_PacJack = function() {
};

addMyGame("Zhedar_PacJack", "PacJack", "Zhedar", "Get the girl!", JackDanger.Zhedar_PacJack);


JackDanger.Zhedar_PacJack.prototype.init = function() {
    logInfo("init Zhedar_PacJack");
    addLoadingScreen(this);//nicht anfassen
}

JackDanger.Zhedar_PacJack.prototype.preload = function() {
    this.load.path = 'games/' + currentGameData.id + '/assets/';//nicht anfassen
    
    this.id = currentGameData.id;

    this.load.atlas(this.id);
}

//wird nach dem laden gestartet
JackDanger.Zhedar_PacJack.prototype.create = function() {
    Pad.init();//nicht anfassen
    removeLoadingScreen();//nicht anfassen

    this.addStuff();
}

//wird jeden Frame aufgerufen
JackDanger.Zhedar_PacJack.prototype.update = function() {
    var dt = this.time.physicsElapsedMS * 0.001;

    this.playerControlls(dt);
    this.doCollision();
    this.updateEnergy();
    this.movePacman();
}


JackDanger.Zhedar_PacJack.prototype.addStuff = function(dt) {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 0;

    this.createWorld();
    this.player.maxEnergy = 2000;
    this.player.energy = this.player.maxEnergy/2;

    var timer = game.time.create(false);
    timer.loop(500, this.animatePacman, this);
    timer.start();

    this.player.anchor.setTo(.5,.5);

    //game.physics.arcade.enable(game.world, true);

    this.energyText = game.add.bitmapText(100, 10, "testfont", "Energie: " + this.player.energy, 30);
    this.energyText.anchor.set(0.5);
}

JackDanger.Zhedar_PacJack.prototype.createWorld = function() {
    var playerObj = {type:"player"}; 
    var brickObj  = {type:"brick"};
    var pacmanObj = {type:"pacman"};

    this.bricks = game.add.group();
    this.mobs = game.add.group();

    this.counter = 1;

    //create world model
    this.world = new Array(40)
    for(i=0; i < this.world.length; i++)
        this.world[i] = new Array(22);

    this.world[5][5] = playerObj;

    this.world[20][17] = pacmanObj;

    //lets brick da boundaries
    for(i=0; i < this.world.length; i++) {
        this.world[i][0] =  brickObj;
        this.world[i][21] = brickObj;
    }

    for(i=0; i < 22; i++) {
        this.world[0][i] = brickObj;
        this.world[39][i] = brickObj;
    }

    for(i=0; i < this.world.length; i++)
        for(j=0; j < this.world[i].length; j++) {
            var entity = this.world[i][j];
            if(typeof entity === 'undefined')
                continue;

            switch(entity.type) {
                case "brick":
                    var brickSprite = this.add.sprite(i*20,j*20, this.id, "brick.png");
                    game.physics.enable(brickSprite, Phaser.Physics.ARCADE);
                    brickSprite.body.immovable = true;
                    brickSprite.body.collideWorldBounds = true;

                    this.bricks.add(brickSprite);
                    break;
                case "player":
                    this.player = this.add.sprite(i*20,j*20, this.id, "jack.png");
                    game.physics.enable(this.player, Phaser.Physics.ARCADE);
                    break;
                case "pacman":
                    var pacmanSprite = this.add.sprite(i*20, j*20, this.id, "pacman1.png");
                        pacmanSprite.anchor.setTo(.5,.5);
                    game.physics.enable(pacmanSprite, Phaser.Physics.ARCADE);
                    this.mobs.add(pacmanSprite);
                    break;
            }
        }
}

JackDanger.Zhedar_PacJack.prototype.doCollision = function() {
    this.game.physics.arcade.collide(this.player, this.bricks, this.collisionHandler, null, this);
    this.game.physics.arcade.collide(this.player, this.mobs,  this.collisionHandler2, null, this);
    this.game.physics.arcade.collide(this.mobs,   this.bricks, this.collisionHandler, null, this);
}

JackDanger.Zhedar_PacJack.prototype.updateEnergy = function() {
    if(this.player.energy < this.player.maxEnergy)
        this.player.energy ++;

    this.energyText.setText("Energie: " + this.player.energy);
}

JackDanger.Zhedar_PacJack.prototype.animatePacman = function() {
    if(this.counter==2)
        this.counter--;
    else
        this.counter++;

    var player =  this.player;
    var counter = this.counter;
    this.mobs.forEach(function(sprite) {
        sprite.frameName = "pacman" + counter + ".png";
    });
}

JackDanger.Zhedar_PacJack.prototype.movePacman = function () {
    var player =  this.player;
    this.mobs.forEach(function(sprite) {
        sprite.rotation = game.physics.arcade.angleBetween(sprite, player);
        game.physics.arcade.moveToObject(sprite, player, 120);
    });

}


JackDanger.Zhedar_PacJack.prototype.collisionHandler = function(obj1, obj2) {
    //TODO implement special collision effects
}

JackDanger.Zhedar_PacJack.prototype.collisionHandler2 = function(obj1, obj2) {
    //TODO implement special collision effects
    onLose();
}

JackDanger.Zhedar_PacJack.prototype.playerControlls = function(dt) {
    var speed = 200;

    if(Pad.isDown(Pad.JUMP) && this.player.energy > 10) {
        this.player.energy-=10;
        speed*=2;
    }

    if (Pad.isDown(Pad.LEFT)) {
        this.player.body.velocity.x = -1*speed;
        this.player.body.velocity.y = 0;
        this.player.angle= 90;
    }
    else if (Pad.isDown(Pad.RIGHT)) {
        this.player.body.velocity.x = speed;
        this.player.body.velocity.y = 0;
        this.player.angle = 270;
    }
    else if (Pad.isDown(Pad.UP)) {
        this.player.body.velocity.y = -1*speed;
        this.player.body.velocity.x = 0;
        this.player.angle = 180;
    }
    else if (Pad.isDown(Pad.DOWN)) {
         this.player.body.velocity.y = speed;
         this.player.body.velocity.x = 0;
         this.player.angle = 0;
    }
    else {
        this.player.body.velocity.y = 0;
        this.player.body.velocity.x = 0;
    }
}