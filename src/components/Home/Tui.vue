
<template>
   <div>
      <div class="mid">
            <!--精选-->
            <div class="content">
              <div class="title">
               <span>精选</span>
               <router-link to="">更多精选</router-link></router-link>
               </div>
               <router-link to="" class="article">
                 <div class="img">
                   <img src="https://user-gold-cdn.xitu.io/2017/6/10/2c93bda68b7a3b09478f2439401fabc4?imageView2/1/w/120/h/120/q/85/format/jpg/interlace/1" alt="">
                 </div>
                 <div class="text">
                    <span>Javascript进阶之路-重构你的JS</span>
                    <ul>
                       <li>15</li>
                       <li>像一只狗</li>
                       <li>5小时前</li>
                    </ul>
                 </div>
               </router-link>
                 <router-link to="" class="article">
                 <div class="img">
                   <img src="https://user-gold-cdn.xitu.io/2017/6/10/2c93bda68b7a3b09478f2439401fabc4?imageView2/1/w/120/h/120/q/85/format/jpg/interlace/1" alt="">
                 </div>
                 <div class="text">
                    <span>Javascript进阶之路-重构你的JS</span>
                    <ul>
                       <li>15</li>
                       <li>像一只狗</li>
                       <li>5小时前</li>
                    </ul>
                 </div>
               </router-link>
            </div>
              <!--Android-->
            <div class="content">
              <div class="title">
               <span>IOS</span>
               <router-link to="">更多</router-link></router-link>
               </div>
               <router-link to="" class="article">
                 <div class="img">
                   <img src="https://user-gold-cdn.xitu.io/2017/6/10/2c93bda68b7a3b09478f2439401fabc4?imageView2/1/w/120/h/120/q/85/format/jpg/interlace/1" alt="">
                 </div>
                 <div class="text">
                    <span>Javascript进阶之路-重构你的JS</span>
                    <ul>
                       <li>15</li>
                       <li>像一只狗</li>
                       <li>5小时前</li>
                    </ul>
                 </div>
               </router-link>
                 <router-link to="" class="article">
                 <div class="img">
                   <img src="https://user-gold-cdn.xitu.io/2017/6/10/2c93bda68b7a3b09478f2439401fabc4?imageView2/1/w/120/h/120/q/85/format/jpg/interlace/1" alt="">
                 </div>
                 <div class="text">
                    <span>Javascript进阶之路-重构你的JS</span>
                    <ul>
                       <li>15</li>
                       <li>像一只狗</li>
                       <li>5小时前</li>
                    </ul>
                 </div>
               </router-link>
            </div>
              <!--Android-->
            <div class="content">
              <div class="title">
               <span>前端</span>
               <router-link to="">更多</router-link></router-link>
               </div>
               <router-link to="" class="article">
                 <div class="img">
                   <img src="https://user-gold-cdn.xitu.io/2017/6/10/2c93bda68b7a3b09478f2439401fabc4?imageView2/1/w/120/h/120/q/85/format/jpg/interlace/1" alt="">
                 </div>
                 <div class="text">
                    <span>Javascript进阶之路-重构你的JS</span>
                    <ul>
                       <li>15</li>
                       <li>像一只狗</li>
                       <li>5小时前</li>
                    </ul>
                 </div>
               </router-link>
                 <router-link to="" class="article">
                 <div class="img">
                   <img src="https://user-gold-cdn.xitu.io/2017/6/10/2c93bda68b7a3b09478f2439401fabc4?imageView2/1/w/120/h/120/q/85/format/jpg/interlace/1" alt="">
                 </div>
                 <div class="text">
                    <span>Javascript进阶之路-重构你的JS</span>
                    <ul>
                       <li>15</li>
                       <li>像一只狗</li>
                       <li>5小时前</li>
                    </ul>
                 </div>
               </router-link>
            </div>
        </div>
        <div class="right">
          <div class="content1">
             <h3>掘金 · 一个只有高手分享的技术社区，立即加入：</h3>
             <a href="">使用微博登录</a>
             <a href="">使用微信登录</a>
             <a href="">使用GitHub登录</a>
             <a href="">邮箱/手机注册</a>
             <span>这些大厂的工程师也在使用掘金</span>
             <img data-v-fe674c4c="" src="//gold-cdn.xitu.io/v3/static/img/user-company.c6a25da.png" class="user-company">
          </div>
        </div>
   </div>
</template>

<style scoped>
    .mid{
      width:560px;
      height:500px;
      background:#f4f5f5;
      float:left;
      margin-left:150px;
      margin-top:70px;
  }
  .mid .content{
    width:100%;
    height:auto;
    line-height:46px;
    background:#fff;
    margin-bottom:20px;
  }
  .mid .content .title{
      width:100%;
      border-bottom:3px solid #f4f5f5;
  }
  .mid .content .title span{
      width:100px;
      padding:0 10px;
  }
  .mid .content .title a{
      width:460px;
      color:#0094ff;
      font-size:12px;
      display:inline-block;
      text-align:right;
  }
  .mid .content .article{
      width:90%;
      height:80px;
      display:block;
      margin:10px;
  }
   .mid .content .article:hover{
       background:#f0f0f0;
   }
   .mid .content .article .img{
      padding:10px;
       width:60px;
       height:60px;
       float:left;
   }
  .mid .content .article .img img{
       width:60px;
       height:60px;
   }
 .mid .content .article .text{
     height:60px;
     float:left;
 }
 .mid .content .article .text span{
     font-size:1rem;
     color:#333;
     height:30px;
     line-height:30px;
 }
  .mid .content .article .text ul{
      height:30px;
      color:#909090;
  }
   .mid .content .article .text ul li{
       padding:0 10px;
       height:30px;
       line-height:30px;
   }
  .right{
      width:210px;
      height:500px;
      background:#f4f5f5;
      float:left;
      margin-left:10px;
      margin-top:70px;
  }
  .right .content1{
     width:200px;
     padding:5px;
     height:auto;
     background:#fff;
  } 
  .right .content1 h3{
      font-size:14px;
  }
  .right .content1 a{
      width:180px;
      height:40px;
      line-height:40px;
      text-align:center;
      display:block;
      margin:10px auto;
      border-radius:5px;
      border:1px solid #ccc;
  }
  .right .content1 a:nth-of-type(1){
      color:#fff;
      background:#d21a1a;
  }
  .right .content1 a:nth-of-type(2){
      color:#fff;
      background:#37c700;
  }
  .right .content1 a:nth-of-type(3){
      color:#fff;
      background:#4c4c4c;
  }
   .right .content1 a:nth-of-type(4){
      background:#fff;
      color:#0094ff;
  }
  .right .content1 span{
      width:200px;
      height:30px;
      padding:20px 10px;
      font-size:10px;
      text-align:center;
      display:center;
      color:#909090;
  }
  .right .content1 img{
      paddig:20px;
      width:200px;
      height:50px;
  }
</style>