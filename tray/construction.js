function addCard(root){

    let container = document.createElement('div')
    // container.style.border = '2px solid red'
    container.style.width = '80%'
    container.style.margin = 'auto'
    container.style.height = 'auto'
    container.style.alignItems = 'center'
    container.style.justifyContent = 'space-around'
    container.style.display = 'grid'



    function check(){
        if(window.innerWidth > 1650){
            container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'
        }
        if(window.innerWidth < 1650 && window.innerWidth > 870){
            container.style.gridTemplateColumns = '1fr 1fr'
        }
        if(window.innerWidth < 870){
            container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr '
            container.style.overflow = `hidden`   
            container.style.overflowX = `auto`   
            container.style.width = '1400px'
            container.style.display = 'flex'
            // container.style.width = 'auto'
        }
        requestAnimationFrame(check)
    }
    requestAnimationFrame(check)


    let banner = [
        {img: 'images/banner/segurança.png'},
        {img: 'images/banner/cartao.png'},
        {img: 'images/banner/frete.png'},
        {img: 'images/banner/pix.png'},
    ]

    for(let i = 0; i<banner.length; i++){
        let bannerImg = document.createElement('img')
    
        bannerImg.style.width = `320px`
        bannerImg.style.flex = `none`
        bannerImg.style.borderRadius = '8px'
        bannerImg.style.margin = 'auto'
        bannerImg.style.marginTop = '10px'
        bannerImg.style.marginBottom = '10px'
        bannerImg.src = banner[i].img

        bannerImg.style.transition = '400ms'

        bannerImg.addEventListener('mouseenter', ()=>{
            bannerImg.style.transform = 'scale(1.1)'
        })
        bannerImg.addEventListener('mouseleave', ()=>{
            bannerImg.style.transform = 'scale(1)'
        })

        container.appendChild(bannerImg)
    }


    root.appendChild(container)
}