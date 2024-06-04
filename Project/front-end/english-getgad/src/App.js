import { RouterProvider, createBrowserRouter } from "react-router-dom";


import RootLayout from './pages/Root';
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import AdminPage from "./pages/Admin";
import Authentication, { action as authAction } from "./pages/Authentication";
import { action as logoutAction } from "./components/Authenticator/Logout";
import { checkAuthLoader, tokenLoader } from "./util/auth";
import BlogPage from "./pages/Blog";
import BlogRoot from "./pages/BlogRoot";
import BlogDetails from "../src/components/Blog/BlogDetail/BlogDetail";
import { loader as loadDetail } from "./components/Blog/BlogDetail/BlogDetail"
import Profile from "./components/Blog/Profile/Profile";
import CreatePost from "./components/Blog/Profile/CreatePost/CreatePost";
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: 'root',
    loader: tokenLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'checking',
        element: <HomePage />
      },
      {
        path: 'blog',
        element: <BlogRoot />,
        loader: checkAuthLoader,
        children: [
          {
            index: true,
            element: <BlogPage />,
          },
          {
            path: ':postID',
            id: 'page-detail',
            loader: loadDetail,
            element: <BlogDetails />,
          },
          {
            path: 'home',
            element: <BlogPage />,
          },
          {
            path: 'page',
            children: [
              {
                index: true,
                element: <BlogPage />,
              },
              {
                path: ':page',
                element: <BlogPage />,
              }
            ]
          }, {
            path: 'profile',
            children: [
              {
                index: true,
                element: <Profile />,

              },
              {
                path: 'create',
                element: <CreatePost />,
              }
            ]
          },
          {
            path: 'category',
            children: [
              {
                path: ':category',
                element: <BlogPage />,
              }
            ]
          }
        ]
      }, {
        path: 'premium',
        element: <HomePage />
      },
      {
        path: 'auth',
        element: <Authentication />,
        action: authAction
      },
      {
        path: 'admin',
        element: <AdminPage />
      },
      {
        path: 'logout',
        action: logoutAction
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
