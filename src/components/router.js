import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./Aboutus";
import App from "../App";
import Greetings from "./Greetings";
import Crud from "./Crud";
import ListPosts from "./blog/Listpost";
import CreatePost from "./blog/Createpost";
import ViewPost from "./blog/Viewpost";
import EditPost from "./blog/Editpost";
import Register from "./auth/register";
import Login from "./auth/login";


const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'greeting/:name', element: <Greetings/>},
    { path: 'crud', element: <Crud/>},
    { path: 'blog/posts', element: <ListPosts/>},
    { path : 'blog/posts/create' , element : <CreatePost/> },
    { path: 'blog/posts/:postId', element: <ViewPost/>},
    { path : '/blog/posts/:postId/edit', element: <EditPost/>},
    { path: 'register', element:<Register/>},
    { path: 'login', element:<Login/>},

]);

export default router;