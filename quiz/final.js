class Final {
  constructor(corectAnswer, totalAmount) {
    this.scoreElemant = document.querySelector("#score");
    this.againBtn = document.querySelector("#try-again");

    this.render(corectAnswer, totalAmount);
    this.againBtn.addEventListener("click", this.startAgain);
  }

  startAgain = () => {
    location.reload();
  };

  render(corectAnswer, totalAmount) {
    this.scoreElemant.innerHTML = `you answered ${corectAnswer} correct answer out of ${totalAmount} Total questions`;
  }
}

export default Final;
