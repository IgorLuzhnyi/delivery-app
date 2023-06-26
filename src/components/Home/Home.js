import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/shop");
  }, [location, navigate]);

  return (
    <Container
      disableGutters
      sx={{
        height: "100vh",
        color: "#fff",
        backgroundColor: "secondary.main",
      }}
    >
      <Header />
      <Outlet />
    </Container>
  );
};

export default Home;
