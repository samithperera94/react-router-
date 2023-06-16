import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
    ],
  },
  // {
  //   path: "/aidim",
  //   element: ,
  //   children: [

  //   ],
  // },
  // {
  //   path:'/',
  //   element:<HomePage/>
  // },
  // {
  //   path:'/products',
  //   element:<ProductPage/>
  // }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
