function solve() {
   let buttons = Array.from(document.getElementsByClassName("add-product"));
   let textArea = document.getElementsByTagName("textarea")[0];
   let setProducts = new Set();
   let totalPrice = 0;

   let checkout = document.getElementsByClassName("checkout")[0];

   for (let button of buttons) {
      button.addEventListener('click', e => {
         let currentTarget = e.currentTarget;
         let product = currentTarget.parentNode.parentNode;

         let productTitle = product.getElementsByClassName("product-title")[0].textContent;
         let productPrice = product.lastElementChild.textContent;

         textArea.textContent += `Added ${productTitle} for ${productPrice} to the cart.\n`
         setProducts.add(productTitle);
         totalPrice += Number(productPrice);
      })
   }

   checkout.addEventListener('click', e => {
      //separate function
      [...document.getElementsByTagName('button')]
         .map(b => b.setAttribute('disabled', true));

      let products = [...setProducts].join(', ');
      textArea.textContent += `You bought ${products} for ${totalPrice.toFixed(2)}.`

   })
}