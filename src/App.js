import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { rootPath } from "./constants/constants";

const router = createBrowserRouter([
  {
    path: rootPath,
    element: <Home />,
    children: [
      {
        path: rootPath,
        element: <Shop />,
      },
      {
        path: `${rootPath}/shopping-cart`,
        element: <ShoppingCart />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
