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
import Product from "./Product/Product";
import { db } from "../../db/db";
import { useState, useEffect } from "react";

const Shop = () => {
  const [shopIndex, setShopIndex] = useState(0);
  const currentMenu = Object.keys(db[shopIndex].menu);
  const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => setCategoryIndex(0), [shopIndex]);

  return (
    <Container>
      <Grid container>
        <Grid
          item
          lg={3}
          md={12}
          sm={12}
          xs={12}
          sx={{
            p: 3,
            backgroundColor: "tertiary.main",
            borderRadius: 3,
            alignSelf: "flex-start",
            display: "flex",
            flexDirection: { lg: "column", md: "row", sm: "row", xs: "column" },
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Shops:
          </Typography>
          <Stack
            sx={{
              mt: { lg: 3, md: 0, sm: 0 },
              ml: { lg: 0, md: 3, sm: 3 },
              justifyContent: { md: "space-between" },
            }}
            direction={{ lg: "column", md: "row", sm: "row", xs: "column" }}
          >
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
        <Grid
          item
          lg={9}
          md={12}
          sx={{
            pl: { lg: 3, md: 0, sm: 0, xs: 0 },
            mt: { lg: 0, md: 3, sm: 3, xs: 3 },
          }}
        >
          <Container
            disableGutters
            sx={{
              backgroundColor: "tertiary.main",
              borderRadius: 3,
              pl: { lg: 2, md: 2, sm: 2, xs: 1 },
              pr: { lg: 2, md: 2, sm: 2, xs: 1 },
            }}
          >
            <Tabs
              orientation="horizontal"
              value={categoryIndex}
              sx={{ padding: "5px 10px" }}
            >
              {currentMenu.map((menuCategory, i) => (
                <Tab
                  label={menuCategory}
                  onClick={() => setCategoryIndex(i)}
                  key={uuidv4()}
                  sx={{
                    ml: { lg: 2, md: 2, sm: 0, xs: 0 },
                    mr: { lg: 2, md: 2, sm: 0, xs: 0 },
                    color: "#fff",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                />
              ))}
            </Tabs>

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
                  key={prod.id}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
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
