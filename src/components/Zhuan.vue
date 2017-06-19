<template>
    <div class="zhuan">
     <div class="nav-list-wrap">
      <div class="nav-list">
          <router-link to="">全部</router-link>
          <router-link to="">Android</router-link>
          <router-link to="">前端</router-link>
          <router-link to="">IOS</router-link>
          <router-link to="">后端</router-link>
          <router-link to="">设计</router-link>
          <router-link to="">产品</router-link>
          <router-link to="">工具资源</router-link>
          <router-link to="">阅读</router-link>
      </div>
      </div>
    </div>
</template>

<style scoped>
  .zhuan{
      width:100%;
      margin-top:60px;
  }
  .zhuan .nav-list-wrap{
      width:100%;
      background:#fff;

  }
  .zhuan .nav-list-wrap .nav-list{
      width:960px;
      height:46px;
      line-height:46px;
      font-size:14px;
      margin:0 auto;
  }
  .zhuan .nav-list-wrap .nav-list a{
      height:46px;
      color:#909090;
      padding:15px 10px;
  }
  .zhuan .nav-list-wrap .nav-list a:hover{
      color:#0094ff;
  }
</style>