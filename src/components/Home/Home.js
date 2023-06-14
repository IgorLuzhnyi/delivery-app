import { Container } from "@mui/material";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";

const Home = () => {
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
      <Shop />
    </Container>
  );
};

export default Home;
