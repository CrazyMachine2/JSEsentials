function solve() {
   let player1 = document.getElementById('player1Div');
   let cards = document.getElementsByTagName('img');
   let result = document.getElementById('result').getElementsByTagName('span');
   let history = document.getElementById('history');

   let leftCard;
   let rightCard;

   for (let card of cards) {
      card.addEventListener('click', (c) => {

         let currentTarget = c.currentTarget;

         if(currentTarget.getAttribute('active') === 'false'){
            return;
         }

         currentTarget.setAttribute('active', false);
         currentTarget.setAttribute('src', 'images/whiteCard.jpg');
         let content = currentTarget.getAttribute('name');
         
         
         //in another function
         if (currentTarget.parentNode == player1) {
            result[0].textContent = content;
            leftCard = currentTarget;
         } else {
            result[2].textContent = content;
            rightCard = currentTarget;
         }

         if (result[0].textContent !== '' && result[2].textContent !== '') {
            let resultLeft = Number(result[0].textContent);
            let resultRight = Number(result[2].textContent);

            if (resultLeft > resultRight) {
               leftCard.setAttribute('style', 'border:2px solid green');
               rightCard.setAttribute('style', 'border:2px solid red');
            } else {
               rightCard.setAttribute('style', 'border:2px solid green');
               leftCard.setAttribute('style', 'border:2px solid red');
            }

            history.textContent += `[${result[0].textContent} vs ${result[2].textContent}] `
            result[0].textContent = '';
            result[2].textContent = '';
         }
      })
   }


}