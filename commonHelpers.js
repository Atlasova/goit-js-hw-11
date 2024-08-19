import{S as d,i as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f="https://pixabay.com/api/";function p(e){const s=new URLSearchParams({key:"45497823-3ee11a5b90ff874601dfe7178",q:e,per_page:9,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${f}?${s}`;return fetch(o).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const y=document.querySelector(".images-container");let a;function h(e){return`<li class="gallery-item">
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
  `}function g(e){return e.map(h).join("")}function b(e){const s=g(e);y.insertAdjacentHTML("beforeend",s),a?a.refresh():a=new d(".images-container a",{captionsData:"alt",captionDelay:250})}const u=document.querySelector(".form"),L=document.querySelector(".images-container"),m=document.querySelector(".loader");u.addEventListener("submit",S);function S(e){e.preventDefault(),L.innerHTML="",w();const s=e.target.elements.query.value.trim();if(!s){c.error({message:"Search field is empty",position:"topRight"}),l();return}p(s).then(o=>{if(o&&o.hits&&o.hits.length)b(o.hits);else throw Error("Sorry, there are no images matching your search query. Please try again!")}).catch(o=>{c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{l()}),u.reset()}function w(){m.style.display="inline-block",setTimeout(l,4e3)}function l(){m.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
