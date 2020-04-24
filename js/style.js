$(document).ready(function() {
  $("#toggleList").click(function(e) {
    e.preventDefault();
    $(".form-list").slideToggle(600);
  });
  $(".hamlist").click(function(e) {
    e.preventDefault();
    $(".menu").slideToggle();
  });

  // mousehover事件綁定卡片的title和照片變色處理
  $("#cl").hover(
    function() {
      // over
      $("#cl-text").css("background-color", "antiquewhite");
      $("#cl-text").css({
        transition: "all .5s ease"
      });
      $("#cl-img").css("filter", "sepia(1)");
      $("#cl-img").css({
        filter: "sepia(1)",
        transition: "all .5s ease"
      });
    },
    function() {
      // out
      $("#cl-text").css("background-color", "burlywood");
      $("#cl-text").css({
        transition: "all .5s ease"
      });
      $("#cl-img").css("filter", "sepia(0)");
      $("#cl-img").css({
        filter: "sepia(0)",
        transition: "all .5s ease"
      });
    }
  );
  $("#cm").hover(
    function() {
      // over
      $("#cm-text").css("background-color", "antiquewhite");
      $("#cm-text").css({
        transition: "all .5s ease"
      });
      $("#cm-img").css("filter", "sepia(1)");
      $("#cm-img").css({
        filter: "sepia(1)",
        transition: "all .5s ease"
      });
    },
    function() {
      // out
      $("#cm-text").css("background-color", "burlywood");
      $("#cm-text").css({
        transition: "all .5s ease"
      });
      $("#cm-img").css("filter", "sepia(0)");
      $("#cm-img").css({
        filter: "sepia(0)",
        transition: "all .5s ease"
      });
    }
  );
  $("#cr").hover(
    function() {
      // over
      $("#cr-text").css("background-color", "antiquewhite");
      $("#cr-text").css({
        transition: "all .5s ease"
      });
      $("#cr-img").css("filter", "sepia(1)");
      $("#cr-img").css({
        filter: "sepia(1)",
        transition: "all .5s ease"
      });
    },
    function() {
      // out
      $("#cr-text").css("background-color", "burlywood");
      $("#cr-text").css({
        transition: "all .5s ease"
      });
      $("#cr-img").css("filter", "sepia(0)");
      $("#cr-img").css({
        filter: "sepia(0)",
        transition: "all .5s ease"
      });
    }
  );
});
