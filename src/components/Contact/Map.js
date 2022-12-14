import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  map: {
    width: "50%",
    height: "100% !important",
    order: "1",
    [theme.breakpoints.down(700)]: {
      width: "100%",
      order: "2",
    },
  },
  iFrame: {
    border: "0",
  },
}));

const Map = ({ height }) => {
  const classes = useStyles();

  return (
    <div className={classes.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11324.550955533508!2d20.4865414!3d44.7983815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6fa8b00afcfac19!2sVetmedika!5e0!3m2!1sen!2srs!4v1665820137064!5m2!1sen!2srs"
        className={classes.iFrame}
        width="100%"
        height={height}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="VETMEDIKA"
      ></iframe>
    </div>
  );
};

export default Map;
