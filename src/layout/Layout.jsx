import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { PageWrapper, MainContent } from "./LayoutStyles";

function Layout() {
  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </PageWrapper>
  );
}

export default Layout;
