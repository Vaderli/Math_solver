import { Routes, Route, Navigate, useNavigate, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import StartPage from "./pages/StartPage/StartPage";
import TestPage from "./pages/TestPage/TestPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import './App.css';
import Header from "./components/Layout/Header";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="/start" replace />} />


        <Route path="/start" element={<StartPage/>}/>
      <Route element={<Header />}>
        <Route path="/game/:userId" element={<TestPage/>}/>
        <Route path="/settings/:userId" element={<SettingsPage/>}/>
      </Route>
      </>
    )
  )

  return(
    <RouterProvider router={router}/>
  );
}


export default App;
