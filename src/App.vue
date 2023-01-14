<template>
  <FlySwitch :vlaue="true"></FlySwitch>
</template>

<script lang="ts">
import FlySwitch from "./lib/switch/FlySwitch.vue";
export default {
  name: "App",
  components: {
    FlySwitch,
  },
};
</script>
