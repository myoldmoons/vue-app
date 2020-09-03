<template>
    <div>
        <div class="con">
            {{is_login}}
            <p>{{count}}</p>
            <p>green</p>
            <button @click="switch_login">login-click</button>
            <button @click="add_count">car-click</button>
        </div>
        <!--        <ul>-->
        <!--            <li v-for="item in num">{{item}}</li>-->
        <!--        </ul>-->
        <div class="warp">
            <p>瀑布流</p>
            <ul>
                <li class="item">
                    <ul>
                        <li v-for="item in column1_list">
                            <div>
                                <span v-for="item in parseInt(Math.random()*10+2+'')">测试</span>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="item">
                    <ul>
                        <li v-for="item in column2_list">
                            <div>
                                <span v-for="item in parseInt(Math.random()*10+2+'')">测试</span>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    import {registerAddEventListener, removeEventListener} from '../../utils/scrollBottom'
    import {mapState, mapMutations} from 'vuex';

    export default {
        data() {
            return {
                column1_list: 10,
                column2_list: 10,
            };
        },
        computed: {
            ...mapState({
                is_login: state => state.user.is_login,
                count: state => state.car.count
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
                    setTimeout(()=>{
                        this.column1_list+=10;
                        this.column2_list+=10;
                        resolve();
                    },300)
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

    .warp {
        background-color: #f6f6f6;

        & > ul {
            display: flex;
            flex-wrap: wrap;
            padding: 0 5px;

            li.item {
                width: 50%;
                box-sizing: border-box;

                ul {
                    display: flex;
                    flex-direction: column;

                    li {
                        padding: 5px;

                        div {
                            background-color: #fff;
                            padding: 10px;
                            border-radius: 5px;
                            text-align: left;
                            font-size: 14px;
                            letter-spacing: 10px;
                        }
                    }
                }
            }
        }
    }
</style>