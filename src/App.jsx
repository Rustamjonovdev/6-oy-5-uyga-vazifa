import TodoList from "./components/TodoList";
import Title from "./components/Title";
import { useFetch } from "./hooks/useFetch.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Create from "./pages/Create";

function App() {
  const {
    data: todos,
    error,
    isPending,
  } = useFetch("https://jsonplaceholder.typicode.com/todos");

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
