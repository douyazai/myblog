<template>
  <div id="app">
    <!--<add-blog></add-blog>-->
    <!--<show-blogs></show-blogs>-->
    <nav-header></nav-header>
    <router-view></router-view>
    z
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import NavHeader from './components/NavHeader'

export default {
  name: 'App',
  components: {
    "add-blog":AddBlog,
    "show-blogs":ShowBlogs,
    "nav-header":NavHeader
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
