import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { HomeLayout } from "./routing/HomeLayout";
import { ProtectedLayout } from "./routing/ProtectedLayout";
import { AppContext } from "./util/app-context";
import { useAction } from "./util/action-hook";
import { useHeader } from "./util/header-hook";
import { useWidth } from "./util/width-hook";
import "./App.css";
// import AllPages from "./components/AllPages/AllPages";
// import Login from "./pages/Login/Login";
// import AdminActions from "./pages/Admin/AdminActions";
const AllPages = React.lazy(() => import("./components/AllPages/AllPages"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const AdminActions = React.lazy(() => import("./pages/Admin/AdminActions"));

const theme = createTheme();

function App() {
  const { action, loading } = useAction();
  const {
    burger,
    barTop,
    barBottom,
    modal,
    burgerDiv,
    headerHandler,
    linkHandler,
  } = useHeader();
  const { width } = useWidth();

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <AppContext.Provider
          value={{
            loading: loading,
            action: action,
            burger: burger,
            barTop: barTop,
            barBottom: barBottom,
            burgerDiv: burgerDiv,
            modal: modal,
            width: width,
            headerHandler: headerHandler,
            linkHandler: linkHandler,
          }}
        >
          <React.Suspense fallback={<div>...Loading</div>}>
            <div className='App'>
              <Routes>
                <Route element={<HomeLayout />}>
                  <Route path='' element={<AllPages />} />
                  <Route path='/prijava' element={<Login />} />
                  <Route path='*' element={<Navigate to='/' replace />} />
                </Route>

                <Route path='/admin-panel' element={<ProtectedLayout />}>
                  <Route path='akcije' element={<AdminActions />} />
                </Route>
              </Routes>
            </div>
          </React.Suspense>
        </AppContext.Provider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
