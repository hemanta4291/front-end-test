$(document).ready(function(){
    $('select').formSelect();

    // date picker
    $('.datepicker').datepicker();


    // toggle

    $(".sidebar-toggle").on( "click", function() {
      $(".sidebar").toggleClass("sider-short");
      $(".main").toggleClass("main-short");
    });
  });