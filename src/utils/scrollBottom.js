let loading=false;
/***
 * 滑动事件
 * @param callback 触底回掉函数
 */
const scrollBottom =(callback)=>{
    console.log(loading)
    let t=document.documentElement.scrollTop;
    let h=document.documentElement.clientHeight;
    let v=document.body.scrollHeight;
    if(t+h>=v-50&&!loading){
        loading=true;
        callback().then(()=>{
            loading=false;
        })
        console.log('bottom')
    }
}
/**
 *
 * @param callback
 */
const registerAddEventListener=(callback)=>{
    window.addEventListener("scroll", scrollBottom.bind(this, callback), false);
}
const removeEventListener=()=>{
    window.removeEventListener('scroll', scrollBottom,false);
}
export default  {registerAddEventListener,removeEventListener};