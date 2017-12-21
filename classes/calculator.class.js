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
        self.operationStack[self.operationStack.length-1] == "=" ? self.doMath() : self.updateFace();
    }

    this.doMath = () => {
        self.operationStack.pop();
        self.recurseMath(self.operationStack);
    }

    this.recurseMath = function(operationStack){
        //turn this into a recursive math function
        console.log('operation Stack: ' + operationStack);
        if (!operationStack[1]){ return operationStack }
        var num1;
        var num2;
        var operator;

        for(var i = 0; i < operationStack.length; i++){
            if (operationStack[i] === '+' || operationStack[i] === '-' || operationStack[i] === '*' || operationStack[i] === '/'){
                num1 = operationStack.slice(0, i);
                operator = operationStack[i];
                num2 = operationStack.slice(i + 1);
                break;
            }
        }

        console.log('num1: ' + num1);
        console.log('num2: ' + num2);
        console.log('operator: ' + operator);




        self.updateFace();
    }

    // calculate function
    this.calculate = function(num1, num2, operator){
        var result;
        if (operator === '+'){
                result = num1 + num2;
        } else if(operator === '-'){
            result = num1 - num2;
        }else if(operator === '/'){
            result = num1 / num2;
        }else if(operator === '*'){
            result = num1 * num2;
        }
        return result;
    }

    this.updateFace = function(){
        self.calcRef.face.update(self.operationStack.join(''));
    }

    
}