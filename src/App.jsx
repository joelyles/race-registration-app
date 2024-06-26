import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Submission from "./screens/Submission";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/submission" element={<Submission />}/>
  </Route>
));

const App = () => {
  return <RouterProvider router={router} />
};

export default App