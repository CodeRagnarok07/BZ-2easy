
import logo from '/assets/logo.png'
import fb from "/assets/social/fb.svg";
import linkedin from "/assets/social/linkedin.svg";
import ig from "/assets/social/ig.svg";


customElements.define("wc-layout-footer", class extends HTMLElement {
    render() {
        this.innerHTML = `

        <footer
        class="-mb-5 min-h-[50vh] bg-primary grid place-content-center place-items-center py-24 md:py-56"
    >
        <div class="flex flex-row flex-wrap items-center md:items-start container px-[10%] gap-10 justify-center">
            <div class="flex-1">
                <a class="md:mr-auto flex-shrink-0" href="/">
                    <img
                        class="w-auto mb-10"
                        src="${logo}"
                        alt=""
                    /></a
                >
    
                <ul>
                    <li>Carrera 51B #80 - 58 Oficina 1403B</li>
                    <li>Barranquilla 080001, Colombia</li>
                    <li>Whatsapp: +57 3217294931</li>
                </ul>
            </div>
            
    
            <div class="flex-0 md:flex-1 ">
                Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
                nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                tellus elit sed risus
            </div>
    
            <div class="flex gap-8 justify-center flex-1">
                <a class="" href="/"> <img class="w-auto" src="${fb}" alt="" /></a>
                <a class="" href="/"> <img class="w-auto" src="${linkedin}" alt="" /></a>
                <a class="" href="/"> <img class="w-auto" src="${ig}" alt="" /></a>
            </div>
        </div>
    </footer>
        `

    }
    connectedCallback() {
        this.render()
    }
})

