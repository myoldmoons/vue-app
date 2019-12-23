<template>
  <div>
    <div v-for="(item,index) in data" :key="index">{{item}}</div>
  </div>
</template>
<script>
export default {
  props: {
    data: Array,
    default:[]
  }
};
</script>
<style scope>
</style>