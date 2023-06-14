import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const CustomLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  padding: "5px",
  margin: "0 10px",
  borderRadius: "3px",
  fontSize: "18px",
  fontFamily: "Roboto",
  textTransform: "capitalize",

  "&.active": {
    color: "#fff",
    textDecoration: "underline",
  },

  "&:hover": {
    color: "#fff",
    textDecoration: "underline",
    transition: ".2s",
  },
}));

export default CustomLink;
