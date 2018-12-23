let correctAnswers = 0;
let incorrectAnswers = 0;

$("#answer_1_true").click(function() {
  $("#answer_1_false").hide();
  correctAnswers++;
});
$("#answer_1_false").click(function() {
  $("#answer_1_true").hide();
  incorrectAnswers++;
});
$("#answer_2_false").click(function() {
  $("#answer_2_true").hide();
  correctAnswers++;
});
$("#answer_2_true").click(function() {
  $("#answer_2_false").hide();
  incorrectAnswers++;
});
$("#answer_3_false").click(function() {
  $("#answer_3_true").hide();
  incorrectAnswers++;
});
$("#answer_3_true").click(function() {
  $("#answer_3_false").hide();
  correctAnswers++;
});
$("#answer_4_false").click(function() {
  $("#answer_4_true").hide();
  incorrectAnswers++;
});
$("#answer_4_true").click(function() {
  $("#answer_4_false").hide();
  correctAnswers++;
});
$("#answer_5_false").click(function() {
  $("#answer_5_true").hide();
  correctAnswers++;
});
$("#answer_5_true").click(function() {
  $("#answer_5_false").hide();
  incorrectAnswers++;
});
$("#answer_6_false").click(function() {
  $("#answer_6_true").hide();
  incorrectAnswers++;
});
$("#answer_6_true").click(function() {
  $("#answer_6_false").hide();
  correctAnswers++;
});

function showQuestions() {
  var questions = document.getElementById("questionsList");
  if (questions.style.display === "none") {
    questions.style.display = "block";
  } else {
    questions.style.display = "none";
  }

  var start = document.getElementById("start");
  start.style.display = "none";

  var submit = document.getElementById("submit");
  submit.style.visibility = true;

  startTimer = setTimeout(function() {
    initialTimer();
  }, 0);

  timer = setTimeout(function() {
    timesUp();
  }, 45000);

  function initialTimer() {
    document.querySelector("#time-left").innerHTML =
      "<h2>You have 45 seconds! Go!</h2>";
  }
  function timesUp() {
    document.querySelector("#time-left").innerHTML =
      "<h2>You ran out of time!</h2><p>Refresh the page to try again!</p>";
  }
}

function submitAction() {
  window.clearTimeout(timer);
  document.querySelector("#time-left").innerHTML =
    "You guessed " +
    correctAnswers +
    "/" +
    "6 questions correctly! Refresh the page to try again!";
}
