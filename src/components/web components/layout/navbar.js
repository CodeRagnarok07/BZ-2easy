
import logo from '/assets/logo.png'

customElements.define("wc-layout-navbar", class extends HTMLElement {
    render() {
        this.innerHTML = `
        <nav
            class="container mt-[29px] md:mt-[43px] flex justify-between px-[5%] md:gap-[87px] items-center"
            >
            <a class="md:mr-auto flex-shrink-0" href="/">
                <img
                    class="w-auto h-[1.9rem] md:h-[3.5rem]"
                    src="${logo}"
                    alt=""
                /></a
            >

            <a class="flex-shrink-0 py-2 px-3 cursor-pointer border border-transparent hover:border-primary active:border-primary rounded-md"><p>Planes</p></a>
            <a class="flex-shrink-0 py-2 px-3 cursor-pointer border border-transparent hover:border-primary active:border-primary rounded-md"><p>Iniciar sesion</p></a>
        </nav>
        `

    }
    connectedCallback() {
        this.render()
    }
})

