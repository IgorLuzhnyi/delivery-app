import {
  Stack,
  CardMedia,
  Box,
  Typography,
  IconButton,
  Input,
  Tooltip,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addByNumber, removeProduct } from "../../../redux/cart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { MAX_PRODUCT_COUNT } from "../../../constants/constants";

const CartProduct = ({ data }) => {
  const { productName, img, count, price, id } = data;
  const [showWarning, setShowWarning] = useState(false);
  const [cartProductCount, setCartProductCount] = useState(count);

  const dispatch = useDispatch();

  const warningHandler = () => {
    setShowWarning(true);
    setTimeout(() => {
      setShowWarning(false);
    }, 1600);
  };

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
          <Tooltip
            title={`Maximum count is ${MAX_PRODUCT_COUNT}`}
            placement="bottom"
            open={showWarning}
          >
            <Input
              inputProps={{
                style: { textAlign: "center" },
              }}
              value={cartProductCount}
              onChange={(event) => {
                if (!isNaN(Number(event.target.value))) {
                  if (Number(event.target.value) > MAX_PRODUCT_COUNT) {
                    warningHandler();
                  } else setCartProductCount(Number(event.target.value));
                }
              }}
              sx={{
                backgroundColor: "inputBgColor.main",
                width: "60px",
                "&:focus-within": {
                  backgroundColor: "inputBgColor.focused",
                },
              }}
            />
          </Tooltip>
          <IconButton
            onClick={() =>
              cartProductCount === MAX_PRODUCT_COUNT
                ? warningHandler()
                : dispatch(addByNumber({ count: cartProductCount + 1, id }))
            }
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
