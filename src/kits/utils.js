const getElementWidth = (el) => {
    var geEl = document.querySelector(el)
    return geEl.offsetWidth; //宽度
}
const getElementHeight = (el) => {
    var geEl = document.querySelector(el)
    return geEl.offsetHeight; //高度
}
const getViewportSize = () => {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}
export {
    getElementWidth,
    getElementHeight,
    getViewportSize
}