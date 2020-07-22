let loading=false;
/***
 * 滑动事件
 * @param callback 触底回掉函数
 */
const scrollBottom =(callback)=>{
    let t=document.documentElement.scrollTop;
    let h=document.documentElement.clientHeight;
    let v=document.body.scrollHeight;
    if(t+h>=v-50&&!loading){
        loading=true;
        callback().then(()=>{
            //当前页加载完毕
            loading=false;
        }).catch(()=>{
            //没有更多数据了..
            loading=true;
        })
    }
}
/**
 *
 * @param callback loading函数
 */
const registerAddEventListener=(callback)=>{
    window.addEventListener("scroll", scrollBottom.bind(this, callback), false);
}
const removeEventListener=()=>{
    window.removeEventListener('scroll', scrollBottom,false);
}
export {registerAddEventListener,removeEventListener};