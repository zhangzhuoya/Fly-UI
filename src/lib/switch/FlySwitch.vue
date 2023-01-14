<template>
  <button><span>12124</span></button>
  <!-- <div class="switch" >switch1{{ value }}</div> -->
</template>

<script lang="ts">
// import ref from "vue";
export default {
  name: 'FLySwitch',
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    console.log(props, context);
  },
};
</script>

<style lang="less">
button {
  color: red;
  span {
    color: green;
  }
}
</style>
