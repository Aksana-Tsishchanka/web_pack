import "main.scss";
import 'whatwg-fetch';
import 'es6-promise';
import * as htmlComponent from './createHtmlComponent';

const url = 'https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=36379cbe64354a0e99d3a44d18aa101a';
const init = {
  method: 'GET',
  url,
};

function addSections(json, a) {
  const { section, results: arrSections, copyright } = json;
  document.body.innerHTML = `<header>
                               <h1>The New York Times News</h1>
                               <h3>${section}</h3></header>
                               <div class='flexbox-container'>
                               ${arrSections.reduce((result, el) => result + htmlComponent.createSection(el),
                                                    '')}</div>
                             ${htmlComponent.createFooter(copyright)}`;
}

function processJson(json) {
  addSections(json);
}


fetch(url, init)
  .then(response => response.json())
  .then(processJson);
