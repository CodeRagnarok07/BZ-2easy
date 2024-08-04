customElements.define("wc-form-btn-survey", class extends HTMLElement {

    constructor() {

        super()
        // this.attachShadow({mode:"open"})
      }

  
    connectedCallback() {

        this.icon = this.getAttribute("icon") 
        this.title = this.getAttribute("title") ?? "title"

        this.render()
    }

    render() {
        // this.shadowRoot.innerHTML = `
        this.innerHTML = `
         <div
                class=" h-auto flex flex-col items-center justify-center gap-2 bg-gray-400 py-4 
                rounded-lg md:rounded-3xl text-center text-nowrap
                aspect-video cursor-pointer
                "
            >
            ${this.icon != null ? `<i><span class="text-6xl not-italic leading-none">${this.icon}</span></i>`: ""}
                <p class="text-xs " >${this.title}</p>
            </div>
        `

    }
})

