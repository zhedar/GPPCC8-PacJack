JackDanger.Zhedar_PacJack = function() {
};

addMyGame("Zhedar_PacJack", "PacJack", "Zhedar", "Entkomme aus Pacmans Verlies!", "Laufen", "Sprinten", "Kirschkerne spucken", JackDanger.Zhedar_PacJack);


JackDanger.Zhedar_PacJack.prototype.init = function() {
    logInfo("init Zhedar_PacJack", false);
    addLoadingScreen(this, false); 

    var EasyStar=EasyStar||{};"function"==typeof define&&define.amd&&define("easystar",[],function(){return EasyStar}),"undefined"!=typeof module&&module.exports&&(module.exports=EasyStar),EasyStar.Node=function(t,n,e,i,s){this.parent=t,this.x=n,this.y=e,this.costSoFar=i,this.simpleDistanceToTarget=s,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}},EasyStar.Node.OPEN_LIST=0,EasyStar.Node.CLOSED_LIST=1,EasyStar.PriorityQueue=function(t,n){this.length=0;var e=[],i=!1;if(n==EasyStar.PriorityQueue.MAX_HEAP)i=!0;else{if(n!=EasyStar.PriorityQueue.MIN_HEAP)throw n+" not supported.";i=!1}this.insert=function(n){if(!n.hasOwnProperty(t))throw"Cannot insert "+n+" because it does not have a property by the name of "+t+".";e.push(n),this.length++,s(this.length-1)},this.getHighestPriorityElement=function(){return e[0]},this.shiftHighestPriorityElement=function(){if(0===this.length)throw"There are no more elements in your priority queue.";if(1===this.length){var t=e[0];return e=[],this.length=0,t}var n=e[0],i=e.pop();return this.length--,e[0]=i,o(0),n};var s=function(t){if(0!==t){var n=u(t);a(t,n)&&(r(t,n),s(n))}},o=function(t){var n=h(t),e=c(t);if(a(n,t))r(t,n),o(n);else if(a(e,t))r(t,e),o(e);else{if(0==t)return;o(0)}},r=function(t,n){var i=e[t];e[t]=e[n],e[n]=i},a=function(n,s){if(void 0===e[s]||void 0===e[n])return!1;var o,r;return"function"==typeof e[n][t]?(o=e[n][t](),r=e[s][t]()):(o=e[n][t],r=e[s][t]),i?o>r?!0:!1:r>o?!0:!1},u=function(t){return Math.floor((t-1)/2)},h=function(t){return 2*t+1},c=function(t){return 2*t+2}},EasyStar.PriorityQueue.MAX_HEAP=0,EasyStar.PriorityQueue.MIN_HEAP=1,EasyStar.instance=function(){this.isDoneCalculating=!0,this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList},EasyStar.js=function(){var t,n,e,i=1,s=1.4,o=!1,r={},a={},u={},h=!0,c=[],l=Number.MAX_VALUE,f=!1;this.setAcceptableTiles=function(t){t instanceof Array?e=t:!isNaN(parseFloat(t))&&isFinite(t)&&(e=[t])},this.enableSync=function(){o=!0},this.disableSync=function(){o=!1},this.enableDiagonals=function(){f=!0},this.disableDiagonals=function(){f=!1},this.setGrid=function(n){t=n;for(var e=0;e<t.length;e++)for(var i=0;i<t[0].length;i++)a[t[e][i]]||(a[t[e][i]]=1)},this.setTileCost=function(t,n){a[t]=n},this.setAdditionalPointCost=function(t,n,e){u[t+"_"+n]=e},this.removeAdditionalPointCost=function(t,n){delete u[t+"_"+n]},this.removeAllAdditionalPointCosts=function(){u={}},this.setIterationsPerCalculation=function(t){l=t},this.avoidAdditionalPoint=function(t,n){r[t+"_"+n]=1},this.stopAvoidingAdditionalPoint=function(t,n){delete r[t+"_"+n]},this.enableCornerCutting=function(){h=!0},this.disableCornerCutting=function(){h=!1},this.stopAvoidingAllAdditionalPoints=function(){r={}},this.findPath=function(n,s,r,a,u){var h=function(t){o?u(t):setTimeout(function(){u(t)})};if(void 0===e)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(void 0===t)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(0>n||0>s||0>r||0>r||n>t[0].length-1||s>t.length-1||r>t[0].length-1||a>t.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(n===r&&s===a)return h([]),void 0;for(var l=t[a][r],f=!1,y=0;y<e.length;y++)if(l===e[y]){f=!0;break}if(f===!1)return h(null),void 0;var d=new EasyStar.instance;d.openList=new EasyStar.PriorityQueue("bestGuessDistance",EasyStar.PriorityQueue.MIN_HEAP),d.isDoneCalculating=!1,d.nodeHash={},d.startX=n,d.startY=s,d.endX=r,d.endY=a,d.callback=h,d.openList.insert(p(d,d.startX,d.startY,null,i)),c.push(d)},this.calculate=function(){if(0!==c.length&&void 0!==t&&void 0!==e)for(n=0;l>n;n++){if(0===c.length)return;if(o&&(n=0),0!==c[0].openList.length){var r=c[0].openList.shiftHighestPriorityElement(),a=[];r.list=EasyStar.Node.CLOSED_LIST,r.y>0&&a.push({instance:c[0],searchNode:r,x:0,y:-1,cost:i*v(r.x,r.y-1)}),r.x<t[0].length-1&&a.push({instance:c[0],searchNode:r,x:1,y:0,cost:i*v(r.x+1,r.y)}),r.y<t.length-1&&a.push({instance:c[0],searchNode:r,x:0,y:1,cost:i*v(r.x,r.y+1)}),r.x>0&&a.push({instance:c[0],searchNode:r,x:-1,y:0,cost:i*v(r.x-1,r.y)}),f&&(r.x>0&&r.y>0&&(h||d(t,e,r.x,r.y-1)&&d(t,e,r.x-1,r.y))&&a.push({instance:c[0],searchNode:r,x:-1,y:-1,cost:s*v(r.x-1,r.y-1)}),r.x<t[0].length-1&&r.y<t.length-1&&(h||d(t,e,r.x,r.y+1)&&d(t,e,r.x+1,r.y))&&a.push({instance:c[0],searchNode:r,x:1,y:1,cost:s*v(r.x+1,r.y+1)}),r.x<t[0].length-1&&r.y>0&&(h||d(t,e,r.x,r.y-1)&&d(t,e,r.x+1,r.y))&&a.push({instance:c[0],searchNode:r,x:1,y:-1,cost:s*v(r.x+1,r.y-1)}),r.x>0&&r.y<t.length-1&&(h||d(t,e,r.x,r.y+1)&&d(t,e,r.x-1,r.y))&&a.push({instance:c[0],searchNode:r,x:-1,y:1,cost:s*v(r.x-1,r.y+1)})),a.sort(function(t,n){var e=t.cost+g(r.x+t.x,r.y+t.y,c[0].endX,c[0].endY),i=n.cost+g(r.x+n.x,r.y+n.y,c[0].endX,c[0].endY);return i>e?-1:e===i?0:1});for(var u=!1,p=0;p<a.length;p++)if(y(a[p].instance,a[p].searchNode,a[p].x,a[p].y,a[p].cost),a[p].instance.isDoneCalculating===!0){u=!0;break}u&&c.shift()}else{var x=c[0];x.callback(null),c.shift()}}};var y=function(n,i,s,o,a){var u=i.x+s,h=i.y+o;if(void 0===r[u+"_"+h]){if(n.endX===u&&n.endY===h){n.isDoneCalculating=!0;var c=[],l=0;c[l]={x:u,y:h},l++,c[l]={x:i.x,y:i.y},l++;for(var f=i.parent;null!=f;)c[l]={x:f.x,y:f.y},l++,f=f.parent;c.reverse();var y=n,v=c;return y.callback(v),void 0}if(d(t,e,u,h)){var g=p(n,u,h,i,a);void 0===g.list?(g.list=EasyStar.Node.OPEN_LIST,n.openList.insert(g)):g.list===EasyStar.Node.OPEN_LIST&&i.costSoFar+a<g.costSoFar&&(g.costSoFar=i.costSoFar+a,g.parent=i)}}},d=function(t,n,e,i){for(var s=0;s<n.length;s++)if(t[i][e]===n[s])return!0;return!1},v=function(n,e){return u[n+"_"+e]||a[t[e][n]]},p=function(t,n,e,i,s){if(void 0!==t.nodeHash[n+"_"+e])return t.nodeHash[n+"_"+e];var o=g(n,e,t.endX,t.endY);if(null!==i)var r=i.costSoFar+s;else r=o;var a=new EasyStar.Node(i,n,e,r,o);return t.nodeHash[n+"_"+e]=a,a},g=function(t,n,e,i){return Math.sqrt((e-=t)*e+(i-=n)*i)}};
    this.easystar = new EasyStar.js();
}

