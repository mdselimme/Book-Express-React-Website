import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import PageToRead from "./components/PageToRead/PageToRead.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import Home from "./components/Home/Home.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import LogIn from "./components/AuthenTication/LogIn/LogIn.jsx";
import SignIn from "./components/AuthenTication/SignIn/SignIn.jsx";
import BookDetails from "./components/Home/Books/Book/BookDetails/BookDetails.jsx";
import AuthProvider from "./components/Shared/AuthProvider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagetoread",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/bookdetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/books.json"),
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
