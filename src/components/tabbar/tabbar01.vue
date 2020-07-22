<template>
    <div>
        <div class="con">
            {{is_login}}
            <p>{{count}}</p>
            <p>green</p>
            <button @click="switch_login">login-click</button>
            <button @click="add_count">car-click</button>
        </div>
        <ul>
            <li v-for="item in num">{{item}}</li>
        </ul>
    </div>
</template>


<script>
    import {registerAddEventListener, removeEventListener} from '../../utils/scrollBottom'
    import {mapState, mapMutations} from 'vuex';

    export default {
        data() {
            return {
                num: 40
            };
        },
        computed: {
            ...mapState({
                is_login: state=>state.user.is_login,
                count:state=>state.car.count
            })
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
            ...mapMutations([
                'switch_login',
                'add_count'
            ]),
            loads() {
                console.log('ajax')
                return new Promise(((resolve, reject) => {
                    this.$http.get('http://www.baidu.com').then(res => {

                    }).catch(error => {
                        this.num += 30;
                        if (this.num === 100) {
                            reject()
                        } else {
                            resolve()
                        }
                    })
                }))
            }
        }
    };
</script>
<style scoped lang="scss">
    .con {
        color: red;

        p {
            color: green;
        }
    }
</style>