import React from "react";
import Title from "../FormsUI/Title/Title";
import { makeStyles } from "@mui/styles";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CarouselComponent from "../Carousel/Carousel";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "85vh",
    width: "100%",
    padding: "1rem",
  },
  contentHolder: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down(700)]: {
      flexDirection: "column",
    },
  },
  carouselDiv: {
    width: "50%",
    margin: "1rem auto",
    [theme.breakpoints.down(700)]: {
      display: "none",
    },
  },
  textDiv: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    [theme.breakpoints.down(700)]: {
      width: "100%",
    },
  },
  contactButton: {
    width: "90%",
    fontSize: "2rem",
    fontWeight: "bolder",
    margin: "1rem auto",
    padding: "10px 100px",
    borderRadius: "5px",
    transition: ".2s all ease",
    background: "white",
    color: "#50c878",
    cursor: "pointer",
    outline: "0",
    border: "4px solid #50c878",
    "&:hover": {
      background: "#50c878",
      color: "white",
    },
    [theme.breakpoints.down(700)]: {
      width: "80%",
      fontSize: "1.2rem",
      padding: "10px",
    },
  },
  icons: {
    fontSize: "5rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  infoDiv: {
    padding: "2rem",
    fontSize: 20,
    textAlign: "left",
    margin: "2rem auto",
    [theme.breakpoints.down(700)]: {
      fontSize: 15,
      margin: "10px auto",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Title title="Dobrodošli" cssStyle={{ margin: "2rem auto" }} />
      <div className={classes.contentHolder}>
        <div className={classes.carouselDiv}>
          <CarouselComponent />
        </div>
        <div className={classes.textDiv}>
          <div className={classes.icons}>
            <AnimationOnScroll
              animateIn="animate__fadeInLeftBig"
              animateOnce={true}
              delay={50}
              animatePreScroll={false}
            >
              <i className="fa-thin fa-dog"></i>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInRightBig"
              animateOnce={true}
              delay={100}
              animatePreScroll={false}
            >
              <i
                className="fa-thin fa-cat"
                style={{ transform: "scaleX(-1)" }}
              ></i>
            </AnimationOnScroll>
          </div>
          <div className={classes.infoDiv}>
            Naša ambulanta postoji od 2002. godine i zahvaljujući vašem
            poverenju, još uvek smo tu, u službi zdravlja vaših ljubimaca. Naše
            poslovanje se zasniva isključivo na temeljima savremene Veterinarske
            medicine, tj. uz kompletnu kliničku dijagnostiku, nalazimo najbolje
            rešenje za terapiju vašeg ljubimca, što i vas kao vlasnika oslobadja
            od nepotrebnih troškova. Ovakav pristup je pokazao odlicne rezultate
            i mi danas imamo preko hiljadu zadovoljnih vlasnika i pacijenata
            uvedenih u našu bazu podataka.
          </div>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={300}
            style={{ width: "100%" }}
          >
            <button className={classes.contactButton}>Kontakt</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
