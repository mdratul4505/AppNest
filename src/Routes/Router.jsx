import { createBrowserRouter } from "react-router";
import Test from "../Components/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,

  },
  {
    path:'/data',
    Component:Test
  }
]);


export default router