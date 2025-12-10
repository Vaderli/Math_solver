import { Routes, Route, Navigate, useNavigate, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import StartPage from "./pages/StartPage/StartPage";
import TestPage from "./pages/TestPage/TestPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import './App.css';
import Header from "./components/Layout/Header";
import ResultTable from "./pages/ResultTable/ResultTable";

import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="/start" replace />} />


        <Route path="/start" element={<StartPage/>}/>
      <Route element={<Header />}>
        <Route path="/game/:userId" element={<TestPage/>}/>
        <Route path="/settings/:userId" element={<SettingsPage/>}/>
        <Route path="/results/:userId" element={<ResultTable />} />
      </Route>
      </>
    )
  )

  return(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}


export default App;
