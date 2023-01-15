<template>
  <FlySwitch v-model:value="value" :disabled="true"></FlySwitch>
  <FlyButton theme="primary">primary</FlyButton>
  <FlyButton theme="link">link</FlyButton>
  <FlyButton theme="text">text</FlyButton>
  <FlyButton theme="danger">danger</FlyButton>
  <FlyButton theme="text">text</FlyButton>
</template>

<script lang="ts">
import { ref } from "vue";
import FlySwitch from "./lib/switch/FlySwitch.vue";
import FlyButton from "./lib/button/FlyButton.vue";
export default {
  name: "App",
  components: {
    FlySwitch,
    FlyButton,
  },
  setup() {
    const value = ref(true);
    return {
      value,
    };
  },
};
</script>
