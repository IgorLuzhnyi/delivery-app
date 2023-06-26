import { Stack, FormControl, FilledInput, InputLabel } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const cart = useSelector((state) => state.cart);

  console.log(cart);

  const formControlClass = {
    backgroundColor: "inputBgColor",
    "&:focus-within": {
      backgroundColor: "#fff",
    },
    m: 3,
  };

  const inputLabelClass = {
    "&.MuiInputLabel-root": {
      marginTop: "-8px",
    },
    "&.MuiInputLabel-shrink": {
      transform: "translate(0, -20px) scale(0.8)",
    },
  };

  const filledInputClass = {
    "& .MuiFilledInput-input": {
      paddingTop: "10px",
    },
  };

  // const handleSubmit = () => console.log("Submitted");

  return (
    <Stack direction="row" sx={{ p: 3, justifyContent: "space-between" }}>
      <Stack
        sx={{
          p: 3,
          border: "2px solid",
          borderColor: "primary.main",
          borderRadius: "5px",
        }}
      >
        <FormControl sx={formControlClass}>
          <InputLabel htmlFor="name" variant="outlined" sx={inputLabelClass}>
            Name
          </InputLabel>
          <FilledInput
            sx={filledInputClass}
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormControl>
        <FormControl sx={formControlClass}>
          <InputLabel htmlFor="email" sx={inputLabelClass}>
            Email
          </InputLabel>
          <FilledInput
            sx={filledInputClass}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl sx={formControlClass}>
          <InputLabel htmlFor="phone" sx={inputLabelClass}>
            Phone
          </InputLabel>
          <FilledInput
            sx={filledInputClass}
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>
        <FormControl sx={formControlClass}>
          <InputLabel htmlFor="address" sx={inputLabelClass}>
            Address
          </InputLabel>
          <FilledInput
            sx={filledInputClass}
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormControl>
      </Stack>
      <Stack sx={{ p: 2 }}>{}</Stack>
    </Stack>
  );
};

export default ShoppingCart;
