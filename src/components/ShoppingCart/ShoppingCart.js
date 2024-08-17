import {
  Stack,
  FormControl,
  FilledInput,
  InputLabel,
  Typography,
  Button,
  Box,
} from "@mui/material";
import CartProduct from "./CartProduct/CartProduct";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { classes } from "../../theme";
import { removeAll } from "../../redux/cart";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("red");
  const [messageState, setMessageState] = useState("none");

  const clearInputs = () => {
    setUserName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  const showOrderMessage = () => {
    setMessageState("block");
    setTimeout(() => {
      setMessageState("none");
    }, 1800);
  };

  const handleSubmit = () => {
    if (cart.length > 0) {
      setMessageColor("green");
      setMessage("Your order has been received");
      showOrderMessage();
      clearInputs();
      dispatch(removeAll());
    } else {
      setMessageColor("red");
      setMessage("You did not order anything yet");
      showOrderMessage();
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Typography
        sx={{
          position: "absolute",
          left: "50%",
          top: "40%",
          transform: "translateX(-50%) translateY(-50%)",
          display: messageState,
          opacity: ".8",
          padding: "10px 25px",
          borderRadius: "3px",
          backgroundColor: messageColor,
          color: "#fff",
          zIndex: "9999",
        }}
      >
        {message}
      </Typography>
      <Stack
        direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        sx={{ p: 3, justifyContent: "space-between" }}
      >
        <Stack
          sx={{
            p: 3,
            width: { lg: "44%", md: "44%", sm: "100%", xs: "100%" },
            boxSizing: {
              lg: "content-box",
              md: "content-box",
              sm: "border-box",
              xs: "border-box",
            },
            height: { lg: "60vh", md: "60vh", sm: "100%", xs: "100%" },
            border: "2px solid",
            borderColor: "primary.main",
            borderRadius: "5px",
            alignSelf: "flex-start",
            justifyContent: "center",
          }}
        >
          <FormControl sx={classes.basicInputsClass}>
            <InputLabel
              htmlFor="name"
              variant="outlined"
              sx={classes.inputLabelClass}
            >
              Name
            </InputLabel>
            <FilledInput
              sx={classes.filledInputClass}
              id="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormControl>
          <FormControl sx={classes.basicInputsClass}>
            <InputLabel htmlFor="email" sx={classes.inputLabelClass}>
              Email
            </InputLabel>
            <FilledInput
              sx={classes.filledInputClass}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl sx={classes.basicInputsClass}>
            <InputLabel htmlFor="phone" sx={classes.inputLabelClass}>
              Phone
            </InputLabel>
            <FilledInput
              sx={classes.filledInputClass}
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl sx={classes.basicInputsClass}>
            <InputLabel htmlFor="address" sx={classes.inputLabelClass}>
              Address
            </InputLabel>
            <FilledInput
              sx={classes.filledInputClass}
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
        </Stack>
        <Box
          sx={{
            mt: { lg: 0, md: 0, sm: 3, xs: 3 },
            p: 3,
            width: { lg: "44%", md: "44%", sm: "100%", xs: "100%" },
            boxSizing: {
              lg: "content-box",
              md: "content-box",
              sm: "border-box",
              xs: "border-box",
            },
            border: "2px solid",
            borderColor: "primary.main",
            borderRadius: "5px",
            alignSelf: "flex-start",
            height: "60vh",
          }}
        >
          <Stack
            sx={{
              height: "100%",
              overflowY: "auto",
              scrollbarWidth: "10px",
              scrollbarGutter: "stable both-edges",
              "::-webkit-scrollbar": {
                backgroundColor: "#42454a",
                width: "10px",
                position: "absolute",
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#e3e3e3",
              },
            }}
          >
            {cart[0] ? (
              cart.map((product, i) => (
                <CartProduct
                  data={{
                    product,
                    isLastProduct: cart.length - 1 === i ? true : false,
                  }}
                  key={product.id}
                />
              ))
            ) : (
              <Typography
                variant="h5"
                sx={{ color: "#fff", textAlign: "center" }}
              >
                No orders yet...
              </Typography>
            )}
          </Stack>
        </Box>
      </Stack>
      <Stack
        direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        justifyContent="end"
        sx={{ p: 3 }}
      >
        <Button
          variant="outlined"
          sx={{ mr: { lg: 3, md: 3, sm: 3, xs: 0 } }}
          onClick={() => dispatch(removeAll())}
        >
          clear all
        </Button>
        <Typography sx={{ display: "flex", alignItems: "center", p: 1 }}>
          Total: {cart.reduce((acc, i) => acc + i.count * i.price, 0)} UAH
        </Typography>
        <Button
          variant="contained"
          sx={{ padding: "10px 30px", ml: { lg: 3, md: 3, sm: 3, xs: 0 } }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default ShoppingCart;
