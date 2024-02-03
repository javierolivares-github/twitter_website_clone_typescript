import React from "react";
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import './index.css';
import Home from './screens/Home';
import Explore from './screens/Explore';
import Notification from './screens/Notification';
import Bookmarks from './screens/Bookmarks';
import Lists from './screens/Lists';
import Profile from './screens/Profile';
import Navbar from './components/patterns/navbar/Navbar';
import NewsSidebar from './components/patterns/newsSidebar/NewsSidebar';
import PageWrapper from './components/atoms/Wrappers/PageWrapper';
import PageContainer from './components/atoms/Wrappers/PageContainer';

const Layout = () => {
  return (
    <>
      {/* Navbar */}
      <div data-testid="navbar-container" className={`w-[7.5rem] xl:w-[15rem] hidden md:block relative`}>
        <Navbar />
      </div>
        
      {/* Main */}
      <div data-testid="main-container" className={`w-full flex flex-col static flex-grow`}>
        <Outlet />
      </div>

      {/* Sidebar */}
      <div data-testid="sidebar-container" className={`w-[25rem] hidden xl:block static`}>
        <NewsSidebar />
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/explore",
        element: <Explore/>,
      },
      {
        path: "/notification",
        element: <Notification/>,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks/>,
      },
      {
        path: "/lists",
        element: <Lists/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
    ]
  }
])

export default function App() {
  return (
    <PageWrapper>
      <PageContainer>
        <RouterProvider router={router} />
      </PageContainer>
    </PageWrapper>
  )
}
