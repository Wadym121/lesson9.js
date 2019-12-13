const timeElement = document.querySelector('.page-loaded');
timeElement.innerText = new Date().toLocaleTimeString();

const btnGetHtmlAjax = document.querySelector('.get-html-ajax');
btnGetHtmlAjax.addEventListener('click', getHtmlAjax);
function getHtmlAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-container')
              .innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}
const btnFetchHtml = document.querySelector('.fetch-html');
btnFetchHtml.addEventListener('click', fetchHtml);
function fetchHtml() {
    fetch('client-data.html')
    .then(response => response.text() )
    .then (html => document.querySelector('.html-container')
         .innerHTML = html);
}

const btnGetJsonAjax = document.querySelector('.get-json-ajax');
btnGetJsonAjax.addEventListener('click', getJsonAjax);
function getJsonAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText)
            document.querySelector('.client-name').innerText = data.name;
            document.querySelector('.balance').innerText = data.balance; 
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}
const btnFetchJson = document.querySelector('.fetch-json');
btnFetchJson.addEventListener('click', fetchJson);
function fetchJson() {
    fetch('client-data.json')
    .then(response => response.json() )
    .then (data => {
        document.querySelector('.client-name').innerText = data.name;
            document.querySelector('.balance').innerText = data.balance; 
    } );
}