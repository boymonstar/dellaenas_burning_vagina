(function ($){
  $(function(){
    function vaginize() {
      $(':contains("Burning Man")').replaceText(/Burning Man/i, "Dellaena's Vagina");
    }
    vaginize();
    setTimeout(vaginize, 2000);
    setInterval(vaginize, 5000);
  });
})(jQuery);
