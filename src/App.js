import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { Header, Body, Footer } from "./components";

const styles = {
  appWrapper: {
    margin: "auto",
    fontFamily: "DM Sans",
    padding: 25,
    paddingTop: 20,
    backgroundColor: "#f7f7f7",
    color: "#333",
  },
  innerAppWrapper: {
    maxWidth: 950,
    margin: "auto",
  },
};
function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    // async function getDate() {
    //   const res = await fetch('/api/date');
    //   const newDate = await res.text();
    //   setDate(newDate);
    // }
    // getDate();
  }, []);
  return (
    <div style={styles.appWrapper}>
      <div style={styles.innerAppWrapper}>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
