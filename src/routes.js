import ShowBlogs from "./components/ShowBlogs";
import AddBlog from "./components/AddBlog";
import SingleBlog from "./components/SingleBlog";
import index from "./components/index";

const routes = [
  {path:"/",component:index},
  {path:"/add",component:AddBlog},
  {path:"/blog/:id",component:SingleBlog},
]

export default routes;


