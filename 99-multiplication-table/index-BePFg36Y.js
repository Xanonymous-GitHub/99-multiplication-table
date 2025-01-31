(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c="/chalkboard.png";function l(i){let r="";for(let s=1;s<=i;s++){for(let o=1;o<=i;o++)r+=`${s} x ${o} = ${s*o}	`;r+=`
`}return r}document.querySelector("#app").insertAdjacentHTML("beforeend",`
    <div>
      <img src="${c}" class="logo" alt="Vite logo" />
      <h1 class="_42dot-sans">Multiplication Table</h1>
      <div class="card">
        <code class="content-text _42dot-sans">
          <pre>${l(9)}</pre>
        </code>
      </div>
    </div>
  `);
