<template>
  <div>
    <div v-for="(item,index) in data" :key="index" @click="item_click(item)">{{item}}</div>
  </div>
</template>
<script>
export default {
  props: {
    data: Array,
    default:[]
  },
  methods:{
    item_click(id){
      console.log(id)
      this.$emit('sendItem',id)
    }
  }
};
</script>
<style scope>
</style>