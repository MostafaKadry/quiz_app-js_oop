import Final from "./final.js";
import Questions from "./question.js";
class Quiz {
  constructor(QuizElement, amount, Questions) {
    this.quizElement = QuizElement;
    this.currentElement = document.querySelector(".current");
    this.totalElements = document.querySelector(".total");
    this.finalElements = document.querySelector(".final");
    this.nextBtn = document.querySelector("#next");
    this.allQuestionsAmount = amount;
    this.answeredQuestionsAmount = 0;
    this.questions = this.setQuestion(Questions);

    this.nextBtn.addEventListener("click", this.nextQuestions);
    this.renderQuestions();
  }
  // using print Questions Method
  renderQuestions = () => {
    this.questions[this.answeredQuestionsAmount].render();
    this.currentElement.innerHTML = this.answeredQuestionsAmount;
    this.totalElements.innerHTML = this.allQuestionsAmount;
  };

  // print the next question
  nextQuestions = () => {
    this.AnswerElements = document.querySelector(
      'input[name="answer"]:checked'
    );
    // use the check if the answer is correct Method
    if (!this.AnswerElements) {
      alert("choose the correct answer! and try again");
    } else {
      this.questions[this.answeredQuestionsAmount].answer(
        this.AnswerElements.value
      );

      this.answeredQuestionsAmount++;
      this.answeredQuestionsAmount < this.allQuestionsAmount
        ? this.renderQuestions()
        : this.endQuizApp();
    }
    return this.AnswerElements;
  };

  // Ending quiz and print the results
  endQuizApp = () => {
    this.quizElement.style.display = "none";
    this.finalElements.style.display = "block";
    const allcorrectAnswers = this.countCorrectAsewr();
    new Final(allcorrectAnswers, this.allQuestionsAmount);
  };
  countCorrectAsewr = () => {
    let count = 0;
    this.questions.forEach((element) => {
      if (element.iscorrect) {
        count++;
      }
    });
    return count;
  };
  setQuestion(questions) {
    return questions.map((question) => new Questions(question));
  }
}
export default Quiz;
