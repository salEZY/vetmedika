import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

import "./App.css";
import AllPages from "./components/AllPages/AllPages";
import Login from "./pages/Login/Login";
import AdminActions from "./pages/Admin/AdminActions";
import { HomeLayout } from "./routing/HomeLayout";
import { ProtectedLayout } from "./routing/ProtectedLayout";
import { AppContext } from "./util/app-context";
import { useAction } from "./util/action-hook";
import { useHeader } from "./util/header-hook";
import { useWidth } from "./util/width-hook";

const theme = createTheme();

function App() {
  const { action, loading } = useAction();
  const { burger, modal, headerHandler, linkHandler } = useHeader();
  const { width } = useWidth();

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <AppContext.Provider
          value={{
            loading: loading,
            action: action,
            burger: burger,
            modal: modal,
            width: width,
            headerHandler: headerHandler,
            linkHandler: linkHandler,
          }}
        >
          <div className="App">
            <Routes>
              <Route element={<HomeLayout />}>
                <Route path="" element={<AllPages />} />
                <Route path="/prijava" element={<Login />} />
              </Route>

              <Route path="/admin-panel" element={<ProtectedLayout />}>
                <Route path="akcije" element={<AdminActions />} />
              </Route>
            </Routes>
          </div>
        </AppContext.Provider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
