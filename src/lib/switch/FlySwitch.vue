<template>
  <button class="fly-switch" :class="{'fly-checked': value,'disabled': disabled}" @click="changeSwitch"><span></span></button>
</template>

<script lang="ts">
export default {
  name: 'FLySwitch',
  props: {
    value:{
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  setup(props, context) {
    const changeSwitch =() =>{
      if (!props.disabled) {
        context.emit('update:value', !props.value)
      }
    }
    return {
      changeSwitch
    }
  },
};
</script>

<style lang="scss">
@use "sass:math";
$h: 22px;
$h2: $h - 4px;
.fly-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: math.div($h, 2);
  position: relative;
  &.disabled {
        cursor: not-allowed;

        &:hover {
            cursor: not-allowed;
        }
    }
  >span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: math.div($h2, 2);
    transition: all 250ms;
  }
  &.fly-checked {
    background: #1890ff;
    >span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    >span {
      width: $h2 + 4px;
    }
  }
  &.fly-checked:active {
    >span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
