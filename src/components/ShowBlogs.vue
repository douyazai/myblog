<template>
    <div id="show-blogs" v-theme:column="'wide'">
      <h1>博客总览</h1>
      <input type="text" placeholder="搜索" v-model="search">
      <div class="single-blog" v-for="blogMsg in filteredBlogs">
        <router-link :to="'blog/'+blogMsg.objectId">
          <h3 v-rainbow>{{blogMsg.blog.title | to-uppercase}}</h3>
        </router-link>

        <article>
          {{blogMsg.blog.content | snippet}}
        </article>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ShowBlogs",
      data(){
          return {
            blogs:[],
            search:""
          }
      },
      created() {
        const query = Bmob.Query("blogs");
        query.find().then(res => {
          this.blogs = res.slice(0,10);
          //console.log(this.blogs);
        });
          // this.$http.get("http://jsonplaceholder.typicode.com/posts").then(function (res) {
          //   // console.log(res)
          //   this.blogs = res.body.slice(0,10);
          // })
      },
      //自定义过滤器
      filters:{
          "to-uppercase":function (value) {
            return value.toUpperCase()
          },
          "snippet":function (value) {
            return value.slice(0,100) + "..."
          }
      },
      //计算属性
      computed:{
          filteredBlogs:function () {
            let that = this;
            return this.blogs.filter(function (blogMsg) {
              return blogMsg.blog.title.match(that.search)
            })
          }
      }
    }
</script>

<style scoped>
#show-blogs{
  max-width: 800px;
  margin: 10px auto;
  padding: 10px;
}
  .single-blog{
    margin: 10px 0;
    padding: 10px;
    background-color: #eee;
    box-sizing: border-box;
  }
  input[type="text"]{
    display: inline-block;
    width: 100%;
    padding: 8px;
    outline: none;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
</style>
