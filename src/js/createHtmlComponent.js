import * as calculateDateFrom from './calculateDateFrom';
const imageType = 'mediumThreeByTwo210';

function createImage(src, height, width, caption) {
    return `<img src=${src} height=${height} width=${width} title='${caption}' />`;
}

function getMedia(multimediaArr, flag) {
    return multimediaArr.filter(mediaObj => mediaObj.format === flag)[0];
}

function createFooter(footerText) {
    return `<footer>${footerText.replace('Copyright (c)', '©')}</footer>`;
}


function createSection(objSection) {
    const { short_url: shortUrl, title, abstract, multimedia, byline,
        published_date: publishedDate } = objSection;

    let image = '';
    if (multimedia.length > 0) {
        const { url: src, height, width, type, caption } = getMedia(multimedia, imageType);
        if (type === 'image') {
            image = createImage(src, height, width, caption);
        }
    }

    const sectionEl = `<div class="intro-section">
                       <a href="${shortUrl}" >
                       <div>
                         ${image}
                         <div class='text-container'>
                            <h2>${title}</h2>
                            <p>${abstract}</p>
                            <span class='time'>${calculateDateFrom.timeFrom(new Date(publishedDate))}</span>
                            <span class='author'> ${byline}</span>
                         </div>
                       </div>
                       </a>
                     </div>`;
    return sectionEl;
}

export function addSections(json) {
  const { section, results: arrSections, copyright } = json;
  document.body.innerHTML = `<header>
                               <h1>The New York Times News</h1>
                               <h3>${section}</h3></header>
                               <div class='flexbox-container'>
                               ${arrSections.reduce((result, el) => result + createSection(el),
                                                    '')}</div>
                             ${createFooter(copyright)}`;
}

