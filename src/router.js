import { createBrowserRouter } from "react-router";
import App from "./App";
import TodoList from "./components/todo/TodoList";
import Register from "./pages/Register";
import Users from "./pages/Users";
import { getUser, getUsers } from "./loaders/usersLoaders";
import User from "./pages/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <TodoList />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "users",
                element: <Users />,
                loader: getUsers
            },
            {
                path: "users/:login",
                loader: getUser,
                element: <User />
            }
        ]
    },

])

export default router