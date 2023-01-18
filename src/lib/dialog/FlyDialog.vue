
<template>
  <div class="fly-dialog">
    <div class="fly-dialog-overlay">

    </div>
    <div class="fly-dailog-wrapper">
        <header>
            标题
        </header>
        <main>
            内容
        </main>
        <footer>
            <FlyButton>cancel</FlyButton>
            <FlyButton>ok</FlyButton>
        </footer>
    </div>
  </div>
</template>

<script lang="ts">
import FlyButton from '../button/FlyButton.vue'
export default {
    name:'FlyDialog',
    components: {
        FlyButton
    }

}
</script>

<style lang="scss">
.fly-dialog {
    width: 500px;
}

</style>