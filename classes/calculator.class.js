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
        self.operationStack.push(newPress);
        self.updateFace(self.operationStack);
    }

    this.updateFace = function(newStack){
        self.calcRef.face.update(newStack.join(''));
    }

    
}