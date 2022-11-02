import React from "react";
import Container from "@mui/material/Container";
import Title from "../FormsUI/Title/Title";
import { makeStyles } from "@mui/styles";
import CarouselComponent from "../Carousel/Carousel";
import { Link } from "react-scroll";

const useStyles = makeStyles({
  container: {
    minHeight: "85vh",
    width: "100%",
  },
  carouselDiv: {
    width: "70%",
    margin: "3rem auto",
    // padding: 20,
  },
  contactButton: {
    fontSize: "2rem",
    fontWeight: "bolder",
    margin: "2rem auto",
    padding: "10px 100px",
    borderRadius: "5px 25px 15px 50px",
    transition: ".1s all ease",
    background: "#50c878",
    color: "white",
    cursor: "pointer",
    outline: "0",
    border: "4px solid #50c878",
    "&:hover": {
      padding: "20px 150px",
    },
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Title title="Dobrodošli" cssStyle={{ margin: "2rem auto" }} />
      <div className={classes.carouselDiv}>
        <CarouselComponent />
      </div>
      <div style={{ fontSize: 20, margin: "3rem auto" }}>
        Naša ambulanta postoji od 2002. godine i zahvaljujući vašem poverenju,
        još uvek smo tu, u službi zdravlja vaših ljubimaca. Naše poslovanje se
        zasniva isključivo na temeljima savremene Veterinarske medicine, tj. uz
        kompletnu kliničku dijagnostiku, nalazimo najbolje rešenje za terapiju
        vašeg ljubimca, što i vas kao vlasnika oslobadja od nepotrebnih
        troškova. Ovakav pristup je pokazao odlicne rezultate i mi danas imamo
        preko hiljadu zadovoljnih vlasnika i pacijenata uvedenih u našu bazu
        podataka.
      </div>

      <Link to="contact" spy={true} smooth={true} duration={300}>
        <button className={classes.contactButton}>Kontaktirajte nas</button>
      </Link>
    </Container>
  );
};

export default Home;
