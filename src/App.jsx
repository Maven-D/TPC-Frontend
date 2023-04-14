import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Welcome from "./Views/Welcome";
import Login from "./Views/Login";
import Register from "./Views/Reigster";
import Home from "./Views/Home";
import "./SCSS/main.scss";

function App() {
  
  async function getUser() {
    return await fetch('/api/user/').then((res) => res.json());
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: async () => {
        return getUser().then((data) => {
          if (data.user) {
            return <Home user={data.user} />;
          } else {
            return redirect("/welcome");
          }
        });
      }
    },
    {
      path: "/welcome",
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
