<template>
    <div>
        {{JSON.stringify(activeId)}}
        <div v-for="item in list" @click="clickTank(item)" :key="item.id"
             :class="activeId.has(item.id)===true?'active':''">{{item.tankName}}
        </div>
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
    import {debug} from '../../utils/debug'

    const log = debug('home');
    const _log = debug('mine');
    log('test home log');
    _log('test mine log');
    export default {
        data() {
            return {
                x: 0,
                show: true,
                list: [
                    {
                        id: 1,
                        tankName: "一吨罐"
                    },
                    {
                        id: 2,
                        tankName: "二吨罐"
                    },
                    {
                        id: 3,
                        tankName: "三吨罐"
                    },
                    {
                        id: 4,
                        tankName: "四吨罐"
                    },
                    {
                        id: 5,
                        tankName: "五吨罐",
                    }
                ],
                activeId: null
            }
        },
        created() {
            this.activeId=new Set([])
        },
        mounted() {
            let timer = setInterval(() => {
                if (this.x > 200) clearInterval(timer)
                this.x += 1
            }, 25)
        },
        methods: {
            say() {
                alert(1)
            },
            clickTank(item) {
                console.log(item.id)
                if (!this.activeId.has(item.id)) {
                    this.activeId.add(item.id)
                    console.log(this.activeId)
                } else {
                    this.activeId.delete(item.id)
                    console.log(this.activeId)
                }
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
