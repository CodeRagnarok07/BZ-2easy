customElements.define("wc-name", class extends HTMLElement {

    constructor() {

        super()
        // this.attachShadow({mode:"open"})
      }

  
    connectedCallback() {

        this.icon = this.getAttribute("icon") 

        this.render()
    }

    render() {
        // this.shadowRoot.innerHTML = `
        this.innerHTML = `
            <div
                class="px-8 h-auto flex flex-col gap-2 bg-gray-400 py-4 
                rounded-lg md:rounded-3xl text-center"
            >
            ${this.icon != null ? `<i><span class="text-6xl not-italic leading-none">${this.icon}</span></i>`: ""}
                <p class="text-xs " >${this.title}</p>
            </div>
        `

    }
})

