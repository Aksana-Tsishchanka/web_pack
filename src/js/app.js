import "main.scss";
import 'whatwg-fetch';
import 'es6-promise';
import {addSections} from './createHtmlComponent';

const url = 'https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=cce4958264bc4464b48eae3ce7bf2d63';
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