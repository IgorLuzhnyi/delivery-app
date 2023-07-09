import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const CustomLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: "#fff",
  padding: "5px",
  margin: "0 10px",
  borderRadius: "3px",
  fontSize: "18px",
  fontFamily: "Roboto",
  textTransform: "capitalize",

  "&.active": {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },

  "&:hover": {
    color: theme.palette.primary.main,
    textDecoration: "underline",
    transition: ".2s",
  },
}));

export default CustomLink;
