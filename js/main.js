"use strict";function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(o="Object"===o&&t.constructor?t.constructor.name:o)||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}document.addEventListener("DOMContentLoaded",function(){function N(){0<arguments.length&&void 0!==arguments[0]&&arguments[0]&&(o=e&&e.offsetWidth,i=n&&n.offsetWidth,a=r&&r.offsetWidth);var t=document.getElementById("nav");window.innerWidth<768||o+i+a>t.offsetWidth-120?t.classList.add("hide-menu"):t.classList.remove("hide-menu")}var e=document.getElementById("site-name"),o=e&&e.offsetWidth,n=document.querySelector("#menus .menus_items"),i=n&&n.offsetWidth,r=document.querySelector("#search-button"),a=r&&r.offsetWidth;function c(t){var e=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size")),o="";if(t){if(20<=e)return;o=e+1,document.documentElement.style.setProperty("--global-font-size",o+"px"),document.getElementById("nav").classList.contains("hide-menu")||N(!0)}else{if(e<=10)return;o=e-1,document.documentElement.style.setProperty("--global-font-size",o+"px"),document.getElementById("nav").classList.contains("hide-menu")&&N(!0)}saveToLocal.set("global-font-size",o,2)}var l,T=!1;function k(t){t.forEach(function(t){var e=t,t=e.getAttribute("datetime");e.innerText=btf.diffDate(t,!0),e.style.display="inline"})}document.getElementById("rightside").addEventListener("click",function(t){switch(t.target.id||t.target.parentNode.id){case"go-up":btf.scrollToDest(0,500);break;case"rightside_config":document.getElementById("rightside-config-hide").classList.toggle("show");break;case"readmode":!function(){var e;(e=document.body).classList.add("read-mode");var o=document.createElement("button");o.type="button",o.className="fas fa-sign-out-alt exit-readmode",e.appendChild(o),o.addEventListener("click",function t(){e.classList.remove("read-mode"),o.remove(),o.removeEventListener("click",t)})}();break;case"darkmode":"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200);break;case"hide-aside-btn":(e=document.documentElement.classList).contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside");break;case"font-plus":c(!0);break;case"font-minus":c()}var e}),window.refreshFn=function(){var e,o,t,n,i,r,a,c,l,s,d,u,f,y,m,p,h,g,b,L,v,S,_,E,A,w,O,G,I,B;function C(){n.style.overflow="",n.style.paddingRight="",btf.fadeOut(t,.5),o.classList.remove("open")}N(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&function(){var t=document.getElementById("card-toc"),a=t.getElementsByClassName("toc-content")[0],c=a.querySelectorAll(".toc-link"),n=document.getElementById("article-container");function e(){t.style.animation="toc-close .2s",setTimeout(function(){t.style.cssText="opacity:''; animation: ''; right: ''"},100)}window.addEventListener("scroll",btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop;o(e),i(e)},100));var o=function(t){var e=n.clientHeight,o=document.documentElement.clientHeight,e=(t-n.offsetTop)/(o<e?e-o:document.documentElement.scrollHeight-o),o=100<(o=Math.round(100*e))?100:o<=0?0:o;a.setAttribute("progress-percentage",o)},l=GLOBAL_CONFIG.isanchor;document.getElementById("mobile-toc-button").addEventListener("click",function(){("0"===window.getComputedStyle(t).getPropertyValue("opacity")?function(){t.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"}:e)()}),a.addEventListener("click",function(t){t.preventDefault(),t=t.target.classList.contains("toc-link")?t.target:t.target.parentElement,btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&e()});var s=n.querySelectorAll("h1,h2,h3,h4,h5,h6"),d="",i=function(o){if(0===c.length||0===o)return!1;var t,n,i="",r="";if(s.forEach(function(t,e){o>btf.getEleTop(t)-80&&(i="#"+encodeURI(t.getAttribute("id")),r=e)}),d!==r){if(l&&(t=i,window.history.replaceState&&t!==window.location.hash&&(t=t||location.pathname,window.history.replaceState({},"",t))),""===i)return a.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),void(d=r);d=r,a.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),(n=c[r]).classList.add("active"),setTimeout(function(){var t=(e=n).getBoundingClientRect().top,e=a.scrollTop;t>document.documentElement.clientHeight-100&&(a.scrollTop=e+150),t<100&&(a.scrollTop=e-150)},0);for(var e=n.parentNode;!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}}}(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(S=GLOBAL_CONFIG.noticeOutdate,(_=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=S.limitDay&&((E=document.createElement("div")).className="post-outdate-notice",E.textContent=S.messagePrev+" "+_+" "+S.messageNext,_=document.getElementById("article-container"),"top"===S.position?_.insertBefore(E,_.firstChild):_.appendChild(E))),GLOBAL_CONFIG.relativeDate.post&&k(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&k(document.querySelectorAll("#recent-posts time")),!GLOBAL_CONFIG.runtime||(E=document.getElementById("runtimeshow"))&&(A=E.getAttribute("data-publishDate"),E.innerText=btf.diffDate(A)+" "+GLOBAL_CONFIG.runtime),(A=document.getElementById("last-push-date"))&&(w=A.getAttribute("data-lastPushDate"),A.innerText=btf.diffDate(w,!0)),(w=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&w.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),this.classList.toggle("expand"),t=this.parentNode.nextElementSibling,btf.isHidden(t)?t.style.display="block":t.style.display="none"})})),e=document.getElementById("toggle-menu"),o=document.getElementById("sidebar-menus"),t=document.getElementById("menu-mask"),n=document.body,e.addEventListener("click",function(){btf.sidebarPaddingR(),n.style.overflow="hidden",btf.fadeIn(t,.5),o.classList.add("open")}),t.addEventListener("click",function(t){o.classList.contains("open")&&C()}),window.addEventListener("resize",function(t){btf.isHidden(e)&&o.classList.contains("open")&&C()}),!GLOBAL_CONFIG_SITE.isHome||(a=document.getElementById("scroll-down"))&&a.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),GLOBAL_CONFIG.highlight&&(S=GLOBAL_CONFIG.highlight.highlightCopy,_=GLOBAL_CONFIG.highlight.highlightLang,E=GLOBAL_CONFIG_SITE.isHighlightShrink,A=S||_||void 0!==E,w="highlighjs"===GLOBAL_CONFIG.highlight.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),A&&w.length&&(m="prismjs"===GLOBAL_CONFIG.highlight.plugin,g=!(h=p="")===E?"closed":"",void 0!==E&&(p='<i class="fas fa-angle-down expand '.concat(g,'"></i>')),S&&(h='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),b=function(t){var e=t.parentNode;e.classList.add("copy-true");var o,n=window.getSelection(),i=document.createRange();m?i.selectNodeContents(e.querySelectorAll("pre code")[0]):i.selectNodeContents(e.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(i),n.toString(),t=t.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((o=t.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,o.style.opacity=1,setTimeout(function(){o.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,n.removeAllRanges(),e.classList.remove("copy-true")},L=function(t){var e;(e=t.target.classList).contains("expand")?(t=_toConsumableArray(this.parentNode.children).slice(1),this.firstChild.classList.toggle("closed"),btf.isHidden(t[0])?t.forEach(function(t){t.style.display="block"}):t.forEach(function(t){t.style.display="none"})):e.contains("copy-button")&&b(this)},v=function(){var t=document.createElement("div");return t.className="highlight-tools ".concat(g),t.addEventListener("click",L),t},_?m?w.forEach(function(t){var e=void 0!==t.getAttribute("data-language")?t.getAttribute("data-language"):"Code",o='<div class="code-lang">'.concat(e,"</div>");btf.wrap(t,"figure","","highlight"),(e=v()).innerHTML=p+o+h,t.parentNode.insertBefore(e,t)}):w.forEach(function(t){var e=t.getAttribute("class").split(" ")[1],o='<div class="code-lang">'.concat(e="plain"===e||void 0===e?"Code":e,"</div>");(e=v()).innerHTML=p+o+h,t.insertBefore(e,t.firstChild)}):m?w.forEach(function(t){btf.wrap(t,"figure","","highlight");var e=v();e.innerHTML=p+h,t.parentNode.insertBefore(e,t)}):w.forEach(function(t){var e=v();e.innerHTML=p+h,t.insertBefore(e,t.firstChild)}))),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){var e,o=t.parentNode;o.parentNode.classList.contains("justified-gallery")||((e=document.createElement("div")).className="img-alt is-center",e.textContent=t.getAttribute("alt"),o.insertBefore(e,t.nextSibling))}),O="fancybox"===GLOBAL_CONFIG.lightbox?document.querySelectorAll("#article-container :not(a):not(.gallery-group) > img, #article-container > img"):[],G=0<O.length,I=document.querySelectorAll("#article-container .justified-gallery"),((B=0<I.length)||G)&&btf.isJqueryLoad(function(){var t,e,o;function n(t){t.each(function(t,e){var o=$(e),n=o.attr("data-lazy-src")||o.attr("src"),e=o.attr("alt")||"";o.wrap('<a href="'.concat(n,'" data-fancybox="group" data-caption="').concat(e,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})}B&&(t=I,(t=(e=$(t)).find("img")).unwrap(),t.length&&t.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),T?btf.initJustifiedGallery(e):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js),function(){btf.initJustifiedGallery(e)}),T=!0)),G&&(o=O,void 0===$.fancybox?($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.fancybox.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.fancybox.js),function(){n($(o))})):n($(o)))}),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(i=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";i.update({background:e})}),f=document.getElementById("rightside"),y=window.innerHeight+56,document.body.scrollHeight<=y?f.style.cssText="opacity: 1; transform: translateX(-38px)":(l=!(c=0),s=document.getElementById("page-header"),d="function"==typeof chatBtnHide,u="function"==typeof chatBtnShow,window.addEventListener("scroll",btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop,o=c<e;56<(c=e)?(o?(s.classList.contains("nav-visible")&&s.classList.remove("nav-visible"),u&&!0===l&&(chatBtnHide(),l=!1)):(s.classList.contains("nav-visible")||s.classList.add("nav-visible"),d&&!1===l&&(chatBtnShow(),l=!0)),s.classList.add("nav-fixed"),"0"===window.getComputedStyle(f).getPropertyValue("opacity")&&(f.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===e&&s.classList.remove("nav-fixed","nav-visible"),f.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=y&&(f.style.cssText="opacity: 1; transform: translateX(-38px)")},200))),(a=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&a.forEach(function(t){btf.wrap(t,"div","","table-wrap")}),(a=document.querySelectorAll("#article-container .hide-button")).length&&a.forEach(function(t){t.addEventListener("click",function(t){var e=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<e.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(e.querySelectorAll(".justified-gallery"))})}),document.querySelectorAll("#article-container .tab > button").forEach(function(t){t.addEventListener("click",function(t){var e,o,n,i=this.parentNode;i.classList.contains("active")||(n=i.parentNode.nextElementSibling,(e=btf.siblings(i,".active")[0])&&e.classList.remove("active"),i.classList.add("active"),o=this.getAttribute("data-href").replace("#",""),_toConsumableArray(n.children).forEach(function(t){t.id===o?t.classList.add("active"):t.classList.remove("active")}),0<(n=n.querySelectorAll("#".concat(o," .justified-gallery"))).length&&btf.initJustifiedGallery(n))})}),document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(t){t.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})}),r=!1,(a=document.querySelector("#comment-switch > .switch-btn"))&&a.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"}),r||"function"!=typeof loadOtherComment||(r=!0,loadOtherComment())})},refreshFn(),window.addEventListener("resize",N),window.addEventListener("orientationchange",function(){setTimeout(N(!0),100)}),document.querySelectorAll("#sidebar-menus .expand").forEach(function(t){t.addEventListener("click",function(){this.classList.toggle("hide");var t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"})}),window.addEventListener("touchmove",function(t){document.querySelectorAll("#nav .menus_item_child").forEach(function(t){btf.isHidden(t)||(t.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(l=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=(e=window.getSelection(0).toString()).length>l.limitCount?e+"\n\n\n"+l.languages.author+"\n"+l.languages.link+window.location.href+"\n"+l.languages.source+"\n"+l.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});