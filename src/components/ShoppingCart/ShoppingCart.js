import { Stack, FormControl, FilledInput, InputLabel } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { classes } from "../../theme";
import CartProduct from "../Header/CartProduct/CartProduct";

const ShoppingCart = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const cart = useSelector((state) => state.cart);

  console.log(cart);

  // const handleSubmit = () => console.log("Submitted");

  return (
    <Stack direction="row" sx={{ p: 3, justifyContent: "space-between" }}>
      <Stack
        sx={{
          p: 3,
          width: "44%",
          border: "2px solid",
          borderColor: "primary.main",
          borderRadius: "5px",
          alignSelf: "flex-start",
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
      <Stack
        sx={{
          p: 3,
          width: "44%",
          border: "2px solid",
          borderColor: "primary.main",
          borderRadius: "5px",
          alignSelf: "flex-start",
        }}
      >
        {cart
          ? cart.map((product) => (
              <CartProduct data={product} key={product.id} />
            ))
          : "Cart is empty"}
      </Stack>
    </Stack>
  );
};

export default ShoppingCart;
