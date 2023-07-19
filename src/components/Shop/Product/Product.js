import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../../redux/cart";
import { MAX_PRODUCT_COUNT } from "../../../constants/constants";

const Product = ({ data }) => {
  const { productName, img, price, description } = data;

  const dispatch = useDispatch();
  const productCount = useSelector(
    (state) =>
      state.cart.find((product) => product.productName === data.productName)
        ?.count
  );

  const reachedMaxCount = productCount === MAX_PRODUCT_COUNT;

  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <Box sx={{ p: 1, position: "absolute", right: 1 }}>
        <Tooltip
          title={
            reachedMaxCount
              ? `Maximum count of ${MAX_PRODUCT_COUNT} is reached`
              : "Add to cart"
          }
          placement="top"
        >
          <IconButton
            size="small"
            onClick={() => reachedMaxCount || dispatch(addProduct(data))}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove from cart" placement="top">
          <IconButton
            size="small"
            onClick={() => dispatch(removeProduct(data))}
          >
            <RemoveIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <CardMedia component="img" height="194" image={img} alt={productName} />
      <CardContent sx={{ pt: 0, pb: 0 }}>
        <Typography variant="h4">{productName}</Typography>
        <Typography variant="body">{description}</Typography>
      </CardContent>
      <Stack direction="row" sx={{ p: 2, justifyContent: "space-between" }}>
        <Typography
          variant="body"
          sx={{
            fontSize: "20px",
          }}
        >
          Price: {price} UAH
        </Typography>
        <Typography
          variant="body"
          sx={{
            fontSize: "20px",
            color: productCount ? "primary.main" : "inherit",
          }}
        >
          Count: {productCount ? productCount : 0}
        </Typography>
      </Stack>
    </Card>
  );
};

export default Product;
