/************
 * Calculator face object
 * @constructor
 * @param {jQuery element reference} calcFace - DOM reference to the calculator face
 * @param {object} calcRef - reference to the calculator object
 *
 */

function Face(calcRef) {
  var self = this;
  this.calcRef = calcRef;
  this.body = $('<div></div>',{
      class:'face'
  })


  //UPDATE THIS SO THE FACE CAN UPDATE ITSELF INSTEAD OF THE CALC BODY
  return this.body;
}
