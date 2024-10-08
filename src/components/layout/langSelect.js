import esIcon from "/src/assets/lang/es.png";
import enIcon from "/src/assets/lang/en.png";
import itIcon from "/src/assets/lang/it.png";

const srcPaths = {
    es: esIcon.src,
    en: enIcon.src,
    it: itIcon.src,
};

const paths = srcPaths
    const langs = ["es", "en", "it"];
    let userlang = localStorage.getItem("userlang")

    if (!userlang) {
        userlang = document.documentElement.lang || navigator.language.split("-")[-1];
        if (!userlang in langs){
            userlang = "en"
        }
        localStorage.setItem("userlang", userlang)
    }
    let actual = langs.indexOf(userlang)
    
    class Lang extends HTMLElement {
        constructor() {
            super();

            // img selection img
            const img = this.querySelector("img");
            img.src = paths[langs[actual]];

            // interactive btn
            const btn = this.querySelector("button");
            btn.addEventListener("click", () => {
                actual = (actual + 1) % 3
                localStorage.setItem("userlang", langs[actual])
                img.src = paths[langs[actual]];
            });
        }
    }

    customElements.define("custom-lang", Lang);