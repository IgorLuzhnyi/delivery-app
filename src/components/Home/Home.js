import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <Container
      disableGutters
      sx={{
        height: { lg: "100vh" },
        pb: { lg: 0, md: 2, sm: 2, xs: 2 },
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
