function init() {
sel(1,3);
}
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index + 1);
}


function on(line, column) {
var a =  document.getElementById(line).innerHTML;
str = a.replaceAt(column, "<u>" + a.slice(column,column+1) + "</u>");
	console.log(a.slice(column,column+1));
	document.getElementById(line).innerHTML = str;
    console.log("on");
    setTimeout(function() { off(line, column); }, 750);
}


function off(line, column) {
var str = document.getElementById(line).innerHTML;
str = str.replace("<u>", "");
str = str.replace("</u>", "");

document.getElementById(line).innerHTML = str;
    console.log("off");
}


function sel(line, column) {
setInterval(function() {
setTimeout(function() { on(line, column); }, 750);
}, 1500);
}

init();
