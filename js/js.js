$(document).ready(function(){
  $(".js-nav-toggle").click(function(){
    $(this).toggleClass("closed");
    $(".header").toggleClass("closed");
  });
});