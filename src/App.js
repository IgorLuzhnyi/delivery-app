import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import ShopMenu from "./components/Shop/ShopMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "shop",
        element: <Home />,
        index: true,
      },
      {
        path: "shop/:category",
        element: <ShopMenu />,
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
