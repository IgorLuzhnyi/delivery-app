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

const Product = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <Box sx={{ p: 1, position: "absolute", right: 1 }}>
        <Tooltip title="Add to cart">
          <IconButton size="small">
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove from cart">
          <IconButton size="small">
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
        }}
      >
        Count: {2}
      </Typography>
      <CardContent>
        <Typography variant="h4">{data.mealName}</Typography>
        <Typography variant="body">{data.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
