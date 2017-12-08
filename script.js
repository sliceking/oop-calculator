$(document).ready(function(){
    console.log('testing');

    var calc = new Calculator();
    calc.init();


    function Calculator(){
        this.init = function(){ console.log('initing') }
    }


})