JackDanger.Zhedar_PacJack.prototype.preload = function() {
    this.load.path = 'games/' + currentGameData.id + '/assets/';//nicht anfassen

    game.load.tilemap('tilemap', 'pacjack.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('brick', 'brick2.png');
    game.load.image('brick_broken0', 'brick_broken0.png');
    game.load.image('brick_broken1', 'brick_broken1.png');
    game.load.image('brick_broken2', 'brick_broken2.png');
    game.load.image('brick2_mossy', 'brick2_mossy.png');
    game.load.image('ground3', 'ground3.png');
    game.load.image('stairs_up', 'stairs_up.png');
    game.load.image('stairs_down', 'stairs_down.png');

    game.load.image('key', 'key.png');
    game.load.image('cherry', 'cherry.png');
    game.load.image('cherries', 'cherries.png');
    game.load.image('cherry_seed', 'cherry_seed.png');

    game.load.atlas("pacman");
    game.load.atlas("jack");
    game.load.audio('powerup_sfx', 'Powerup.mp3');
    
    this.id = currentGameData.id;   
}

//wird nach dem laden gestartet
JackDanger.Zhedar_PacJack.prototype.create = function() {
    Pad.init();//nicht anfassen
}

//wird jeden Frame aufgerufen
JackDanger.Zhedar_PacJack.prototype.update = function() {
    this.playerControls();
    this.doCollision();
    this.updateEnergy();
}

JackDanger.Zhedar_PacJack.prototype.mycreate = function() {
    this.counter = 1;
    game.add.audio('sfx').allowMultiple = true;

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 0;

    game.physics.arcade.setBounds(0, 0, 800, 400);

    this.map = game.add.tilemap('tilemap');
    this.map.addTilesetImage("brick");
    this.map.addTilesetImage('cherries');
    this.map.addTilesetImage('key');
    this.map.addTilesetImage('brick2_mossy');
    this.map.addTilesetImage('brick_broken0');
    this.map.addTilesetImage('brick_broken1');
    this.map.addTilesetImage('brick_broken2');
    this.map.addTilesetImage('ground3');
    this.map.addTilesetImage('stairs_up');
    this.map.addTilesetImage('stairs_down');
    
    this.map.createLayer('Ground').resizeWorld();
    this.bricks = this.map.createLayer('Walls');
    game.physics.enable(this.bricks);
    //this.bricks.enableBody = true;

    this.bricks.resizeWorld();

    this.cherries = this.createFromObjectLayer(4, 'cherries');
    this.keys     = this.createFromObjectLayer(3, 'key');

    this.seeds = game.add.group();
    this.seeds.enableBody = true;
    this.seeds.physicsBodyType = Phaser.Physics.ARCADE;

    this.seeds.createMultiple(10, 'cherry_seed');
    this.seeds.setAll('checkWorldBounds', true);
    this.seeds.setAll('outOfBoundsKill', true);
    
    this.seedCount = 0;

    this.player = game.add.sprite(30,30, "jack", "jack0.png");
    this.player.animations.add("walk", ["jack1.png", "jack2.png"], 4, true, false);
    this.player.animations.play("walk");
    this.player.anchor.setTo(.5,.5);
    this.player.maxEnergy = 2000;
    this.player.energy = this.player.maxEnergy/2;
    this.player.hasKey = false;
    game.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.body.collideWorldBounds = true;

    this.energyText = game.add.bitmapText(100, 430, "testfont", "Energie: " + this.player.energy, 30);
    this.energyText.anchor.set(0.5);

    this.seedCountText = game.add.bitmapText(700, 430, "testfont", this.seedCount + "x", 30);
    this.seedCountText.anchor.set(0.5);

    var cherry = game.add.sprite(740, 435, "cherry");
    cherry.anchor.set(0.5);
    cherry.scale.x = 2;
    cherry.scale.y = 2;

    this.pacman = game.add.sprite(700, 120, "pacman", "pacman1.png");
    this.pacman.anchor.setTo(.5,.5);
    this.pacman.stunTime = 0;
    this.pacman.animations.add("mumble", ["pacman1.png", "pacman2.png"], 5, true, false);
    this.pacman.animations.play("mumble");

    game.physics.enable(this.pacman, Phaser.Physics.ARCADE);
    this.pacman.next = {};
    this.pacman.next.x = 700;
    this.pacman.next.y = 120;
    this.pacman.body.width = 15;
    this.pacman.body.height = 15;

    this.map.setCollision([2, 3, 4, 5, 7 ,8 , 9, 10, 11], true, this.bricks);

    this.setupPacmanRoutes();
}

JackDanger.Zhedar_PacJack.prototype.checkPath = function() {
    var pacman = this.pacman;
    var player = this.player;

    var pacmanX = this.roundingFunct(this.pacman.body.x/20),
        pacmanY = this.roundingFunct(this.pacman.body.y/20),
        playerX = Math.floor(this.player.x/20),
        playerY = Math.floor(this.player.y/20);

    this.easystar.findPath(pacmanX, pacmanY, playerX, playerY, function( path ) {
        if (path === null || typeof path[1] == 'undefined' ) {
            pacman.next.x = null;
            pacman.next.y = null;
            pacman.body.velocity.x = 0;
            pacman.body.velocity.y = 0;   
            //workaround für rundungsfehler
            //game.physics.arcade.moveToObject(pacman, player, 150);

            return;
        }

        if (path) {
            pacman.next.x = path[1].x*20;
            pacman.next.y = path[1].y*20;            
        }
    });
    
    this.easystar.calculate();
    this.changePacmanMovement();
}

JackDanger.Zhedar_PacJack.prototype.setBodyProperties = function(sprite, factorX, factorY, speed, angle, scale) {
    if(sprite == null || sprite.body == null)
        return;

    sprite.body.velocity.x = factorX * speed;
    sprite.body.velocity.y = factorY * speed;
    if (typeof angle !== 'undefined') 
        sprite.angle = angle;
    if (typeof scale !== 'undefined')
        sprite.scale.y = scale;
}

JackDanger.Zhedar_PacJack.prototype.changePacmanMovement = function() {
    var pacman = this.pacman;
    var pacmanX = this.pacman.body.x;
        pacmanY = this.pacman.body.y;


    if(pacman.stunTime > 0) {
        pacman.stunTime--;
        pacman.body.velocity.x = 0;
        pacman.body.velocity.y = 0; 
        pacman.angle += 10;
        return;
    }

    //console.log(pacman.next.x +" " + pacman.next.y + ", " + pacmanX + " " + pacmanY);
    //console.log("x" + Math.abs(pacmanX-pacman.next.x));
    //console.log("y" + Math.abs(pacmanY-pacman.next.y));

    //if(pacmanX == pacman.next.x && pacmanY == pacman.next.y || (pacman.body.velocity.x == 0 && pacman.body.velocity.y == 0)) {
    //if((Math.abs(pacmanX-pacman.next.x) < 2 && Math.abs(pacmanY-pacman.next.y) < 2) || (pacman.body.velocity.x == 0 && pacman.body.velocity.y == 0)) {
    var prop = this.setBodyProperties;
    var speed = 150;
    //game.physics.arcade.moveToXY(pacman, pacman.next.x, pacman.next.y, speed);
    //var tile = this.map.getTileWorldXY(pacman.next.x, pacman.next.y);
    //game.physics.arcade.moveToObject(pacman, tile.x, tile.y , 150);
    //console.log(pacman.next.x + " " + pacman.next.y + "; " + pacmanX + " " + pacmanY);

    if (pacman.next.x < pacmanX && pacman.next.y < pacmanY)       // left up
        prop(pacman, (-1/2), (-1/2), speed, 225, -1);
    else if (pacman.next.x == pacmanX && pacman.next.y < pacmanY) // up
        prop(pacman, 0, -1, speed, 270); 
    else if (pacman.next.x > pacmanX && pacman.next.y < pacmanY)  // right up
        prop(pacman, 1/2, -1/2, speed, 315, 1);
    else if (pacman.next.x < pacmanX && pacman.next.y == pacmanY) // left
        prop(pacman, -1, 0, speed, 180, -1);           
    else if (pacman.next.x > pacmanX && pacman.next.y == pacmanY) // right
        prop(pacman, 1, 0, speed, 0, 1);        
    else if (pacman.next.x > pacmanX && pacman.next.y > pacmanY)  // right down
        prop(pacman, 1/2, 1/2, speed, 45, 1);
    else if (pacman.next.x == pacmanX && pacman.next.y > pacmanY) // down
        prop(pacman, 0, 1, speed, 90);
    else if (pacman.next.x < pacmanX && pacman.next.y > pacmanY)  // left down
        prop(pacman, (-1/2), (1/2), speed, 135, -1);
}

JackDanger.Zhedar_PacJack.prototype.doCollision = function() {
    game.physics.arcade.collide(this.player, this.bricks, null, null, this);
    game.physics.arcade.collide(this.player, this.pacman, this.collisionHandler2, null, this);
    //game.physics.arcade.collide(this.pacman, this.bricks, this.pacManHitsABrick, null, this);

    game.physics.arcade.collide(this.player, this.keys, this.playerCollectsKey, null, this);
    game.physics.arcade.overlap(this.player, this.cherries, this.playerCollectsCherry, null, this);

    game.physics.arcade.collide(this.seeds, this.pacman, this.pacmanGetsHit, null, this);
    game.physics.arcade.collide(this.seeds, this.bricks, this.seedHitsBrick, null, this);
}

JackDanger.Zhedar_PacJack.prototype.pacManHitsABrick = function(obj1, obj2) {
    /*if(this.roundingFunct === Math.floor)
        this.roundingFunct = Math.ceil;
    else
        this.roundingFunct = Math.floor;*/
}

JackDanger.Zhedar_PacJack.prototype.pacmanGetsHit = function(pacman, seed) {
    pacman.stunTime=50;
    seed.kill();
}

JackDanger.Zhedar_PacJack.prototype.seedHitsBrick = function(seed, brick) {
    seed.kill();

    var hitType = this.walkables[brick.y][brick.x];
    var convertType;
    switch(hitType) {
        case 2:
        case 5:
            convertType = 7;
            break;
        case 7:
            convertType = 8;
            break;
        case 8:
            convertType = 9;
            break;
        case 9:
            convertType = 6;
            break;
        default:
            return;
    }

    this.walkables[brick.y][brick.x] = convertType;
    this.easystar.setGrid(this.walkables);
    this.map.removeTile(brick.x, brick.y, this.bricks);
    this.map.putTile(convertType, brick.x, brick.y, this.bricks);

}

JackDanger.Zhedar_PacJack.prototype.createFromObjectLayer = function(gid, key) {
    var group = game.add.group();
    group.enableBody = true;
    this.map.createFromObjects('Objects', gid, key, 0, true, false, group);
    game.physics.enable(group);
    return group;
}

JackDanger.Zhedar_PacJack.prototype.collisionHandler2 = function(obj1, obj2) {
    //TODO implement special collision effects
    onLose();
}

JackDanger.Zhedar_PacJack.prototype.playerCollectsCherry = function(player, object) {
    this.seedCount += 2;
    this.seedCountText.setText(this.seedCount + "x");
    object.kill();
    game.add.audio('powerup_sfx').play();
}

JackDanger.Zhedar_PacJack.prototype.playerCollectsKey = function(player, object) {
    object.kill();
    this.player.hasKey = true;
    var key = game.add.sprite(770, 435, "key");
    key.anchor.set(0.5);
    key.scale.x = 1.5;
    key.scale.y = 1.5;


    //onVictory();
    
}

JackDanger.Zhedar_PacJack.prototype.updateEnergy = function() {
    if(this.player.energy < this.player.maxEnergy)
        this.player.energy ++;

    this.energyText.setText("Energie: " + this.player.energy);
}

JackDanger.Zhedar_PacJack.prototype.movePacman = function () {
    this.pacman.rotation = game.physics.arcade.angleBetween(this.pacman, this.player);
    game.physics.arcade.moveToObject(this.pacman, this.player, 120);
}

JackDanger.Zhedar_PacJack.prototype.setupPacmanRoutes = function() {
    var data = this.bricks.layer.data;
    var walkableWorld = new Array(data.length)
    for(i=0; i < data.length; i++) {
        walkableWorld[i] = new Array(data[i].length);
        for(j=0; j < data[i].length; j++)
            walkableWorld[i][j] = data[i][j].index;
    }

    this.walkables = walkableWorld;

    this.easystar.setGrid(walkableWorld);
    this.easystar.setAcceptableTiles([-1, 6]);
    this.easystar.enableDiagonals();
    this.easystar.disableCornerCutting();

    this.roundingFunct = Math.round;
    var checkPathTimer = game.time.create(false);
    checkPathTimer.loop(40, this.checkPath, this);
    checkPathTimer.start();
}

JackDanger.Zhedar_PacJack.prototype.fireSeed = function(bulletSpeed) {
    if(this.seedCount == 0)
        return;
    
    this.seedCount--;
    this.seedCountText.setText(this.seedCount + "x");

    var seed = this.seeds.getFirstDead();

    seed.reset(this.player.x, this.player.y);
    seed.body.velocity.x = 0;
    seed.body.velocity.y = 0;

    switch(this.player.angle) {
        case 90:
            seed.body.velocity.x = -1 * bulletSpeed;
            break;
        case -90:
            seed.body.velocity.x = bulletSpeed;
            break;
        case -180:
            seed.body.velocity.y = -1*bulletSpeed;
            break;
        case 0:
            seed.body.velocity.y = bulletSpeed;
            break;
    }
}

JackDanger.Zhedar_PacJack.prototype.playerControls = function() {
    var speed = 200;
    var walks = true;

    if(Pad.justDown(Pad.SHOOT))
        this.fireSeed(speed*2.5);

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
        walks = false;
        this.player.animations.stop(null, true);
        this.player.frameName = "jack0.png";
    }

    if(walks)
        this.player.animations.play("walk");
  

}