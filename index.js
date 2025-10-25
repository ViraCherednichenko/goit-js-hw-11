import{a as m,S as f,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="52890208-7e9e33748fa955c38ee9e6aa5",y=40,g=m.create({baseURL:"https://pixabay.com/api/",timeout:1e4,params:{key:p,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y}});async function h(a){return(await g.get("/",{params:{q:a}})).data}const l=document.querySelector(".gallery");let b=new f(".gallery a");function L(a){const t=a.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:s,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img class="gallery-image" src="${o}" alt="${e}" />
          </a>
          <div class="gallery-info">
            <p><b>Likes</b> ${r}</p>
            <p><b>Views</b> ${s}</p>
            <p><b>Comments</b> ${u}</p>
            <p><b>Downloads</b> ${d}</p>
          </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",t),b.refresh()}function q(){l.innerHTML=""}function S(){document.querySelector(".loader").classList.remove("hidden")}function c(){document.querySelector(".loader").classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",w);async function w(a){a.preventDefault();const t=a.target.elements.query.value.trim();if(!t){n.warning({message:"Please enter a search query!"});return}q(),S();try{const o=await h(t);if(c(),o.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(o.hits)}catch{c(),n.error({message:"Error loading images. Try again later!"})}}
//# sourceMappingURL=index.js.map
