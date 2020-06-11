class common {
    /**
     *  获取dom元素宽度
     * @param {*} el  element 
     */
    getElementWidth(el) {
        var geEl = document.querySelector(el)
        return geEl.offsetWidth; //宽度
    }
    /**
     * 获取dom元素高度
     * @param {*} el element
     */
    getElementHeight(el) {
        var geEl = document.querySelector(el)
        return geEl.offsetHeight; //高度
    }
    /**
     * 获取设备宽/高
     */
    getViewportSize() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
    } 
}
const utils=new common()
export default utils
