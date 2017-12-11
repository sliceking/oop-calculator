/************
 * Calculator face object
 * @constructor
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

//this needs to be updated, have data passed from 
//the button to the body to the calc to the face
//currently in the wrong order
  this.update = function(keyPress){
    self.operationsStack.push(keyPress)
    $(self.body).text(self.operationsStack.join(''))
  }

  return {body: this.body, faceRef: self};
}
