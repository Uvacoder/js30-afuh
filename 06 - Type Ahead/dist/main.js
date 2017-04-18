"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function request(){var e=new XMLHttpRequest;e.open("GET","https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"),e.responseType="json",e.send(),e.onload=function(){cities.push.apply(cities,_toConsumableArray(e.response))}}function findMatches(e,n){return n.filter(function(n){var t=new RegExp(e,"gi");return n.city.match(t)||n.state.match(t)})}function numberWithCommas(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function displayMatches(){var e=this,n=findMatches(this.value,cities),t=n.map(function(n){var t=new RegExp(e.value,"gi");return'\n    <li>\n      <span class="name">'+n.city.replace(t,'<span class="hl">'+e.value+"</span>")+", "+n.state.replace(t,'<span class="hl">'+e.value+"</span>")+'</span>\n      <span class="population">'+numberWithCommas(n.population)+"<span>\n    </li>\n    "}).join("");suggestions.innerHTML=t}var cities=[];window.onload=request;var searchInput=document.querySelector(".search"),suggestions=document.querySelector(".suggestions");searchInput.addEventListener("change",displayMatches),searchInput.addEventListener("keyup",displayMatches);