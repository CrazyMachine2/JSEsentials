function solve() {
  let furnitureList;

  document.getElementsByTagName("button")[0].addEventListener("click", e => {
    furnitureList = JSON.parse(document.getElementsByTagName("textarea")[0].value);
    let table = document.getElementsByClassName("table")[0];

    for (let obj of furnitureList) {
      let row = table.insertRow();
      let cell = row.insertCell();

      let img = document.createElement("img");
      img.setAttribute("src",obj.img);

      cell.appendChild(img);

      let name = document.createElement("p");
      name.textContent = obj.name;
      cell = row.insertCell();
      cell.appendChild(name);

      let price = document.createElement("p");
      price.textContent = obj.price;
      cell = row.insertCell();
      cell.appendChild(price);

      let decFactor = document.createElement("p");
      decFactor.textContent = obj.decFactor;
      cell = row.insertCell();
      cell.appendChild(decFactor);

      let checkbox = document.createElement("input");
      checkbox.setAttribute("type","checkbox");
      cell = row.insertCell();
      cell.appendChild(checkbox);

    }
  })

  let bought = [];
  let totalPrice = 0;
  let decFactor = 0;

  document.getElementsByTagName("button")[1].addEventListener("click",e =>{
    let checked = [...document.querySelectorAll("input")]
      .filter(c => c.checked);

      for(let check of checked){
       let product = check.parentNode.parentElement;
       let attributes = product.getElementsByTagName("p");
       
        bought.push(attributes[0].textContent);
        totalPrice += Number(attributes[1].textContent);
        decFactor += Number(attributes[2].textContent);
      }

      decFactor = decFactor / bought.length;

      let textArea = document.getElementsByTagName("textarea")[1];
      textArea.textContent += `Bought furniture: ${bought.join(', ')}\n`;
      textArea.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
      textArea.textContent += `Average decoration factor: ${decFactor}`;
   
  })

}