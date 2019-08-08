var Exposer = (function(){
    var private = 10;

    var privateMethod = function(){
        console.log("Inside private method");
        private++;
    }

    var methodToExpose = function(){
        console.log("This is a method I want to expose");
    }

    var otherMethodToExpose = function(){
        privateMethod();
    }

    return{
        first: methodToExpose,
        second: otherMethodToExpose
    };

})();

Exposer.first();
Exposer.second();
Exposer.methodToExpose;