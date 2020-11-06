import React from "react";
const styles = {
  footerWrapper: {
    margin: 25,
    marginBottom: 10,
    marginTop: 50,
    textAlign: "center",
    fontWeight: 700,
    color: "#777",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: 20,
  },
  nicoLink: {
    color: "#444",
  },
  sideWrapper: {
    display: "flex",
    padding: 10,
  },
  footerText: {
    margin: 0,
    fontSize: 20,
    padding: 0,
  },
  spacer: {
    margin: 0,
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  footerLink: {
    color: "#444",
  },
};
export default function Footer() {
  return (
    <div style={styles.footerWrapper}>
      <div style={styles.sideWrapper}>
        <a style={styles.footerLink}>testflight</a>
        <p style={styles.spacer}>·</p>
        <a style={styles.footerLink}>contact</a>
        <p style={styles.spacer}>·</p>
        <a style={styles.footerLink}>twitter</a>
      </div>
      <div style={styles.sideWrapper}>
        <p style={styles.footerText}>
          built by <a style={styles.nicoLink}>Nico</a>
        </p>
        <p style={styles.spacer}>·</p>
        <p style={styles.footerText}>2020</p>
      </div>
    </div>
  );
}
