$(document).ready(function () {
  // Red Button
  $("#redBtn").click(function () {
    $("body").css("background-color", "red");
  });

  // Blue Button
  $("#blueBtn").click(function () {
    $("body").css("background-color", "blue");
  });

  // Green Button
  $("#greenBtn").click(function () {
    $("body").css("background-color", "green");
  });

  // Yellow Button
  $("#yellowBtn").click(function () {
    $("body").css("background-color", "yellow");
  });

  // Reset Background Button
  $("#resetBtn").click(function () {
    $("body").css("background-color", "white");
  });

  // Say Hello Button
  $("#helloBtn").click(function () {
    $("#message").text("Hello! How are you?");
  });
});
