<template>
  <div id="app">
   <div class="header-wrap">
   <div class="header">
      <ul>
         <li><router-link to="/home">首页</router-link></li>
         <li><router-link to="/zhuan">专栏</router-link></li>
         <li><router-link to="/zhuan">收藏集</router-link></li>
         <li><router-link to="/zhuan">发现</router-link></li>
         <li><router-link to="/zhuan">标签</router-link></li>
      </ul>
      <form action="">
         <input type="text"><span></span>
      </form>
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
   .home,.zhuan{
     width:960px;
     height:600px;
     margin:0 auto;
     padding-top:30px;
   }
   form{
    width:180px;
    height:30px;
    margin:15px 0;
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
    box-shadow: none;
    outline: none;
    font-size: 1.1rem;
    color: #aeb6c0;
    background-color: transparent;
    position:absolute;
    top:0;
    left:0;
   }
</style>
