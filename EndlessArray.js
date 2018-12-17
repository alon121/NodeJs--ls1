var async = require('async')
const arr  =["one","two","three","four"];
var len = arr.length;
var counter = 0;
var funcArr = []
for (i =0; i< arr.length; i++){
funcArr[i]   = scanArray;
}


function scanArray(callback){
     toran = arr[counter];
     len = toran.length
     console.log(toran)
     counter++;
     callback(null,len)
     
}

async.series(funcArr,(err,result)=>{
  console.log(result);
  
})
