import {
  Stack,
  CardMedia,
  Box,
  Typography,
  IconButton,
  Input,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addByNumber, removeProduct } from "../../../redux/cart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartProduct = ({ data }) => {
  const { productName, img, count, price, id } = data;
  const [cartProductCount, setCartProductCount] = useState(count);

  const dispatch = useDispatch();

  useEffect(() => {
    setCartProductCount(count);
  }, [count]);

  useEffect(() => {
    dispatch(addByNumber({ count: cartProductCount, id }));
  }, [cartProductCount, id, dispatch]);

  const iconStyles = {
    color: "#fff",
    "&:hover": { color: "primary.main" },
  };

  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "tertiary.main",
        mb: 3,
        borderRadius: "5px",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt={productName}
        sx={{
          borderRadius: "5px 0 0 5px",
          maxWidth: "280px",
        }}
      />
      <Box
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {productName}
        </Typography>
        <Stack direction="row" sx={{ mt: 2, mb: 2, pl: 2, pr: 2 }}>
          <IconButton onClick={() => dispatch(removeProduct(data))}>
            <RemoveIcon sx={iconStyles} />
          </IconButton>
          <Input
            inputProps={{
              style: { textAlign: "center" },
            }}
            value={cartProductCount}
            onChange={(event) =>
              !isNaN(Number(event.target.value)) &&
              setCartProductCount(Number(event.target.value))
            }
            sx={{
              backgroundColor: "inputBgColor.main",
              width: "60px",
              "&:focus-within": {
                backgroundColor: "inputBgColor.focused",
              },
            }}
          />
          <IconButton
            onClick={() => {
              console.log(cartProductCount);
              dispatch(addByNumber({ count: cartProductCount + 1, id }));
            }}
          >
            <AddIcon sx={iconStyles} />
          </IconButton>
        </Stack>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Price: {price * count} UAH
        </Typography>
      </Box>
    </Stack>
  );
};

export default CartProduct;
