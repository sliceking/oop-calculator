/***************************
 * Calculation executor
 * @constructor
 * 
 */
function Calculator(faceRef){
    const self = this;
    this.faceRef = faceRef;
    this.operationStack = [];

    //update the operationstack first then tell the face to update the display
    this.update = function(newPress){
        self.operationStack.push(newPress);
    }

    
}