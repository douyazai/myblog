<template>
  <div id="all">
    <div id="single-blog">
      <h2>{{blog.title}}</h2>
      <article>{{blog.content}}</article>
      <button class="destroy" @click="destroy">删除博客</button>
      <button class="change" @click="change">修改博客</button>
    </div>
    <div id="change-blog">
      <form v-if="changed">
        <div>
          <label>主题</label>
          <input type="text" v-model="blogChange.title">
        </div>
        <div>
          <label>内容</label>
          <textarea v-model="blogChange.content"></textarea>
        </div>
        <div id="checkboxes">
          <label>Vue.js<input type="checkbox" value="Vue.js" v-model="blogChange.categories"></label>
          <label>Angular4<input type="checkbox" value="Angular4" v-model="blogChange.categories"></label>
          <label>Node.js<input type="checkbox" value="Node.js" v-model="blogChange.categories"></label>
          <label>React.js<input type="checkbox" value="React.js" v-model="blogChange.categories"></label>
        </div>
        <div>
          <label>作者：</label>
          <select  v-model="blogChange.author">
            <option v-for="author in authors">{{author}}</option>
          </select>
        </div>
        <button class="curChange" @click.prevent="curChange">确定修改</button>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SingleBlog",
      data(){
          return {
            changed:false,
            blog:{},
            id:this.$route.params.id,
            blogChange:{},
            authors:["pen","filling","jack"],
          }
      },
      created() {
          // this.$http.get("http://jsonplaceholder.typicode.com/posts/" + this.id)
          //   .then(function (res) {
          //     //console.log(res);
          //     this.blog = res.body
          //   })
          const query = Bmob.Query('blogs');
          query.get(this.id).then(res => {
            //console.log(res)
            this.blog = res.blog
          }).catch(err => {
            console.log(err)
          })
      },
      methods:{
        destroy(){
          let ifDes = confirm("确定要删除该博客吗？");
          if (ifDes) {
            const query = Bmob.Query('blogs');
            query.destroy(this.id).then(res => {
              console.log(res);
              alert("删除成功");
              this.$router.push({path:"/"})
            }).catch(err => {
              console.log(err)
            })
          }
        },
        change(){
          this.changed = !this.changed;
          this.blogChange = this.blog;
        },
        curChange(){
          console.log(1);
          const query = Bmob.Query('blogs');
          query.get(this.id).then(res => {
            //console.log(res)
            res.set('blog',this.blogChange);
            res.save()
          }).catch(err => {
            console.log(err)
          });
          alert("修改成功");
          this.changed = !this.changed;
        }
      }
    }
</script>

<style scoped>
  #all{
    max-width: 960px;
    padding: 8px;
    margin: 10px auto;
    border-radius: 4px;
  }
  #single-blog{
    background-color: #eee;
  }
  label{
    margin-top: 10px;
    margin-bottom: 10px;
    display: inline-block;
  }
  input[type='text'],textarea{
    display: block;
    padding: 5px;
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
    margin-top: 100px;
    cursor: pointer;
  }
  .curChange{
    margin-top: 10px;
  }
</style>
