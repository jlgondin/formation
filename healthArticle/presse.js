var xhr_presse = new XMLHttpRequest();
var url_presse = './presse.json';

xhr_presse.open('GET', url_presse, true);
xhr_presse.responseType = 'json';

xhr_presse.onload = function() {
    var articles = xhr_presse.response.articles;
    var articlesDiv = document.getElementById('articles_presse');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var contenu = document.createElement('div');
        article.contenu.forEach(function(texte_contenu) {
        var listItem = document.createElement('p');
        listItem.textContent = texte_contenu;
        contenu.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(contenu);

        articlesDiv.appendChild(articleDiv);
    });
}

xhr_presse.send();