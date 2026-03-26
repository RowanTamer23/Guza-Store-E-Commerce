import React, { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: mode === "dark" ? "#90caf9" : "#1976d2" },
          background: {
            default: mode === "dark" ? "#0a1929" : "#f4f6f8",
            paper: mode === "dark" ? "#132f4c" : "#ffffff",
          },
        },
        shape: { borderRadius: 12 },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                backdropFilter: "blur(10px)",
                backgroundColor:
                  mode === "dark"
                    ? "rgba(19, 47, 76, 0.4)"
                    : "rgba(255, 255, 255, 0.7)",
                border: `1px solid ${mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
