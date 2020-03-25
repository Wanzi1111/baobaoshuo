export function setHtmlFontSize(){
    const clientWidth = window.innerWidth;
    const htmlDom = document.documentElement;
    htmlDom.style.fontSize = clientWidth/20 +'px';
}
setHtmlFontSize();
window.onresize = setHtmlFontSize;