customElements.define("wc-focal-light", class extends HTMLElement {

    constructor() {

        super()
        // this.attachShadow({mode:"open"})
      }

  
    connectedCallback() {

        this.custom = this.getAttribute("custom")  ?? ""

        this.render()
    }

    render() {
        // this.shadowRoot.innerHTML = `
        this.innerHTML = `
            <div class="w-auto aspect-square mix-blend-overlay bg-white rounded-full blur-2xl md:blur-3xl
            h-32 md:h-96 ${this.custom }
            "></div>

        `

    }
})

