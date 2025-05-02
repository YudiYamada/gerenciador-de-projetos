import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
