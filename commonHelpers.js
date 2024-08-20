import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f="https://pixabay.com/api/";function p(e){const s=new URLSearchParams({key:"45497823-3ee11a5b90ff874601dfe7178",q:e,per_page:9,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${f}?${s}`;return fetch(o).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const h=document.querySelector(".images-container");let n;function g(e){return`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img 
        class="gallery-image" 
        src="${e.webformatURL}" 
        alt="${e.tags}" 
      />
    </a>
    <div class="img-details-box">
      <p class="detail-item"><b class="detail-title">Likes:</b> ${e.likes}</p>
      <p class="detail-item"><b class="detail-title">Views:</b> ${e.views}</p>
      <p class="detail-item"><b class="detail-title">Comments:</b> ${e.comments}</p>
      <p class="detail-item"><b class="detail-title">Downloads:</b> ${e.downloads}</p>
    </div>
    </li>
  `}function y(e){return e.map(g).join("")}function b(e){const s=y(e);h.insertAdjacentHTML("beforeend",s),n?n.refresh():n=new m(".images-container a",{captionsData:"alt",captionDelay:250})}const u=document.querySelector(".form"),L=document.querySelector(".images-container"),d=document.querySelector(".loader");u.addEventListener("submit",S);function S(e){e.preventDefault(),L.innerHTML="",w();const s=e.target.elements.query.value.trim();if(!s){l.error({message:"Search field is empty",position:"topRight"}),c();return}p(s).then(o=>{if(o&&o.hits&&o.hits.length)b(o.hits);else throw Error("Sorry, there are no images matching your search query. Please try again!")}).catch(o=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{c()}),u.reset()}const w=()=>{d.classList.remove("is-hidden")},c=()=>{d.classList.add("is-hidden")};
//# sourceMappingURL=commonHelpers.js.map
