import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme";
import AppRoutes from "./routes/AppRoutes";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <AppRoutes />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
