<template>
    <div>
        <!-- 密码输入框 -->
        <van-password-input :value="value" info="密码为 6 位数字" :focused="show" @focus="show = true"/>
        <van-number-keyboard :show="show" extra-key="." close-button-text="完成" @blur="show = false" @input="onInput"
                             @delete="onDelete"/>
    </div>
</template>
<script>
    import {PasswordInput, NumberKeyboard, Toast} from "vant";

    export default {
        data() {
            return {
                value: "123",
                show: false
            };
        },

        methods: {
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
            },
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);
            }
        }
    };
</script>
<style scoped>
</style>