const contentslider = document.getElementById("contentslider");
            const sizeContentChildren = contentslider?.children[0]?.offsetWidth


            const handleControl = ( isRight) =>{
                if(isRight){
                    contentslider.scrollLeft += sizeContentChildren
                }else{
                    contentslider.scrollLeft -= sizeContentChildren
                }
            }

            const goToLogin = document.getElementById("goToLogin")
            goToLogin?.addEventListener("click", ()=>{
                handleControl(false)
            })
            const goToRegister = document.getElementById("goToRegister")
            goToRegister?.addEventListener("click", ()=>{
                handleControl(true)
            })