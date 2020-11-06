import React from "react";
import HeaderImage from "../assets/somedayicon.png";
const styles = {
  headerWrapper: {
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    marginTop: 0,
  },
  headerImage: {
    width: 40,
    borderRadius: 12,
    marginRight: 10,
  },
  leftSection: {
    alignItems: "center",
    display: "flex",
  },
  logoTitle: {
    fontSize: 30,
    fontWeight: 700,
  },
  rightSection: {
    alignItems: "center",
    display: "flex",
  },
  contactLink: {
    marginLeft: 25,
    color: "#888",
    fontSize: 22,
    textDecoration: "none",
    borderBottom: "none",
    fontWeight: 700,
  },
};
export default function Header() {
  return (
    <div style={styles.headerWrapper}>
      <div style={styles.leftSection}>
        <img src={HeaderImage} alt="someday" style={styles.headerImage} />
        <h1 style={styles.logoTitle}>someday</h1>
      </div>
      <div style={styles.rightSection}></div>
    </div>
  );
}
