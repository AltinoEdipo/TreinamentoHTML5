angular.module("listaTelefonica").filter("nameFilter", function() {
  return function(input) {
    var nameArray = input.split(" ");
    var nomesFormatados = nameArray.map(function(nome) {
      if (nome.length <= 3) {
        if(/(da|de|do|das|dos)/.test(nome)) return nome.toLowerCase();
      }

      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    });

    return nomesFormatados.join(" ");
  };
});
