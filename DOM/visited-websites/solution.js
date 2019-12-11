function solve() {
  let siteElements = document.getElementsByClassName('link-1');

  for(let element of siteElements){
    element.addEventListener('click', (e) => {
      let currentTarget = e.currentTarget;
      let paragraphElement = currentTarget.getElementsByTagName('p')[0];
      // let text = paragraphElement.textContent;

      // let parts = text.split(' ');
      // let clicks = Number(parts[1]);
      // clicks++;
      // parts[1] = clicks;
      // paragraphElement.textContent = parts.join(" ");

      paragraphElement.textContent =  paragraphElement.textContent.split(' ')
      .map(e => Number(e) ? Number(e) + 1 : e)
      .join(' ');

    })
  }
 
}