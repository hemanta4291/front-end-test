$(document).ready(function(){
    $('select').formSelect();

    // date picker
    $('.datepicker').datepicker({
      autoClose:false,
      showClearBtn:true,
    });


    // toggle

    $(".sidebar-toggle").on( "click", function() {
      $(".sidebar").toggleClass("sider-short");
      $(".main").toggleClass("main-short");
      $(".simplebar-content li").toggleClass("siderli");
      $(".sidebar-list span").toggleClass("dispaly-none");
    });
  });