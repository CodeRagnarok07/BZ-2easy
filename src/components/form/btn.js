customElements.define("wc-form-btn", class extends HTMLElement {

    constructor() {

        super()
        // this.attachShadow({mode:"open"})
      }

  
    connectedCallback() {

        this.text = this.getAttribute("text") 
        

        this.render()
    }

    render() {
        // this.shadowRoot.innerHTML = `
        this.innerHTML = `
                <a href="survey" class="bg-primary p-2.5 rounded-lg md:text-3xl">
                ${this.text}
                </a>


        `

    }
})