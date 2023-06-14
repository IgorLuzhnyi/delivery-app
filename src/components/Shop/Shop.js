import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {
  Container,
  Grid,
  Stack,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import CustomLink from "../reusable components/CustomLink";
import { db } from "../../db/db";
import { theme } from "../../theme";
import ShopMenu from "./ShopMenu";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [shopIndex, setShopIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <Container>
      <Grid container>
        <Grid
          item
          lg={3}
          sx={{
            p: 3,
            backgroundColor: "tertiary.main",
            borderRadius: 3,
            alignSelf: "flex-start",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Shops:
          </Typography>
          <Stack sx={{ mt: 3 }}>
            {db.map((brand, i) => (
              <Button
                key={uuidv4()}
                sx={{
                  color: i === shopIndex ? theme.palette.primary.main : "#fff",
                  "&:hover": { color: "primary.main" },
                }}
                onClick={() => {
                  setShopIndex(i);
                  navigate("/shop");
                }}
              >
                {brand.restaurantName}
              </Button>
            ))}
          </Stack>
        </Grid>
        <Grid item lg={9} sx={{ pl: 3 }}>
          <Container
            sx={{
              backgroundColor: "tertiary.main",
              borderRadius: 3,
            }}
          >
            <Stack
              direction="row"
              divider={
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ backgroundColor: "#fff" }}
                />
              }
              sx={{ padding: "10px 20px" }}
            >
              {Object.keys(db[shopIndex].menu).map((category, i) => (
                <CustomLink to={`shop/${category}`} key={uuidv4()}>
                  {category}
                </CustomLink>
              ))}
            </Stack>
            <Divider
              variant="middle"
              flexItem
              sx={{ backgroundColor: "#fff" }}
            />
            <ShopMenu shopIndex={shopIndex} />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Shop;
