import { createBrowserRouter } from "react-router";
import App from "./App";
import TodoList from "./components/todo/TodoList";
import Register from "./pages/Register";
import Users from "./pages/Users";
import { getUsers } from "./loaders/usersLoaders";

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
            }
        ]
    },

])

export default router