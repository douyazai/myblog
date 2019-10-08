<template>
  <div class="header">
    <a class="title" href="#">
      <p class="big-title">豆芽仔.Pen</p>
      <p class="small-title">邱品的个人博客</p>
    </a>
    <nav>
      <ul class="nav">
        <router-link to="/" tag="li" exact>首页</router-link>
        <router-link to="/add" tag="li" class="life-word" exact>
          <span>生活笔记</span>
          <ul>
            <li>生活笔记1</li>
            <li>生活笔记2</li>
            <li>生活笔记3</li>
          </ul>
        </router-link>
        <router-link to="/add" tag="li" exact>技术博客</router-link>
        <router-link to="/add" tag="li" exact>写博客</router-link>
        <router-link to="/add" tag="li" exact>关于博主</router-link>
        <router-link to="/add" tag="li" exact>欢迎交流</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "NavHeader"
    }
</script>

<style scoped>
.title{
  display: flex;
  justify-content: center;
  align-items: baseline;
  color: #fff;
  padding: 20px;
  letter-spacing: 1px;
  text-decoration: none;
  margin-bottom: 10px;
}
.big-title{
  margin-right: 10px;
  font-size: 40px;
  transition: letter-spacing 1s;
}
.title:hover .big-title{
  letter-spacing: 10px;
}
.title:hover .small-title{
  opacity: 0.5;
  margin-left: 20px;
}
.small-title{
  transition: opacity 1s,margin-left 2s;
}
.header{
  background: #d56464;
}
.nav{
  display: flex;
  justify-content: center;
  background-color: #4a4a4a;
  opacity: 0.9;
}
.nav li{
  display: inline-block;
  list-style: none;
  padding: 15px 25px;
  margin-left: 1px;
  cursor: pointer;
  color: #fff;
}
.nav li:hover{
  background-color: #d56464;
}
.life-word{
  position: relative;
}
.life-word>ul{
  position: absolute;
  left: -2px;
  top: 51px;
  display: none;
}
.life-word>ul>li{
  width: 80px;
  background-color: #4a4a4a;
  opacity: 0.9;
  transform: rotateY(0deg);
  transition: transform 2s;
}
.life-word:hover ul{
  display: block;
}
.life-word:hover ul>li{
  transform: rotateY(180deg);
}

.router-link-active{
  background-color: #d56464;
}
</style>
