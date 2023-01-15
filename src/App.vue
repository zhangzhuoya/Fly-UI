<template>
  <FlySwitch v-model:value="value" :disabled="true"></FlySwitch>
</template>

<script lang="ts">
import { ref } from "vue";
import FlySwitch from "./lib/switch/FlySwitch.vue";
export default {
  name: "App",
  components: {
    FlySwitch,
  },
  setup() {
    const value = ref(true);
    return {
      value,
    };
  },
};
</script>
