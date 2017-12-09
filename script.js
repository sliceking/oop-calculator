$(document).ready(function() {
  var calc = new BodyCreator();
  calc.init();
});

/*************************
 * Calculator body object
 * @constructor
 * 
 * */
  function BodyCreator() {

    var self = this;
    this.buttonMap = [
        ['1','2','3','*'],
        ['4','5','6','/'],
        ['7','8','9','-'],
        ['0','C','=','+']
    ]
    this.body = $(".calculatorBody");
    this.face;
    this.buttonRows;

    //init function for calculator DOM creation
    this.init = function() {
      this.addFace();
      this.registerFace();
      //creates the number of rows depending on the button map length
      this.addButtonRows(self.buttonMap.length); 
      this.registerButtonRows();
      this.addButtons(self.buttonMap);
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
      var numIndex = 0;
      while(numIndex < numRows) {
        $("<div></div>", {
          class: "buttonRow row" + (numIndex + 1)
        }).appendTo(self.body);
        numIndex++;
      }
    };

    this.registerButtonRows = function() {
      self.buttonRows = $(".buttonRow");
    };

    this.addButtons = function(buttonMap) {
      
      /* 2 while loops used instead of 2 for loops, 
      but it still feels klunky
      maybe I'll make this a recursive function */
      var mapIndex = buttonMap.length;
      while(mapIndex > 0){
        var currentRow = $('.row' + mapIndex);
        var buttonIndex = 0;
        while(buttonIndex < 4){
          $('<div></div>',{
            'class':'button',
            text:buttonMap[mapIndex - 1][buttonIndex]
          }).appendTo(currentRow);
          buttonIndex++;
        }
        mapIndex--;
      }
    };
  }
