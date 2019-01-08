<template>
    <div id="app">
        <router-view v-wechat-title="$route.meta.title" />
    </div>
</template>

<script>
import { getItem } from "./utils/utils.js";
export default {
    mounted() {
      
    }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
</style>
