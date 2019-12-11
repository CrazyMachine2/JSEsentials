function createArticle() {
	let title = document.getElementById('createTitle').value;
	let content = document.getElementById('createContent').value;
	let articles = document.getElementById('articles');

	if (title !== '' && content !== '') {
		let article = document.createElement('article');
		article.appendChild(createNode('h3', title));
		article.appendChild(createNode('p', content));
		articles.appendChild(article);
	}

	document.getElementById('createTitle').value = '';
	document.getElementById('createContent').value = '';

	function createNode(element, text) {
		let node = document.createElement(element);
		node.textContent = text;
		return node;
	}
}
