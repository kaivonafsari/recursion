// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var result = []
  var getElement = function(nodes){
  	if (nodes !== undefined) {
  		var ClassList = nodes.classList
  		if (nodes.length) {
  			for (var i =0; i < nodes.length; i++) {
  				if (nodes[i].classList !== undefined) {
  					getElement(nodes[i])
  				}
  			}
  		}

  		if (ClassList) {
  			if (ClassList.contains(className)){
  				result.push(nodes)
  			}
  			getElement(nodes.childNodes)
  		}
  	}
  };

  getElement(document.body)
  return result
  	
};
