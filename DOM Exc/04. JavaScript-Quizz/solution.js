function solve() {
  let sections = [...document.getElementsByTagName('section')];
  let allAnswers = document.querySelectorAll('.answer-text');

  let score = 0;
  let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let result = document.getElementById('results');

  let curSection = sections.shift();
  
  for (let answer of allAnswers) {
    answer.addEventListener('click', (e) => {

      // curSection.setAttribute('class', 'hidden');
      curSection.style.display = "none";
      if(rightAnswers.includes(answer.textContent)){
        score++;
      }

      if (sections.length > 0) {
        curSection = sections.shift();
        curSection.style.display = "block";
      } else {
        result.style.display = 'block';
        printFinalResult(score);
      }
    })
  }

  function printFinalResult(score){
    let resultH1 = result.querySelector('#results h1');
    if(score < 3){
      resultH1.textContent = `You have ${score} right answers.`;
    } else {
      resultH1.textContent = 'You are recognized as top JavaScript fan!';
    }
  }

}
