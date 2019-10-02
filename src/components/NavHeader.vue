<template>
  <div class="header">
    <a class="title" href="#">
      <p class="big-title">豆芽仔.Pen</p>
      <p class="small-title">邱品的个人博客</p>
    </a>
    <nav>
      <ul>
        <router-link to="/" tag="li" exact>博客</router-link>
        <router-link to="/add" tag="li" exact>写博客</router-link>
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
  padding: 2px;
}
ul{
  display: flex;
  justify-content: center;
}
  li{
    display: inline-block;
    list-style: none;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 4px;
    color: #fff;
  }
  .router-link-active{
    background-color: rgba(255,255,255,0.8);
  }
</style>
