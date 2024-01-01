(function ($) {
  $(document).ready(function(){
          $(".accordion").click(function(){
              $(this).toggleClass("open");
              $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
              $(".pannel").not($(this).next()).slideUp();
              $(".accordion").not($(this)).removeClass("open");
              $(".accordion").not($(this)).find("i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
          });
      });
 })(jQuery); 
