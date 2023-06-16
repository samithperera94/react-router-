import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import ProductPage from "./pages/ProductPage";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "products/:productID",
        element: <ProductDetails />,
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
