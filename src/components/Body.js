import React from "react";
import HeroImage from "../assets/somedayweb.png";
import DownloadButton from "../assets/app-store-button.svg";

const styles = {
  bodyWrapper: {
    display: "flex",
    alignItems: "center",
    margin: "auto",
    justifyContent: "space-between",
    alignContent: "stretch",
    flexWrap: "wrap",
  },
  heroImageWrapper: {
    maxWidth: 470,
    margin: "auto",
  },
  imageWrapper: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  heroImage: { maxWidth: "100%" },
  downloadImage: {
    width: 250,
  },
  sloganText: {
    marginTop: 60,
    marginBottom: 20,
    lineHeight: 0.9,
  },
  sloganFlexChild: {
    fontSize: 30,
    textAlign: "center",
  },
  flexChild: {
    margin: "auto",
    paddingBottom: 10,
    width: "100%",
    textAlign: "center",
  },
  comingSoon: {
    position: "relative",
    width: "fit-content",
    fontWeight: 700,
    marginTop: 0,
    marginBottom: 0,
    fontSize: 42,
    zIndex: 1,
    top: 65,
    cursor: "not-allowed",
    margin: "auto",
  },
};

export default function Body() {
  return (
    <div style={styles.bodyWrapper}>
      <div
        style={{ ...styles.flexChild, ...styles.sloganFlexChild }}
        id="hero-text-flex"
      >
        <h1 style={styles.sloganText} id="slogan-text">
          one day <br />
          at a time.
        </h1>
      </div>
      <div style={styles.spacer}></div>
      <div style={styles.flexChild}>
        <div style={styles.heroImageWrapper}>
          <img src={HeroImage} alt="App Preview" style={styles.heroImage} />
        </div>
      </div>
      <div style={styles.flexChild}>
        <div style={styles.imageWrapper}>
          <a href="https://apps.apple.com/us/app/someday-one-day-at-a-time/id1537662355">
            <img
              src={DownloadButton}
              style={styles.downloadImage}
              id="download-btn"
            />
          </a>
        </div>
        <div style={styles.imageWrapper}>
          <a
            href="https://www.producthunt.com/posts/someday?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-someday"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=274095&theme=dark"
              alt="someday - take it one day at a time | Product Hunt"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
