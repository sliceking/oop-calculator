/***************************
 * Calculation executor
 * @constructor
 * @param {jQuery object} calcRef - reference to the calculator face object
 * 
 */
function Calculator(calcRef) {
    const self = this;
    this.calcRef = calcRef;
    this.operatorMap = ['+', '-', '/', '*'];
    this.operationStack = [];

    this.update = function (newPress) {
        self.updateStack(newPress);
    }

    this.updateStack = function (newPress) {
        self.operationStack.push(newPress);
        self.checkIfEquals();
    }

    this.checkIfEquals = function () {
        self.operationStack[self.operationStack.length - 1] == "=" ? self.doMath() : self.updateFace();
    }

    this.doMath = () => {
        self.operationStack.pop(); //remove equals sign
        self.recurseMath(self.operationStack);
        self.updateFace();
    }

    this.recurseMath = function math(operationStack) {
        //turn this into a recursive math function
        console.log('operation Stack: ' + operationStack);
        var num1;
        var num2;
        var operator;
        var first_operator_position;
        var second_operator_position;
        var result;

        //find the operator then get the ints infront and behind it
        for (let i = 0; i < operationStack.length; i++) {
            if (operationStack[i] === '+' || operationStack[i] === '-' || operationStack[i] === '*' || operationStack[i] === '/') {
                num1 = parseInt(operationStack.slice(0, i).join(''));
                operator = operationStack[i];
                first_operator_position = i;
                num2 = parseInt(operationStack.slice(i + 1).join(''));
                break;
            }
        }

        //find the 2nd operator position
        for (let i = first_operator_position + 1; i < operationStack.length; i++) {
            if (operationStack[i] === '+' || operationStack[i] === '-' || operationStack[i] === '*' || operationStack[i] === '/') {
                second_operator_position = i;
                break;
            }
        }

        console.log('num1: ' + num1);
        console.log('num2: ' + num2);
        console.log('operator: ' + operator);
        console.log('second operator pos: ' + second_operator_position);
        console.log('rest of array: ' + operationStack.slice(second_operator_position));

        result = self.calculate(num1, num2, operator);

        if (!second_operator_position){
            self.operationStack = [result];
            return;
        }

        //set new array after first calculation
        operationStack = operationStack.slice(second_operator_position);
        operationStack.unshift(result);
        console.log('new operationstack: ' + operationStack)

        //call math again to recurse
        math(operationStack);







    }

    // calculate function
    this.calculate = function (num1, num2, operator) {
        var result;
        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '/') {
            result = num1 / num2;
        } else if (operator === '*') {
            result = num1 * num2;
        }
        return result;
    }

    this.updateFace = function () {
        self.calcRef.face.update(self.operationStack.join(''));
    }


}