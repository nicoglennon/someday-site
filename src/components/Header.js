import React from "react";
import HeaderImage from "../assets/somedayicon.png";
const styles = {
  headerWrapper: {
    textAlign: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    width: 40,
    borderRadius: 12,
    marginRight: 10,
  },
  section: {
    alignItems: "center",
    display: "flex",
  },
  logoTitle: {
    fontSize: 32,
    fontWeight: 700,
  },
};
export default function Header() {
  return (
    <div style={styles.headerWrapper}>
      <div style={styles.section}>
        <img src={HeaderImage} alt="someday" style={styles.headerImage} />
        <h1 style={styles.logoTitle}>someday</h1>
      </div>
    </div>
  );
}
