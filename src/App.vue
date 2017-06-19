<template>
  <div id="app">
   <div class="header-wrap">
   <div class="header">
      <ul>
         <li><router-link to="/"><img src="./components/static/images/logo.a7995ad.svg" alt=""></router-link></li>
         <li><router-link to="/home">首页</router-link></li>
         <li><router-link to="/zhuan">专栏</router-link></li>
         <li><router-link to="/zhuan">收藏集</router-link></li>
         <li><router-link to="/zhuan">发现</router-link></li>
         <li><router-link to="/zhuan">标签</router-link></li>
      </ul>
      <form action="">
         <input type="text" placeholder="搜索掘金"><span></span>
      </form>
      <ol>
         <router-link to=""><img src="./components/static/images/submit-icon.53f4253.svg" alt="">投稿</router-link>
         <router-link to="">登录</router-link>
         <router-link to="">注册</router-link>
      </ol>
   </div>
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default { 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  } 
}
</script>

<style>
   html,body{
     margin:0;
     padding:0;
     background:#f4f5f5;
   }
   a{
      text-decoration:none;
   }
   .header-wrap{
     width:100%;
     background:#fff;
     position:fixed;
     top:0;
     left:0;
   }
   .header{
     width:960px;
     height:60px;
     line-height:60px;
     margin:0 auto;
     font-size:16px;
   }
   ul{
     margin:0;
     padding:0;
   }
   ul li{
     float:left;
     list-style:none;
   }
    ul li a{
      color:#909090;
      padding:0 20px;
      text-decoration:none;
    }
    ul li a:hover{
      color:#0094ff;
    }
    ul li a img{
      margin-top:10px;
    }
   .home,.zhuan{
     width:960px;
     height:600px;
     margin:0 auto;
     padding-top:30px;
   }
   form{
    width:180px;
    height:30px;
    margin:15px 40px;
    fonr-size:12px;
    border: 1px solid hsla(0,0%,59%,.2);
    background-color: rgba(227,231,236,.2);
    float:left;
    position:relative;
   }
   form input{
    height:30px;
    line-height:30px;
    border: none;
    width: 180px;
    padding-left:10px;
    box-shadow: none;
    outline: none;
    font-size: 0.8rem;
    color: #rgba(227,231,236,.2);
    background-color: transparent;
    position:absolute;
    top:0;
    left:0;
   }
   ol{

   }
   ol a {
     color:#0094ff;
     padding:0 10px;
   }
   ol a:nth-of-type(2){
     border-left:1px solid #909090;
   }
   ol a img{
     padding-bottom:3px;
     vertical-align:middle;
   }
</style>
