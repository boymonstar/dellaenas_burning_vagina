(function ($){

  $.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
      return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
  });

  $(function(){
    function vaginize() {
      $(':contains("burning man")').replaceText(/Burning Man/i, "Dellaena's Vagina");
    }
    vaginize();
    setTimeout(vaginize, 2000);
    setInterval(vaginize, 5000);
  });
})(jQuery);
