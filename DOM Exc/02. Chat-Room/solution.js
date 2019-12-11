function solve() {
   let chatMessages = document.getElementById('chat_messages');
   let msg = document.getElementById('chat_input');

   document.getElementById('send').addEventListener('click',(e) => {
      if(msg.value === ''){
         return;
      }

      let msgElement = document.createElement('div');
      msgElement.setAttribute('class', 'message my-message');
      msgElement.textContent = msg.value;

      chatMessages.appendChild(msgElement);
      msg.value = '';

   })
}


