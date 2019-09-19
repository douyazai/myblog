<template>
    <nav>
      <ul>
        <router-link to="/" tag="li" exact>博客</router-link>
        <router-link to="/add" tag="li" exact>写博客</router-link>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "NavHeader"
    }
</script>

<style scoped>
nav{
  background: crimson;
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
