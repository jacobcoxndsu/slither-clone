var Util = require('./util.js');

class Player {
    constructor(id, x, y) {
        //socket
        this.socket_id = id;

        //cells
        this.color = Util.getRandomColor();

        //position and movement
        this.x = x;
        this.y = y;
        this.moveSpeed = 8;

        //controls
        this.pressingRight = false;
        this.pressingLeft = false;
        this.pressingUp = false;
        this.pressingDown = false;
        this.mouseX = 0;
        this.mouseY = 0;
        this.mouseDown = false;
        this.pressingShift = false;
        this.pressingCtrl = false;

        //Select variables
        this.mouseSelectFirstX = 0;
        this.mouseSelectFirstY = 0;
        this.mouseSelectSecondX = 0;
        this.mouseSelectSecondY = 0;

        //Screen variables
        this.screenWidth = 0;
        this.screenHeight = 0;
        this.canvasXZero = 0;
        this.canvasYZero = 0;
        this.canvasXMax = 0;
        this.canvasYMax = 0;
    }

    updateScreen(w, h) {
        this.screenWidth = w;
        this.screenHeight = h;
    }

}

module.exports = Player;
