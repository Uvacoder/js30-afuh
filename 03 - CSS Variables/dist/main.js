"use strict";function handleUpdate(){var e=this.dataset.sizing||"";document.documentElement.style.setProperty("--"+this.name,this.value+e)}var input=document.querySelectorAll(".controls input");input.forEach(function(e){return e.addEventListener("change",handleUpdate)}),input.forEach(function(e){return e.addEventListener("mousemove",handleUpdate)});