
class CustomElement extends HTMLElement{
    constructor(){
        super()
    }

    render(){
        this.innerHTML = `
        <div>
        console.log();
        h1 h1
        </div>
        `

    }
    connectedCallback(){
        this.render()
    }
}

customElements.define("new-element", CustomElement)