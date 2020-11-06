import React from "react";
const styles = {
  footerWrapper: {
    margin: 25,
    marginBottom: 20,
    marginTop: 30,
    textAlign: "center",
    fontWeight: 700,
    color: "#777",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: 20,
    flexDirection: "column",
  },
  nicoLink: {
    color: "#333",
  },
  sideWrapper: {
    display: "flex",
    padding: 10,
    flexWrap: "wrap",
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
    color: "#333",
  },
};
export default function Footer() {
  return (
    <div style={styles.footerWrapper}>
      <div style={styles.sideWrapper}>
        <a
          style={styles.footerLink}
          href="https://testflight.apple.com/join/If8fFbS5"
        >
          testflight
        </a>
        <p style={styles.spacer}>·</p>
        <a style={styles.footerLink} href="mailto:nico@someday.im">
          contact
        </a>
      </div>
      <div style={styles.sideWrapper}>
        <p style={styles.footerText}>
          built by{" "}
          <a style={styles.nicoLink} href="https://twitter.com/nicoglennon">
            Nico
          </a>
        </p>
        <p style={styles.spacer}>·</p>
        <p style={styles.footerText}>2020</p>
      </div>
    </div>
  );
}
