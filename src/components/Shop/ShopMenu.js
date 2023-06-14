import { Grid } from "@mui/material";
import Product from "../Product/Product";
import { theme } from "../../theme";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../db/db";
import { useParams } from "react-router-dom";

const ShopMenu = ({ shopIndex }) => {
  const currentMenu = Object.keys(db[shopIndex].menu);

  const { category } = useParams();

  return (
    <Grid
      container
      sx={{
        maxHeight: "80vh",
        overflowY: "auto",
        borderTop: `1vh solid ${theme.palette.tertiary.main}`,
        borderBottom: `2vh solid ${theme.palette.tertiary.main}`,
        scrollbarWidth: "10px",
        scrollbarGutter: "stable both-edges",

        "::-webkit-scrollbar": {
          backgroundColor: "#e3e3e3",
          width: "10px",
          position: "absolute",
          right: "0",
        },

        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#42454a",
        },
      }}
    >
      {db[shopIndex].menu[category ? category : currentMenu[0]].map((prod) => (
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
  );
};

export default ShopMenu;
