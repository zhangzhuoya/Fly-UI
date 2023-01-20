<template>
  <FlySwitch v-model:value="value" :disabled="true"></FlySwitch>
  <FlyButton theme="primary">primary</FlyButton>
  <FlyButton theme="link">link</FlyButton>
  <FlyButton theme="text">text</FlyButton>
  <FlyButton theme="danger">danger</FlyButton>
  <FlyButton theme="text" @click="showDialog">11</FlyButton>
  <FlyButton theme="text" :isLoading="true">text</FlyButton>
  <FlyDialog
    v-model:visiable="vis"
    :ok="ok"
    :cancel="cancel"
    :closeOverlay="true"
  >
    <template v-slot:title>
      <strong> 标题 </strong>
    </template>
    <template v-slot:content>
      <strong> 这是内容 </strong>
    </template>
  </FlyDialog>
</template>

<script lang="ts">
import { ref, h } from "vue";
import FlySwitch from "./lib/switch/FlySwitch.vue";
import FlyButton from "./lib/button/FlyButton.vue";
import FlyDialog from "./lib/dialog/FlyDialog.vue";
import { openDialog } from "./lib/dialog/dialog";
export default {
  name: "App",
  components: {
    FlySwitch,
    FlyButton,
    FlyDialog,
  },
  setup() {
    const value = ref(true);
    let vis = ref(false);
    const ok = () => {
      return true;
    };
    const cancel = () => {
      return false;
    };
    const closeDialog = () => {
      vis.value = !vis.value;
    };
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      value,
      vis,
      closeDialog,
      ok,
      cancel,
      showDialog,
    };
  },
};
</script>
