class Questions {
  constructor(questions) {
    this.questionElement = document.querySelector("#qh2");
    this.AnswerElements = document.querySelector(".all-answers");
    this.question = questions.question;

    // log the Correct answer for testing purposes
    this.correctAnswer = questions.correct_answer;
    console.log("corrcet answer ", this.correctAnswer);

    this.incorrectAnswers = questions.incorrect_answers;
    this.shuffleArray(this.incorrectAnswers);
    this.allAnswers = [this.correctAnswer, ...this.incorrectAnswers];
    this.shuffleArray(this.allAnswers);
    this.iscorrect = true;
  }
  // shuffle answers Method
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  // check the ansewr is it true or false? Method
  answer = (checkedElement) => {
    if (checkedElement === this.correctAnswer) {
      this.iscorrect = true;
    } else {
      this.iscorrect = false;
    }
  };
  // print each question and its answers Method
  render() {
    this.questionElement.innerHTML = this.question;
    this.labels = document.querySelectorAll(".all-answers label");
    if (this.labels) {
      Array.from(this.labels).forEach((el) => el.remove());
    } else {
      console.log("no there are not answersss");
    }
    this.allAnswers.forEach((i) => {
      this.AnswerElements.innerHTML += `<label for="" id="${i.length}" class="container"><input type="radio" name="answer" value="${i}"/> ${i} </label>`;
    });
  }
}

export default Questions;
