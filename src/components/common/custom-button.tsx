import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#FFFFFF",
    borderRadius: 5,
    height: 32,
    fontSize: "16px",
    fontFamily: "Ubuntu, sans-serif",
    fontWeight: 300,
    border: "none",
    minWidth: 150,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  label: {
    textTransform: "none",
  },
}));

export default function CustomButton(props: any) {
  const { text, size, color, variant, onClick, type, ...other } = props;
  const classes = useStyles();

  return (
    <MuiButton
      type={type}
      variant={variant || "contained"}
      size={size || "large"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
}
