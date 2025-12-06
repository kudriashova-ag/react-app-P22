import { createBrowserRouter } from "react-router";
import App from "./App";
import TodoList from "./components/todo/TodoList";
import Register from "./pages/Register";
import Users from "./pages/Users";
import { getSearchUsers, getUser, getUsers } from "./loaders/usersLoaders";
import User from "./pages/User";
import Search from "./pages/Search";

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
            },
            {
                path: 'search',
                loader: getSearchUsers,
                element: <Search />
            }
        ]
    },

])

export default router