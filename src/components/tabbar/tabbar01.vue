<template>
  <div class="layout">
    <div class="div"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
  },
  mounted() {
    console.log(this.$utils.getViewportSize())

    // get 请求
    this.$http('/api/user','get',{id:1}).then(res=>{
      console.log(res)
    }).catch(error=>{
      // 服务器响应 500
      console.log(error)
    })
    // post请求示例
    this.$http('/user/add','post',{id:1}).then(res=>{
      console.log(res)
    }).catch(error=>{
      // 服务器响应 500
      console.log(error)
    })
  },
  methods: {
  }
};
</script>
<style scoped>
.div{
  width: 1rem;
  height: 1rem;
  border: 0.01rem solid #ccc;
}
</style>