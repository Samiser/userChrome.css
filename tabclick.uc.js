// ==UserScript==
// @name                 Tab Click
// @version              1.0
// @description          Double click the active tab to focus the urlbar
// @author               https://reddit.com/user/otto251
// @license              https://creativecommons.org/share-your-work/public-domain/cc0/
// @compatibility        Created 2019-07-04. Tested on Firefox 69.0b1
// ==/UserScript==

var should_open = false;
var openUrlBar = function(e) {
    if (should_open) {
        if (!e.button) {
            var urlbar = document.getElementById('urlbar');
            urlbar.focus();
            urlbar.select();
        }
    } else {
        should_open = true;
    }
};

function tabClick() {
	var classname = document.getElementsByClassName("tabbrowser-tab");

	for (var i = 0; i < classname.length; i++) {
		classname[i].removeEventListener('dblclick', openUrlBar);
	}
	document.querySelector(".tabbrowser-tab[selected=\"true\"]").addEventListener('dblclick', openUrlBar);
}

gBrowser.tabContainer.addEventListener("TabSelect", tabClick);



// add openUrlBar function to the initial tab
document.querySelector(".tabbrowser-tab[selected=\"true\"]").addEventListener('dblclick', openUrlBar);
gBrowser.selectedBrowser.focus();
