"use strict";function handleMove(e){var t=e.pageY-this.offsetTop,o=t/this.offsetHeight,d=Math.round(100*o)+"%",r=3.6*o+.4;bar.style.height=d,bar.textContent=r.toFixed(1)+"x",video.playbackRate=r}var speed=document.querySelector(".speed"),bar=speed.querySelector(".speed-bar"),video=document.querySelector(".flex");speed.addEventListener("mousedown",handleMove);