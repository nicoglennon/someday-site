import React from "react";
import HeroImage from "../assets/somedayweb.png";
import DownloadButton from "../assets/app-store-button.svg";

const styles = {
  bodyWrapper: {
    display: "flex",
    alignItems: "center",
    margin: "auto",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  heroImage: {
    maxWidth: 470,
  },
  sloganText: {
    fontSize: 90,
    marginTop: 0,
    marginBottom: 25,
    lineHeight: 1,
  },
  spacer: {
    width: 40,
  },
  flexChild: { margin: "auto" },
};

export default function Body() {
  return (
    <div style={styles.bodyWrapper}>
      <div style={styles.flexChild}>
        <h1 style={styles.sloganText}>
          take it <br />
          one day <br />
          at a time.
        </h1>
        <div>
          <img src={DownloadButton} style={{ width: 275 }} />
        </div>
      </div>
      <div style={styles.spacer}></div>
      <div style={styles.flexChild}>
        <img src={HeroImage} alt="App Preview" style={styles.heroImage} />
      </div>
    </div>
  );
}
