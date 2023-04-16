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
import Profile from "./Views/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  async function getUser() {
    return await fetch("/api/user/").then((res) => res.json());
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
      },
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
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
