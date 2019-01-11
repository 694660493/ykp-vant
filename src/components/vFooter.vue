<template>
  <van-tabbar v-model="active" style="height:60px" active-color="#2fdbb7">
    <van-tabbar-item icon="search">
      <span>首页</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.active : icon.normal"
      >
    </van-tabbar-item>
    <van-tabbar-item icon="manager">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
    data(){
        return{
            active: 0,
            name:'底部',
            icon: {
              normal: '../static/img/home.svg',
              active: '../static/img/home_active.svg'
            }
        }
    },
    methods:{
      changeColor(event){
        console.log(event.currentTarget,event.target);
      }
    }
}
</script>

<style scoped lang="scss">
    
</style>
