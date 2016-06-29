var divs = ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"];
 var visibleDivId = null;
 function toggleVisibility(divId) {
 if(visibleDivId === divId) {
 //visibleDivId = null;
 } else {
 visibleDivId = divId;
 }
 hideNonVisibleDivs();
 }
 function hideNonVisibleDivs() {
 var i, divId, div;
 for(i = 0; i < divs.length; i++) {
 divId = divs[i];
 div = document.getElementById(divId);
 if(visibleDivId === divId) {
 div.style.display = "block";
 } else {
 div.style.display = "none";
 }
 }
 }