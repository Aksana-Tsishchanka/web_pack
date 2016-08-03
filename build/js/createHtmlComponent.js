var createHtmlComponent =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	function createImage(src, height, width, caption) {
	    return '<img src=' + src + ' height=' + height + ' width=' + width + ' title=\'' + caption + '\' />';
	}

	function getMedia(multimediaArr, flag) {
	    return multimediaArr.filter(function (mediaObj) {
	        return mediaObj.format === flag;
	    })[0];
	}

	function createFooter(footerText) {
	    return '<footer>' + footerText.replace('Copyright (c)', '©') + '</footer>';
	}

	function calculateDateFrom(seconds, difference, timeArr) {
	    return timeArr.reduce(function (result, timeObj) {
	        if (result) return result;

	        var infoText = timeObj.infoText;
	        var numOfSeconds = timeObj.numOfSeconds;

	        var interval = Math.floor(seconds / numOfSeconds);

	        if (interval >= 1) {
	            result = difference <= 0 ? 'in ' + interval + ' ' + infoText : interval + ' ' + infoText + ' ago';
	        }
	        return result;
	    }, '');
	}

	function timeFrom(date) {
	    var difference = new Date() - date;
	    var seconds = Math.floor(Math.abs(difference) / 1000);
	    var timeArr = [{ infoText: 'years', numOfSeconds: 60 * 60 * 24 * 365 }, { infoText: 'months', numOfSeconds: 60 * 60 * 24 * 30 }, { infoText: 'days', numOfSeconds: 60 * 60 * 24 }, { infoText: 'hours', numOfSeconds: 60 * 60 }, { infoText: 'minutes', numOfSeconds: 60 }];

	    return calculateDateFrom(seconds, difference, timeArr) || 'Just now';
	}

	function createSection(objSection) {
	    var shortUrl = objSection.short_url;
	    var title = objSection.title;
	    var abstract = objSection.abstract;
	    var multimedia = objSection.multimedia;
	    var byline = objSection.byline;
	    var publishedDate = objSection.published_date;


	    var image = '';
	    if (multimedia.length > 0) {
	        var _getMedia = getMedia(multimedia, imageType);

	        var src = _getMedia.url;
	        var height = _getMedia.height;
	        var width = _getMedia.width;
	        var type = _getMedia.type;
	        var caption = _getMedia.caption;

	        if (type === 'image') {
	            image = createImage(src, height, width, caption);
	        }
	    }

	    var sectionEl = '<div class="intro-section">\n                       <a href="' + shortUrl + '" >\n                       <div>\n                         ' + image + '\n                         <div class=\'text-container\'>\n                            <h2>' + title + '</h2>\n                            <p>' + abstract + '</p>\n                            <span class=\'time\'>' + timeFrom(new Date(publishedDate)) + '</span>\n                            <span class=\'author\'> ' + byline + '</span>\n                         </div>\n                       </div>\n                       </a>\n                     </div>';
	    return sectionEl;
	}

/***/ }
/******/ ]);
//# sourceMappingURL=createHtmlComponent.js.map