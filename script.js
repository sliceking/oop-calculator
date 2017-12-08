$(document).ready(function() {
  var calc = new BodyCreator();
  calc.init();
});

/*************************
 *Calculator body creator
 * @constructor
 */
function BodyCreator() {
  var self = this;
  this.buttonMap = [
      ['+','-','*','/'],
      ['1','2','3','4'],
      ['5','6','7','8'],
      ['9','0','C','=']
  ]
  this.body = $(".calculatorBody");
  this.face;
  this.buttonRows;

  this.init = function() {
    this.addFace();
    this.registerFace();
    this.addButtonRows(self.buttonMap.length);
    this.registerButtonRows();
  };

  this.addFace = function() {
    $("<div>", {
      class: "face"
    }).appendTo(self.body);
  };

  this.registerFace = function() {
    self.face = $(".face");
  };

  this.addButtonRows = function(numRows) {
    while (numRows > 0) {
      $("<div></div>", {
        class: "buttonRow"
      }).appendTo(self.body);
      numRows--;
    }
  };

  this.registerButtonRows = function() {
    self.buttonRows = $(".buttonRow");
  };

  this.addCalculatorButtons = function() {

  };
}
