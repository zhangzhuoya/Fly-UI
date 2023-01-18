<template>
  <FlySwitch v-model:value="value" :disabled="true"></FlySwitch>
  <FlyButton theme="primary">primary</FlyButton>
  <FlyButton theme="link">link</FlyButton>
  <FlyButton theme="text">text</FlyButton>
  <FlyButton theme="danger">danger</FlyButton>
  <FlyButton theme="text">text</FlyButton>
  <FlyButton theme="text" :isLoading="true">text</FlyButton>
  <FlyDialog></FlyDialog>
</template>

<script lang="ts">
import { ref } from "vue";
import FlySwitch from "./lib/switch/FlySwitch.vue";
import FlyButton from "./lib/button/FlyButton.vue";
import FlyDialog from "./lib/dialog/FlyDialog.vue";
export default {
  name: "App",
  components: {
    FlySwitch,
    FlyButton,
    FlyDialog,
  },
  setup() {
    const value = ref(true);
    return {
      value,
    };
  },
};
</script>
