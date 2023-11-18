import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styled from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

function AppLayout() {
  const location = useLocation();
  const pageLocation = location.pathname.split("/")[1];

  return (
    <StyledAppLayout pageLocation={pageLocation}>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;

/////////////////
// Styles
/////////////////

const StyledAppLayout = styled.div.withConfig({
  shouldForwardProp: (prop) => "pageLocation" !== prop,
})`
  background-image: ${(props) =>
    `url("/images/${props.pageLocation}/background-${props.pageLocation}-mobile.jpg")`};

  @media screen and (min-width: 768px) {
    background-image: ${(props) =>
      `url("/images/${props.pageLocation}/background-${props.pageLocation}-tablet.jpg")`};
  }

  @media screen and (min-width: 1024px) {
    background-image: ${(props) =>
      `url("/images/${props.pageLocation}/background-${props.pageLocation}-desktop.jpg")`};
  }

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  position: relative;
`;

const MainContent = styled.main`
  margin-top: 1rem;
  max-width: ${breakpoints.md};
  margin-inline: auto;
  margin-bottom: 3rem;

  @media screen and (min-width: ${breakpoints.sm}) {
    margin-top: 3rem;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 4rem;
  }
`;
