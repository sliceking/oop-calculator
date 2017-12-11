/************
 * Calculator face object
 * @constructor
 * @param {jQuery element reference} calcFace - DOM reference to the calculator face
 * @param {object} calcRef - reference to the calculator object
 *
 */

function Face(calcRef) {
  const self = this;
  this.calcRef = calcRef;
  this.newText = '';
  this.operationsStack = [];
  this.body = $('<div></div>',{
      class:'face'
  })
  this.calculator = new Calculator(self);

  this.update = function(keyPress){
    self.operationsStack.push(keyPress)
    $(self.body).text(self.operationsStack.join(''))
  }

  return {body: this.body, faceRef: self};
}
