function timedScroll(a,b) {
  var x = document.getElementById("tema" + a + "_" + b);
  setTimeout(
    function()
      { x.scrollIntoView({behavior: "smooth"}); }, 500
    );
}