function fetchSection(url){
	$("#fillable").load("cms.html #"+url+"wrapper");
}

$(document).ready(function(){
   $("#home").trigger('click');
   $('.carousel').carousel({
  interval: 2000
});
});

$("#home").click(function(){
     fetchSection('home');
});

$("#aims").click(function(){
     fetchSection('aims');
});

$("#meettheteam").click(function(){
     fetchSection('meettheteam');
});

$("#messagefromdean").click(function(){
     fetchSection('messagefromdean');
});

$("#searchalumni").click(function(){
     fetchSection('searchalumni');
});

$("#alumniregs").click(function(){
     fetchSection('alumniregs');
});

var scrollpos = window.scrollY;
var header = document.getElementById("navbar");
var windowheight = window.innerHeight;
var headerheight = document.getElementById("header").offsetHeight;

function add_class_on_scroll() {
  header.classList.add("affix");
}

function remove_class_on_scroll() {
  header.classList.remove("affix");
}

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;
  if (scrollpos > 67)  {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});