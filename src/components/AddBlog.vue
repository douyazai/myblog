<template>
    <div id="add-blog">
      <h2>添加博客</h2>
      <form v-if="!submitted">
        <div>
          <label>主题</label>
          <input type="text" v-model="blog.title">
        </div>
        <div>
          <label>内容</label>
          <textarea v-model="blog.content"></textarea>
        </div>
        <div id="checkboxes">
          <label>Vue.js<input type="checkbox" value="Vue.js" v-model="blog.categories"></label>
          <label>Angular4<input type="checkbox" value="Angular4" v-model="blog.categories"></label>
          <label>Node.js<input type="checkbox" value="Node.js" v-model="blog.categories"></label>
          <label>React.js<input type="checkbox" value="React.js" v-model="blog.categories"></label>
        </div>
        <div>
          <label>作者：</label>
          <select  v-model="blog.author">
            <option v-for="author in authors">{{author}}</option>
          </select>
        </div>
        <button @click.prevent="postTo">发布博客</button>
      </form>
      <div v-if="submitted">
        <h3>恭喜你，发布成功！</h3>
        <button @click="submitted=!submitted">再写一篇</button>
        <router-link to="/" tag="button">博客总览</router-link>
      </div>


      <hr>

      <div id="pre">
        <h3>博客预览</h3>
        <div><h4>主题:</h4><p>{{blog.title}}</p></div>
        <div><h4>内容:</h4><p>{{blog.content}}</p></div>
        <div><h4>分类:</h4><p v-for="category in blog.categories">{{category}}</p></div>
        <div><h4>作者:</h4><p>{{blog.author}}</p></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AddBlog",
      data(){
          return {
            blog:{
              title:"",
              content:"",
              categories:[],
              author:""
            },
            authors:["pen","filling","jack"],
            submitted:false
          }
      },
      methods:{
        postTo:function () {

            const query = Bmob.Query('blogs');
            query.set("blog",this.blog);
            query.save().then(res => {
              console.log(res);
              this.submitted = !this.submitted
            }).catch(err => {
              console.log(err)
            })
            // this.$http.post("http://jsonplaceholder.typicode.com/posts",{
            //   title:this.blog.title,
            //   body:this.blog.content,
            //   userId:3
            // }).then(function (res) {
            //     console.log(res);
            //
            // })
          }
      }
    }
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;
}
  #add-blog{
    max-width: 600px;
    margin: 10px auto;
    padding: 20px;
  }
  #add-blog div{
    margin-top: 10px;
  }
  h2 {

  }
  label{
    margin-bottom: 10px;
    display: inline-block;
  }
  input[type='text'],textarea{
    display: block;
    padding: 10px;
    width: 100%;
    outline: none;
    box-sizing: border-box;
  }
  textarea{
    height: 300px;
  }
  #checkboxes label{
    margin-right: 10px;
  }
  select{
    display: inline-block;
    width: 200px;
  }
  button{
    background: crimson;
    padding: 10px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
  }
</style>
