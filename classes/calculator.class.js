/***************************
 * Calculation executor
 * @constructor
 * @param {jQuery object} calcRef - reference to the calculator face object
 * 
 */
function Calculator(calcRef){
    const self = this;
    this.calcRef = calcRef;
    this.operatorMap = ['+','-','/','*'];
    this.operationStack = [];

    this.update = function(newPress){
        self.updateStack(newPress);
    }

    this.updateStack = function(newPress){
        self.operationStack.push(newPress);
        self.checkIfEquals();
    }

    this.checkIfEquals = function(){
        self.operationStack[self.operationStack.length-1] == "=" ? self.removeEquals() : self.updateFace();
    }

    this.removeEquals = () => {
        self.operationStack.pop();
        self.parseInt();
    }

    this.parseInt = function(){
        //if the index is a number parseInt and return, if isNaN return the string
        self.operationStack = self.operationStack.map( x => isNaN( parseInt(x) ) ?  x :  parseInt(x) );
        console.log(self.operationStack); 
        self.findOperators();
    }

    this.findOperators = () => {
        var operationIndex = [];
        for(var i = 0; i < self.operationStack.length; i++){
            if(typeof self.operationStack[i] === 'string'){  
                operationIndex.push(i);
            }
        }
        console.log(operationIndex);
    }

    this.doMath = function(){
        console.log('im doing math');
    }

    this.updateFace = function(){
        self.calcRef.face.update(self.operationStack.join(''));
    }

    
}