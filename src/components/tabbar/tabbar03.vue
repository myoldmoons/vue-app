<template>
  <div class="con">
    <div>
      <VueDragResize id="sss" :isActive="true" :w="200" :h="200" v-on:resizing="resize" v-on:dragging="resize">
        <h3>Hello World!</h3>
        <p>{{ top }} х {{ left }} </p>
        <p>{{ width }} х {{ height }}</p>
      </VueDragResize>
    </div>
  </div>
</template>
    
<script>
import {
  getElementWidth,
  getElementHeight,
  getViewportSize
} from "../../kits/utils";
import VueDragResize from "vue-drag-resize";

export default {
  components: {
    VueDragResize
  },
  data() {
    return {
      width: 200,
      height: 200,
      top: 0,
      left: 0,
      vW: getViewportSize().width,
      vH: getViewportSize().height
    };
  },
  created() {},
  mounted() {},
  methods: {
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      if (this.top < 0) {
        this.top = 0;
      } else {
        this.top = newRect.top;
      }
      this.left = newRect.left;
    }
  }
};
</script>
<style lang="less" scoped>
.con {
  font-size: 0.16rem;
}
</style>