var indexedDB = window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;
var store;
var open;
// var result;
var tx;
   var request = indexedDB.open("database",1);
   request.onupgradeneeded = function(e){
   open = e.target.result;
   store = open.createObjectStore("resumedata",{keyPath:"name"});

}
request.onerror = function(e){
	console.log("error"+e);

   }

request.onsuccess=function(e){
	open = e.target.result;

	  

 }
