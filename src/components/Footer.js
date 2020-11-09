import React from "react";
import { Link } from "react-router-dom";

const styles = {
  footerWrapper: {
    margin: 10,
    marginBottom: 20,
    marginTop: 10,
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
    textAlign: "center",
  },
  footerText: {
    margin: 0,
    fontSize: 20,
    padding: 0,
  },
  spacer: {
    margin: 0,
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  footerLink: {
    color: "#333",
    fontSize: 18,
    margin: 0,
  },
};
export default function Footer() {
  return (
    <div style={styles.footerWrapper}>
      <div style={styles.sideWrapper}>
        <a
          style={styles.footerLink}
          href="https://testflight.apple.com/join/If8fFbS5"
          target="_blank"
        >
          testflight
        </a>
        <p style={styles.spacer}>·</p>
        <Link to="/privacy">
          <p style={styles.footerLink}>privacy</p>
        </Link>
        <p style={styles.spacer}>·</p>
        <a style={styles.footerLink} href="mailto:nico@someday.im">
          contact
        </a>
      </div>
      <div style={styles.sideWrapper}>
        <p style={styles.footerText}>
          built by{" "}
          <a
            style={styles.nicoLink}
            href="https://twitter.com/nicoglennon"
            target="_blank"
          >
            Nico
          </a>
        </p>
        <p style={styles.spacer}>·</p>
        <p style={styles.footerText}>2020</p>
      </div>
    </div>
  );
}
