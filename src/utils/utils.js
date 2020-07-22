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

    formatInputMoney(data, max) {
        let d = data;
        let n;
        if (typeof d === Number) {
            d = d.toString();
        }
        n = d.split(".");
        if (n[0].length > max) {
            let t = "9";
            for (let i = 0; i < max - 1; i++) {
                t += "9";
            }
            n[0] = t;
        }
        if (n[1]) {
            if (n[1].length > 2) {
                n[1] = n[1].substring(0, 2);
            }
        }
        return n.join(".");
    }

}

const utils = new common()
export default utils