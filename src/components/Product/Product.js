import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../redux/cart";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const productCount = useSelector(
    (state) =>
      state.cart.find((product) => product.productName === data.productName)
        ?.count
  );

  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <Box sx={{ p: 1, position: "absolute", right: 1 }}>
        <Tooltip title="Add to cart" placement="top">
          <IconButton
            size="small"
            onClick={() => dispatch(addProduct(data.productName))}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove from cart" placement="top">
          <IconButton
            size="small"
            onClick={() => dispatch(removeProduct(data.productName))}
          >
            <RemoveIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <CardMedia
        component="img"
        height="194"
        image={data.img}
        alt={data.name}
      />
      <Typography
        variant="body"
        sx={{
          mt: 1,
          fontSize: "20px",
          position: "absolute",
          bottom: "10px",
          right: "15px",
          color: productCount ? "primary.main" : "inherit",
        }}
      >
        Count: {productCount ? productCount : 0}
      </Typography>
      <CardContent>
        <Typography variant="h4">{data.productName}</Typography>
        <Typography variant="body">{data.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
