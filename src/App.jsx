import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
} from "react-router-dom";
import Welcome from "./Views/Welcome";
import Login from "./Views/Login";
import Register from "./Views/Reigster";
import Home from "./Views/Home";
import "./SCSS/main.scss";

function App() {
  async function getUser() {
    return fetch("user/");
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: async () => {
        const user = await getUser();
        if (!user.isLogin) {
          return redirect("/home");
        }
        return user;
      },
    },
    {
      path: "/home",
      element: <Welcome />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
