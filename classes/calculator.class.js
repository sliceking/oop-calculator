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
        self.doMath(operationIndex);
    }

    this.doMath = function(operatorIndex){
        var num1 = parseInt(self.operationStack.slice(0,operatorIndex[0]).join(''));
        var num2 = parseInt(self.operationStack.slice(operatorIndex[0]+1,operatorIndex[1]).join(''));
        var operator = operatorIndex[0];
        if (operator === '+'){
            self.add(num1,num2);
        } else if(operator === '-'){
            self.subtract(num1,num2);
        }else if(operator === '/'){
            self.divide(num1,num2);
        }else if(operator === '*'){
            self.multiply(num1,num2);
        }
        console.log('num1: '+ num1 );
        console.log('num2: '+ num2 );
    }

    this.updateFace = function(){
        self.calcRef.face.update(self.operationStack.join(''));
    }

    this.add = function(num1, num2){
        return num1 + num2;
    }

    this.subtract = function(num1, num2){
        return num1 - num2;
    }

    this.divide = function(num1, num2){
        return num1 / num2;
    }

    this.multiply = function(num1, num2){
        return num1 * num2;
    }
    
}