function solve() {
  let text = document.getElementById('input').innerHTML
    .split(".")
    .filter(s => s.length > 0);

  let paragraph = document.createElement('p');
  for (let i = 0; i < text.length; i++) {

    if (i % 3 === 0 && i !== 0) {
      document.getElementById('output').appendChild(paragraph);
      paragraph = document.createElement('p');
    }

    paragraph.textContent += (text[i] + '.');
  }
  document.getElementById('output').appendChild(paragraph);
}