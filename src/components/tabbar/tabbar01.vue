<template>
  <div class="layout">
    <p>store:{{show}}</p>
    <van-button type="primary" @click="changeStore()">切换</van-button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    ...mapState({
      show: state => state.dialog.show
    })
  },
  mounted() {},
  methods: {
    changeStore() {
      console.log(this.$store.state.dialog.show);
      this.$store.dispatch("switch_dialog");
    }
  }
};
</script>
<style scoped lang='less'>
.con {
  overflow: hidden;
}
.layout {
  height: 1000/3px;
}

p {
  transform: scale(1);
  font-size: 16px;
}
</style>