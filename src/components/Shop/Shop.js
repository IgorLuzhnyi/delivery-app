import { v4 as uuidv4 } from "uuid";
import {
  Container,
  Grid,
  Stack,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import Product from "../Product/Product";
import { db } from "../../db/db";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../../redux/cart";

const Shop = () => {
  const [shopIndex, setShopIndex] = useState(0);
  const currentMenu = Object.keys(db[shopIndex].menu);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => setCategoryIndex(0), [shopIndex]);

  useEffect(() => console.log(cart), [cart]);

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
                  color: i === shopIndex ? "primary.main" : "#fff",
                  "&:hover": { color: "primary.main" },
                }}
                onClick={() => setShopIndex(i)}
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
            <Stack direction="row" justifyContent="space-between">
              <Tabs value={categoryIndex} sx={{ padding: "5px 10px" }}>
                {currentMenu.map((menuCategory, i) => (
                  <Tab
                    label={menuCategory}
                    onClick={() => setCategoryIndex(i)}
                    key={uuidv4()}
                    sx={{
                      ml: 2,
                      mr: 2,
                      color: "#fff",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  />
                ))}
              </Tabs>
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  "&:hover": {
                    transition: "0s",
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                }}
                onClick={() => dispatch(removeAll())}
              >
                clear all
              </Button>
            </Stack>
            <Grid
              container
              sx={{
                maxHeight: "83vh",
                overflowY: "auto",
                borderTop: "1vh solid",
                borderBottom: "2vh solid",
                borderColor: "tertiary.main",
                scrollbarWidth: "10px",
                scrollbarGutter: "stable both-edges",
                "::-webkit-scrollbar": {
                  backgroundColor: "#42454a",
                  width: "10px",
                  position: "absolute",
                  right: "0",
                },
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: "#e3e3e3",
                },
              }}
            >
              {db[shopIndex].menu[currentMenu[categoryIndex]].map((prod) => (
                <Grid
                  item
                  key={uuidv4()}
                  lg={6}
                  sx={{
                    mt: 2,
                    mb: 2,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Product data={prod} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Shop;
