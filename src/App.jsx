import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Index from "./index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Index />}></Route>
    </Route>
  )
);

const App = ({ routes }) => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
