import React from "react";
import Container from "@mui/material/Container";
import Title from "../FormsUI/Title/Title";
import { makeStyles } from "@mui/styles";
import CarouselComponent from "../Carousel/Carousel";
import { Link } from "react-scroll";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  container: {
    minHeight: "85vh",
    width: "80%",
  },
  carouselDiv: {
    width: "70%",
    margin: "auto",
    // padding: 20,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Title title="Dobrodošli" />
      <div className={classes.carouselDiv}>
        <CarouselComponent />
      </div>
      <div style={{ fontSize: 20, margin: 20 }}>
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
        <Button variant="contained" style={{ backgroundColor: "#50c878" }}>
          Kontaktirajte nas
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
