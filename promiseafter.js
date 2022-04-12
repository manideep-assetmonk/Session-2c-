'use strict';
/**
 * /* global function first and  second */
 
var firstPromise=first();
var secondPromise=firstPromise.then(function(val){
    return second(val);


});
secondPromise.then(console.log);
