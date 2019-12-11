function solve() {
   let input = document.getElementById("searchField");
   let button = document.getElementById("searchBtn");
   let rows = [...document.querySelectorAll("tbody tr")];

   button.addEventListener("click", e => {
      let inputValue = input.value;

      if (inputValue === '') {
         return;
      }

      for (let row of rows) {
         if (row.textContent.includes(inputValue)) {
            row.className = "select";
         }
      }
      input.value = '';
   })
}