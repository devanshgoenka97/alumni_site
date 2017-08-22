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