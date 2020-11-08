import React from "react";
import "./App.css";
import { Header, Body, Footer } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivacyModal from "./components/PrivacyModal";
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
  return (
    <div style={styles.appWrapper}>
      <div style={styles.innerAppWrapper}>
        <Router>
          <Header />
          <Body />
          <Footer />
          <Route exact path="/privacy">
            <PrivacyModal />
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
