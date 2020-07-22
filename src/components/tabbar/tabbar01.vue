<template>
    <div>
        <div class="con">
            red
            <p>green</p>
        </div>
        <ul>
            <li v-for="item in num">{{item}}</li>
        </ul>
    </div>
</template>


<script>
    import {registerAddEventListener,removeEventListener} from '../../utils/scrollBottom'
    export default {
        data() {
            return {
                num: 40
            };
        },
        watch: {
            value(news, old) {
                this.value = this.$utils.formatInputMoney(news, 6);
            }
        },
        mounted() {
           registerAddEventListener(this.loads)
        },
        destroyed() {
            removeEventListener();
        },
        methods: {
            loads() {
                console.log('ajax')
                return new Promise(((resolve,reject)=>{
                    this.$http.get('http://www.baidu.com').then(res=>{

                    }).catch(error=>{
                        this.num+=30;
                        if(this.num===100){
                            reject()
                        }else{
                            resolve()
                        }
                    })
                }))
            }
        }
    };
</script>
<style scoped lang="scss">
    .con{
        color: red;
        p{
            color: green;
        }
    }
</style>