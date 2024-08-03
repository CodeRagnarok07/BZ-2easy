(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const n="/assets/logo-Cg2ExKvT.png";console.log(n);customElements.define("wc-layout-navbar",class extends HTMLElement{render(){this.innerHTML=`
<nav
class="container mt-[29px] md:mt-[43px] flex justify-between px-[5%] md:gap-[87px] items-center"
>
<a class="md:mr-auto flex-shrink-0" href="/">
    <img
        class="w-auto h-[1.9rem] md:h-[3.5rem]"
        src="${n}"
        alt=""
    /></a
>

<a class="flex-shrink-0 py-2 px-3 cursor-pointer border border-transparent hover:border-primary active:border-primary rounded-md"><p>Planes</p></a>
<a class="flex-shrink-0 py-2 px-3 cursor-pointer border border-transparent hover:border-primary active:border-primary rounded-md"><p>Iniciar sesion</p></a>
</nav>
        `}connectedCallback(){this.render()}});
