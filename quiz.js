function checkAnswers(){

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var correct = 0;

    if(question1 == "20 Degrees"){
      correct++;
    }

    if(question2 == "60 Degrees"){
      correct++;
    }

    if(question3 == "-12 Degrees"){
      correct++;
    }

    if(question4 == "-40 Degrees"){
      correct++;
    }

    if(question5 == "+/-30 Degrees"){
      correct++;
    }

    if(question6 == "+/-55 Degrees"){
      correct++;
    }

    if(question7 == "Transition"){
      correct++;
    }

    if(question8 == "It joins the scenes without decreasing immersion"){
      correct++;
    }

    if(question9 == "Use a motion cue"){
      correct++;
    }

    if(question10 == "Motion Cue"){
      correct++;
    }

    var messages = ["Excellent", "Good job", "You did ok", "You can do better"];

    var range;

      if (correct < 3){
        range = 3;
      }

      if (correct > 3 && correct < 7){
        range = 2;
      }

      if (correct > 7 && correct < 9){
        range = 1;
      }

      if (correct > 9){
        range = 0;
      }




  document.getElementById("after_submit").style.visibility="visible";
  document.getElementById("message").innerHTML=messages[range];
  document.getElementById("number_correct").innerHTML="You got " + correct + " correct.";


}
