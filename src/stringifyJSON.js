// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  if (obj===null){
    return "null";
  }
  else if (obj === undefined){
    return "undefined";
  }
  else if (typeof(obj)==="string"){
    return '"'+obj+'"';
  }
  else if (Array.isArray(obj)) {
    var yolo=""

    for (var i=0;i<obj.length;i++){
      yolo=yolo.concat(stringifyJSON(obj[i])+',');
    }
    return '['+yolo.slice(0,yolo.length-1)+']'; 
  }
  else if (typeof(obj)==="object"){   
    var solo="";
    for (var key in obj){
      if (obj[key] !== undefined && typeof(obj[key])!=="function"){
        solo=solo.concat(stringifyJSON(key)+':'+stringifyJSON(obj[key])+',');
      }
    }
    return '{'+solo.slice(0,solo.length-1)+'}'; 
  }
  else{
    return obj.toString();
  }

};