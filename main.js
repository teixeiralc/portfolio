(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n,r,i,a,o,c,s,l,u,f,d,h,m,v,y,g=function(){function n(t){var e,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.sections=document.querySelectorAll(t),this.windowHeightHalf=.6*window.innerHeight,this.checkDistance=(e=this.checkDistance.bind(this),25,function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];r&&clearTimeout(r),r=setTimeout((function(){e.apply(void 0,n),r=null}),25)})}var r,i;return r=n,(i=[{key:"getDistance",value:function(){var e,n=this;this.distance=(e=this.sections,function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=t.offsetTop;return{element:t,offset:Math.floor(e-n.windowHeightHalf)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.pageYOffset>t.offset&&t.element.classList.add("animate")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}])&&e(r.prototype,i),Object.defineProperty(r,"prototype",{writable:!1}),n}();n=document.querySelector('[data-menu="hamburger"]'),r=document.querySelector(".hamburger"),i=document.querySelector(".nav_list"),o=function(t){"touchstart"===t.type&&t.preventDefault(),i.classList.add("active"),r.classList.add("active"),function(t,e,n){var a=document.documentElement,o="data-outside";function c(n){t.contains(n.target)||(t.removeAttribute(o),e.forEach((function(t){a.removeEventListener(t,c)})),i.classList.remove("active"),r.classList.remove("active"))}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){return a.addEventListener(t,c)}))})),t.setAttribute(o,""))}(i,a);var e=i.classList.contains("active");t.currentTarget.setAttribute("aria-expanded",e),e?t.currentTarget.setAttribute("aria-label","Fechar Menu"):n.setAttribute("aria-label","Abrir Menu")},(a=["touchstart","click"]).forEach((function(t){n.addEventListener(t,o)})),c=document.getElementById("theme_checkbox"),s=function(){document.documentElement.classList.toggle("light")},c.addEventListener("change",(function(){s(),localStorage.removeItem("light"),document.documentElement.classList.contains("light")&&localStorage.setItem("light",1)})),localStorage.getItem("light")&&(s(),c.checked=!0),l=document.querySelector("[data-language]"),u={ptBR:"/portfolio/",enUK:"/portfolio/en"},l.addEventListener("change",(function(){var t=l.value;window.location.href=u[t]})),d=["JavaScript","CSS","Figma","UI Design"],h=0,m=0,v=document.querySelector(".type_effect_text"),y=document.querySelector(".cursor"),f=setInterval((function t(){var e=d[h].substring(0,m+1);function n(){var e=d[h].substring(0,m-1);v.innerHTML=e,m--,""===e&&(clearInterval(f),h===d.length-1?h=0:h++,m=0,setTimeout((function(){y.style.display="inline-block",f=setInterval(t,100)}),200))}v.innerHTML=e,m++,e===d[h]&&(y.style.display="none",clearInterval(f),setTimeout((function(){f=setInterval(n,100)}),1e3))}),100),new SplitType(".main_info .title"),new SplitType(".main_info #hello"),new SplitType(".main_info #subtitle"),document.querySelector(".call_to_project"),gsap.to(".char",{y:0,stagger:.05,delay:.3,duration:.1}),gsap.to(".word",{y:0,stagger:.05,delay:.3,duration:.1}),new g("[data-scroll]").init()})();