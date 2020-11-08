import React from "react";
import { Link } from "react-router-dom";

const styles = {
  modalBackdrop: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(0,0,0)",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    zIndex: 2,
  },
  modalContent: {
    backgroundColor: " #fff",
    margin: "auto",
    width: "70%",
    maxWidth: 700,
    padding: 30,
    height: "70%",
    borderRadius: 40,
    overflow: "scroll",
  },
  closeButton: {
    width: "fit-content",
    backgroundColor: "#333",
    padding: "10px 18px",
    borderRadius: 15,
    color: "#fff",
    fontSize: 18,
    fontWeight: 700,
    marginTop: 10,
  },
  exitButton: {
    width: 45,
    height: 45,
    backgroundColor: "lightgray",
    borderRadius: 60,
    color: "#333",
    fontWeight: 700,
    top: 0,
    float: "right",
    position: "sticky",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
};
export default function PrivacyModal() {
  return (
    <div style={styles.modalBackdrop}>
      <div style={styles.modalContent}>
        <Link to="/">
          <div style={styles.exitButton}>✕</div>
        </Link>
        <h2>Privacy Policy</h2>
        <p>
          Nicolas Glennon Ramirez built the someday - one day at a time app as a
          Free app. This SERVICE is provided by Nicolas Glennon Ramirez at no
          cost and is intended for use as is. This page is used to inform
          visitors regarding my policies with the collection, use, and
          disclosure of Personal Information if anyone decided to use my
          Service. If you choose to use my Service, then you agree to the
          collection and use of information in relation to this policy. The
          Personal Information that I collect is used for providing and
          improving the Service. I will not use or share your information with
          anyone except as described in this Privacy Policy. The terms used in
          this Privacy Policy have the same meanings as in our Terms and
          Conditions, which is accessible at someday - one day at a time unless
          otherwise defined in this Privacy Policy.
        </p>
        <h3>Information Collection and Use</h3>
        <p>
          For a better experience, while using our Service, I may require you to
          provide us with certain personally identifiable information, including
          but not limited to email address. The information that I request will
          be retained on your device and is not collected by me in any way. The
          app does use third party services that may collect information used to
          identify you. Link to privacy policies of third party service
          providers used by the app:
        </p>
        <ul>
          <li>
            <a href="https://expo.io/privacy">Expo</a>
          </li>
          <li>
            <a href="https://mailchimp.com/legal/privacy/">Mailchimp</a>
          </li>
        </ul>
        <h3>Log Data</h3>
        <p>
          I want to inform you that whenever you use my Service, in a case of an
          error in the app I collect data and information (through third party
          products) on your phone called Log Data. This Log Data may include
          information such as your device Internet Protocol (“IP”) address,
          device name, operating system version, the configuration of the app
          when utilizing my Service, the time and date of your use of the
          Service, and other statistics.
        </p>
        <h3>Cookies</h3>
        <p>
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device's internal
          memory. This Service does not use these “cookies” explicitly. However,
          the app may use third party code and libraries that use “cookies” to
          collect information and improve their services. You have the option to
          either accept or refuse these cookies and know when a cookie is being
          sent to your device. If you choose to refuse our cookies, you may not
          be able to use some portions of this Service.
        </p>
        <h3>Service Providers</h3>
        <p>
          I may employ third-party companies and individuals due to the
          following reasons:
        </p>
        <ul>
          <li>To facilitate our Service;</li>
          <li>To provide the Service on our behalf;</li>
          <li>To perform Service-related services; or</li>
          <li>To assist us in analyzing how our Service is used.</li>
        </ul>
        <p>
          I want to inform users of this Service that these third parties have
          access to your Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </p>
        <h3>Security</h3>
        <p>
          I value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and I cannot
          guarantee its absolute security.
        </p>
        <h3>Links to Other Sites</h3>
        <p>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by me. Therefore, I strongly advise
          you to review the Privacy Policy of these websites. I have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>
        <h3>Children’s Privacy</h3>
        <p>
          These Services do not address anyone under the age of 13. I do not
          knowingly collect personally identifiable information from children
          under 13. In the case I discover that a child under 13 has provided me
          with personal information, I immediately delete this from our servers.
          If you are a parent or guardian and you are aware that your child has
          provided us with personal information, please contact me so that I
          will be able to do necessary actions.
        </p>
        <h3>Changes to This Privacy Policy</h3>
        <p>
          I may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. I will
          notify you of any changes by posting the new Privacy Policy on this
          page. This policy is effective as of 2020-11-07.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or suggestions about my Privacy Policy, do
          not hesitate to contact me at nico@someday.im.
        </p>
        <Link to="/">
          <div style={styles.closeButton}>Close</div>
        </Link>
      </div>
    </div>
  );
}