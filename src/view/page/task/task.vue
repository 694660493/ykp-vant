<template>
  <div class="task">
      <nav class="tabbar">
          <router-link :to="{name: 'taxTask'}">财税业务</router-link>
          <router-link :to="{name: 'comprehensiveTask'}">综合业务</router-link>
      </nav>
      <router-view></router-view>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant';
export default {
  name:"task",
  components: {

  },
  data() {
    return {
      // active:1
    }
  }
}
</script>
<style scoped>
  html,body{
        height: 100%;
    }
    .task{
        background-color: #f9f9f9;
        height: 600px;
        flex: 1;
        overflow: auto;
    }
    .tabbar{
      background-image: linear-gradient(-90deg, #3EECAE 0%, #09AED1 100%);
      height: 85px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
    }
    .tabbar a{
      display: block;
      width: 65px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      color: #ffffff;
      box-sizing: border-box;
    }
    .tabbar .router-link-active{
      border-bottom: 3px solid #ffffff;
    }
</style>
