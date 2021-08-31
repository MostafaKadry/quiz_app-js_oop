import Quiz from "./quiz.js";
class Settings {
  constructor() {
    this.quizDOM = document.querySelector(".quiz");
    this.settingDOM = document.querySelector(".settings");
    this.categoryDOM = document.querySelector("#category");
    this.nQuestionsDom = document.querySelector("#nquestions");
    this.startBtn = document.querySelector("#start");
    this.difficultyDom = [
      document.querySelector("#easy"),
      document.querySelector("#medium"),
      document.querySelector("#hard"),
    ];
    this.startBtn.addEventListener("click", this.startQuizApp);
    this.wrongAlert = document.querySelector(".wrong-alert");
    this.closeAlert = document.querySelector(".close-wraning");
    this.closeAlert.addEventListener("click", this.closingAlerts);
  }
  // settings to start Quiz
  startQuizApp = async () => {
    try {
      let amount = this.nQuestionsDom.value;
      const categoryID = this.categoryDOM.value;
      let difficulty = this.getDefficulty();
      let QUrl = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}`;
      let results = await fetch(QUrl)
        .then((response) => response.json())
        .then((data) => data.results)
        .catch((err) =>
          console.log(
            "the user didnot fill all inputs, so that error will appear only in the console and willnot cause any pug in the app",
            err
          )
        );

      if (results && results.length > 0) {
        this.quizDOM.style.display = "block";
        this.settingDOM.style.display = "none";
      } else if (this.wrongAlert.style.display === "block") {
        this.wrongAlert.style.border = "2px solid red";
        setTimeout(() => {
          this.wrongAlert.style.border = "none";
        }, 1000);
      } else {
        this.wrongAlert.style.display = "block";
      }
      this.quiz = new Quiz(this.quizDOM, amount, results);
    } catch (err) {
      console.log(err);
    }
  };

  getDefficulty = () => {
    const defculty = this.difficultyDom.filter((el) => el.checked);

    if (defculty.length === 1) {
      return defculty[0].id;
    } else {
      console.log("you should choose the defeculty");
    }
  };
  closingAlerts = () => {
    this.wrongAlert.style.display = "none";
  };
}

export default Settings;
