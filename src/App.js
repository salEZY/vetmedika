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

const theme = createTheme();

function App() {
  const { action } = useAction();
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <AppContext.Provider value={{ action: action }}>
          <div className="App">
            <Routes>
              <Route element={<HomeLayout />}>
                <Route path="/" element={<AllPages />} />
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
