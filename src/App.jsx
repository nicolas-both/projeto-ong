import React from 'react'

// import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/home';
import Pets from './components/pages/pets'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pets",
    element: <Pets />
  },
]);

function App() {

  return (
    <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </>
  )
}

export default App
