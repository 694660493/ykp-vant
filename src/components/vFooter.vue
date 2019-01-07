<template>
    <div class="wrap">
      <section class="content">
        <section class="mSite">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
          <router-link to="/home">首页</router-link>
        </section>
        <section class="mine">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wode"></use>
          </svg>
          <router-link to="/mine">我的</router-link>
        </section>
      </section>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'底部'
        }
    }
}
</script>

<style scoped lang="stylus">
    .wrap
      position: relative
      .content
        background-color #FFFFFF
        width 100%
        position fixed
        bottom 0
        background-color pink
        height 1rem
        display flex
        justify-content center
        align-items center
        .mSite
          width 50%
          text-align center
        .mine
          width 50%
          text-align center
</style>
