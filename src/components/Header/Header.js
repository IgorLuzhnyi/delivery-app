import { Container, Stack, Divider } from "@mui/material";
import CustomLink from "../reusable_components/CustomLink";
import { rootPath } from "../../constants/constants";

const Header = () => {
  return (
    <Container>
      <Stack direction="row" sx={{ p: 3 }}>
        <CustomLink to={rootPath}>Shop</CustomLink>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ backgroundColor: "#fff" }}
        />
        <CustomLink to={`${rootPath}/shopping-cart`}>Shopping Cart</CustomLink>
      </Stack>
    </Container>
  );
};

export default Header;
