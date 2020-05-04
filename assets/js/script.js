document.addEventListener('DOMContentLoaded', () => {

    const qs = (selector) => document.querySelector(selector);
    const qsa = (selector) => document.querySelectorAll(selector);



    const preloader = qs('.preloader');
    setTimeout(() => {
        preloader.classList.remove('active');
    }, 2000)

    
    let footerHeight  = document.querySelector('.footer').offsetHeight;
    window.innerWidth < 800 ? footerHeight+=30 : footerHeight-=1;
    document.querySelector('#root').style.paddingBottom = footerHeight + 'px';

    window.onresize = () => {
        let footerHeight = document.querySelector('.footer').offsetHeight;
        footerHeight -= 1;
        document.querySelector('#root').style.paddingBottom = footerHeight + 'px';
    }


    window.onscroll = function(e) {
        const anim = function(elems,interval,index=0) {
            if(index>elems.length-1) {
                return;
            }
            setTimeout(() => {
                if(elems[index]) {
                    elems[index].classList.add('active');
                }  
                anim(elems,interval, index+1)
            }, interval);
        }
        if(qs('.pharm-card')) {
            const elems = qsa('.pharm-card')
            const mass = Array.from(elems).map(e => {
          
                if(e && !e.classList.contains('active')) {
                    console.log(window.pageYOffset)
                    if ((window.pageYOffset + window.innerHeight) > (e.getBoundingClientRect().top+window.pageYOffset + 100)){
                        console.log((window.pageYOffset + window.innerHeight) )
                        return e   
                    }   
                }
            }) 
            console.log(mass)
            anim(mass, 100)
        }
    }
    
})
