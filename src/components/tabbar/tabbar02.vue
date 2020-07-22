<template>
    <div>
        <Children :data="[1,2,3,4]" v-on:sendItem="sendItem" />
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <rect width="300" height="100"
                  style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/>
        </svg>
        <hr>
        <svg xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
                  style="fill:red;stroke:black;stroke-width:5;opacity:0.5"/>
        </svg>
        <hr>
        <svg xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="50" r="40" stroke="black"
                    stroke-width="2" fill="red"/>
        </svg>
        <hr>
        <svg xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" :x2="x" :y2="x" style="stroke:rgb(255,0,0);stroke-width:2"/>
        </svg>
        <hr>
        <svg>
            <polygon points="0,0 0,200 200,200 200,0 150,0 150,50 50,50 50,0"
                     style="fill:lime;stroke:purple;stroke-width:1"/>
        </svg>
        <hr>
        <svg>
            <path d="m0 0 l0 200 l200 0 l0 -200 l-50 0 l 0 50 l-100 0 l0 -50 z" fill="rgba(0,0,0,0.2)"/>
            <path @click="say()" d="m50 0 l0 50 l100 0 l0 -50  z" fill="rgba(0,0,0,0.0)" stroke="red"
                  stroke-dasharray="5,5"/>
        </svg>
        <van-dialog v-model="show" title="标题" :before-close="closeBefore" show-cancel-button>
            <p>123</p>
        </van-dialog>
    </div>
</template>
<script>
    import {debug} from '../../utils/debug';
    import Children from '../children/children';
    const log = debug('home');
    const _log = debug('mine');
    log('test home log');
    _log('test mine log');
    export default {
        components:{
            Children,
        },
        data() {
            return {
                x: 0,
                show: true,
            }
        },
        created() {
        },
        mounted() {
            let timer = setInterval(() => {
                if (this.x > 200) clearInterval(timer)
                this.x += 1
            }, 25)
        },
        methods: {
            sendItem(i){
                console.log(i,'子组件传来的')
            },
            say() {
                alert(1)
            },
            closeBefore(action, done) {
                if (action === 'confirm') {
                    done(false);
                } else {
                    done();
                }
            }
        }
    }
</script>
<style>
    .active {
        color: red;
    }
</style>
