import ShowBlogs from "./components/ShowBlogs";
import AddBlog from "./components/AddBlog";
import SingleBlog from "./components/SingleBlog";

const routes = [
  {path:"/",component:ShowBlogs},
  {path:"/add",component:AddBlog},
  {path:"/blog/:id",component:SingleBlog},
]

export default routes;


