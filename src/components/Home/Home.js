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
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
      minHeight: "70vh",
      justifyContent: "space-evenly",
    },
  },
  contactButton: {
    fontFamily: "Lato",
    width: "65%",
    fontSize: "2rem",
    fontWeight: "normal",
    margin: "1rem auto",
    padding: "10px",
    borderRadius: "2px",
    background: "linear-gradient(to right, #50c878 , #50c85a)",
    color: "white",
    cursor: "pointer",
    outline: "0",
    border: "2px solid #50c85a",
    transition: "all .1s ease-in",
    "&:hover": {
      background: "white",
      color: "#50c878",
    },
    [theme.breakpoints.down(700)]: {
      width: "80%",
      fontSize: "1.25rem",
      margin: "0 auto",
    },
  },
  icons: {
    fontSize: "5rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down(700)]: {
      fontSize: "4rem",
    },
  },
  infoDiv: {
    padding: "2rem",
    fontSize: 22,
    textAlign: "justify",
    margin: "2rem auto",
    [theme.breakpoints.down(700)]: {
      fontSize: 17,
      margin: "0",
      padding: "1rem",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Title title="Dobrodošli" cssStyle={{ margin: "1.5rem auto" }} />
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
            <button className={classes.contactButton}>
              Kontakt <i className="fa-sharp fa-regular fa-circle-info"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
