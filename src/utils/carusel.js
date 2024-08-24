const slider =document.getElementById("carusel")

        const sizeChildren = slider?.children[0]?.offsetWidth
        console.log(slider?.children[0], slider?.children[0].offsetWidth)

        const handleControl = ( isRight) =>{
            if(isRight){
                slider.scrollLeft += sizeChildren
            }else{
                slider.scrollLeft -= sizeChildren
            }
        }

        const controlLeft = document.getElementById("control-left")
        controlLeft?.addEventListener("click", ()=>{
            handleControl(false)
        })
        const controlRight = document.getElementById("control-right")
        controlRight?.addEventListener("click", ()=>{
            handleControl(true)
        })