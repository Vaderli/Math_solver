import { Routes, Route, useNavigate, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import StartPage from "./pages/StartPage";
import TestPage from "./pages/TestPage";
import SettingsPage from "./pages/SettingsPage";
import './App.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={null}>
        <Route path="/start" element={<StartPage/>}/>
        <Route path="/game/:userId" element={<TestPage/>}/>
        <Route path="/settings/:userId" element={<SettingsPage/>}/>
      </Route>
    )
  )

  return(
    <RouterProvider router={router}/>
  );
}


export default App;
