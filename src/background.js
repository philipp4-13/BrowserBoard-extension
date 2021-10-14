function addFonts()
{
	var fa = document.createElement('style');
    fa.type = 'text/css';
    fa.textContent = '@font-face { font-family: Symbola; src: local("Symbola Regular"), local("Symbola"), url("'
        + chrome.runtime.getURL('font/Symbola.woff2')
        + '") format("woff2"), url("'
        + chrome.runtime.getURL('font/Symbola.woff')
        + '") format("woff"), url("'
        + chrome.runtime.getURL('font/Symbola.ttf')
        + '") format("truetype"), url("'
        + chrome.runtime.getURL('font/Symbola.otf')
        + '")'
        
        + '; }';
	document.head.appendChild(fa);
}


chrome.webNavigation.onCompleted.addListener((tab) => {
if(tab.frameId != 0)
	return;
	chrome.scripting.executeScript({
		target: {tabId: tab.tabId},
		func: addFonts
	});
	chrome.scripting.insertCSS({
		target: {tabId: tab.tabId},
		files: ['mathquill.css']
	});
  chrome.scripting.executeScript({
    target: {tabId: tab.tabId},
    files: ['paper-core.min.js','jquery.min.js','mathquill.min.js','board.js']
    });
  });
