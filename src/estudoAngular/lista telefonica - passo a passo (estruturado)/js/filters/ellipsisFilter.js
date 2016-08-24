angular.module("listaTelefonica").filter("ellipsis", function(){
  return function(input, size){
    size = size ? size : 10;

    if(input.length <= size) return input;

    return input.substring(0,size) + "...";
  }
});
