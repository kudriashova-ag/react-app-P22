import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import TodoList from './components/todo/TodoList';
import User from './components/learn/User';
import ThemeProvider from './providers/ThemeProvider';
import I18nProvider from './providers/I18nProvider';
import Register from './pages/Register';

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
        path: "user",
        element: <User />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <I18nProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </I18nProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
