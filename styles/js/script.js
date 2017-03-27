$(document).ready(function() {
    var options = {
        height: "150px",
         width: "150px",
        line_width: 11,
        color: "#ffc107",
        starting_position: 0,
        percent: 0,
        text: "percent"
    }
    var progress_circle_mock = $("#progress-circle-mock").gmpc(options);
    progress_circle_mock.gmpc('animate', 5, 15000);

    var progress_circle_ques = $("#progress-circle-ques").gmpc(options);
    progress_circle_ques.gmpc('animate',10, 15000);

    var progress_circle_students = $("#progress-circle-students").gmpc(options);
    progress_circle_students.gmpc('animate',10,15000);

    var progress_circle_hours = $("#progress-circle-hours").gmpc(options);
    progress_circle_hours.gmpc('animate', 10, 15000);

    $('.scrollspy').scrollSpy();
    $(".rotate").textrotator({
      animation: "fade", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      separator: "|", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
      speed: 2000 // How many milliseconds until the next word show.
    });

    $(".button-collapse").sideNav();
    $(".parallax").parallax();
    $(window).scroll(function() { // check if scroll event happened
      if ($("div").scrollTop() > 10) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar-fixed-top").css("background-color", "transparent"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      } else {
        $(".navbar-fixed-top").css("background-color", "pink"); // if not, change it back to transparent
      }
    });
});
