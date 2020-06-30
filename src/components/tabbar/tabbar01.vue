<template>
    <div class="con">
        <input type="number" v-model="value"/>
        <ul>
            <li v-for="item in num">{{item}}</li>
        </ul>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                value: "",
                num: 40
            };
        },
        watch: {
            value(news, old) {
                this.value = this.$utils.formatInputMoney(news, 6);
            }
        },
        mounted() {
           this.$page.registerAddEventListener(this.loads)
        },
        destroyed() {
            this.$page.removeEventListener();
        },
        methods: {


            async loads() {
                console.log('ajax')
                this.$http.get('http://www.baidu.com').then(res=>{
                }).catch(error=>{
                    this.num+=30;
                })
            }
        }
    };
</script>
<style scoped>
</style>