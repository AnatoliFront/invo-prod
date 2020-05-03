document.addEventListener('DOMContentLoaded', () => {
    let footerHeight  = document.querySelector('.footer').offsetHeight;
    window.innerWidth < 800 ? footerHeight+=30 : footerHeight-=1;
    document.querySelector('#root').style.paddingBottom = footerHeight + 'px';

    window.onresize = () => {
        let footerHeight = document.querySelector('.footer').offsetHeight;
        footerHeight -= 1;
        document.querySelector('#root').style.paddingBottom = footerHeight + 'px';
    }
})
