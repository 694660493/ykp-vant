<template>
    <div id="app">
        <router-view></router-view>
        <vFooter></vFooter>
        <!--<router-view v-wechat-title="$route.meta.title" />-->
    </div>
</template>

<script>
import { getItem } from "./utils/utils.js";
import  vFooter from "./components/vFooter"
export default {
    mounted() {
      
    },
    components:{
      vFooter:vFooter
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
