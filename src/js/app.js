import "main.scss";
import 'whatwg-fetch';
import 'es6-promise';
import {addSections} from './createHtmlComponent';

const url = 'https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=36379cbe64354a0e99d3a44d18aa101a';
const init = {
  method: 'GET',
  url,
};

function processJson(json) {
  addSections(json);
}

fetch(url, init)
  .then(response => response.json())
  .then(processJson);
