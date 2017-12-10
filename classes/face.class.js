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
  this.body = $('<div></div>',{
      class:'face'
  })

  this.update = function(keyPress){
    $(self.body).text(keyPress)
  }

  return {body: this.body, faceRef: self};
}
