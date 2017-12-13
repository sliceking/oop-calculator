/***************************
 * Calculation executor
 * @constructor
 * @param {jQuery element reference} calcRef - reference to the calculator face object
 * 
 */
function Calculator(calcRef){
    const self = this;
    this.calcRef = calcRef;
    this.operationStack = [];

    //update the operationstack first then tell the face to update the display
    this.update = function(newPress){
        self.updateStack(newPress);
    }


    this.updateStack = function(newPress){
        self.operationStack.push(newPress);
        self.checkIfEquals();
    }

    this.checkIfEquals = function(){
        self.operationStack[self.operationStack.length-1] == "=" ? self.doMath() : self.updateFace();
    }

    this.doMath = function(){
        console.log('im doing math');
    }

    this.updateFace = function(){
        self.calcRef.face.update(self.operationStack.join(''));
    }

    
}