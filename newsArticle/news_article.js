var xhr = new XMLHttpRequest();
var url = './news_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    var articles = xhr.response.articles;
    console.log(articles);

    var articlesDiv = document.getElementById('articles');

    articles.forEach(function (article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var meta = document.createElement('p');
        meta.textContent = article.date + ' | ' + article.source;

        var description = document.createElement('p');
        description.textContent = article.description;

        var highlightsHeader = document.createElement('h3');
        highlightsHeader.textContent = 'Key Highlights:';

        var highlightsList = document.createElement('ul');
        article.highlights.forEach(function (highlight) {
            var listItem = document.createElement('li');
            listItem.textContent = highlight;
            highlightsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(meta);
        articleDiv.appendChild(description);
        articleDiv.appendChild(highlightsHeader);
        articleDiv.appendChild(highlightsList);

        articlesDiv.appendChild(articleDiv);
    });
};

xhr.send();
