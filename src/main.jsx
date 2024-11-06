import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root/Root.jsx'
import PageToRead from './components/PageToRead/PageToRead.jsx'
import ListedBooks from './components/ListedBooks/ListedBooks.jsx'
import Home from './components/Home/Home.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/listedbooks",
        element:<ListedBooks></ListedBooks>,
      },
      {
        path:"/pagetoread",
        element: <PageToRead></PageToRead>,
      }
    ] 
  },
  {
    path: "/login",
  },
  {
    path: "/signin",
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
