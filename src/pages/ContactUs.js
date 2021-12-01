import React, { useState } from "react";
import styles from "./ContactUs.module.css";

const ContactUs = (props) => {
  const handleSubmitForms = () => {
    // Usually you would do field validation &
    // send this to a rest endpoint to the back end here.
    console.log(name);
    console.log(email);
    console.log(message);
    setName("");
    setEmail("");
    setMessage("");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className={styles.Fullpage}>
      <div className={styles.contactUsOuterContainer}>
        <form onSubmit={handleSubmitForms}>
         <div className = {styles.heading}>
          <label>
           Contact Us
          </label>
         </div>
          <div className = {styles.description}>
          <label>
            Got a question? We'd love to hear from you. Send us a message and we will respond as soon as possible. 
          </label>
         </div>
         
       <div className={styles.nameContainer}>
            <label className={styles.nameLabel}>
              Name:
           </label>
             <input
               className={styles.nameInput}
               type="text"
                value={name}
               onChange={(e) => setName(e.target.value)}
              />
          </div>
          <div className={styles.emailContainer}>
           <label className={styles.emailLabel}>
              Email:
            </label>
              <input
               className={styles.emailInput}
               type="text"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className={styles.messageContainer}>
            <label className={styles.messageLabel}>
             Message:</label>
              <textarea
                className={styles.messageInput}
               type="text"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
              />
          </div>
          <div className={styles.submitContainer}>
            <input className={styles.submitInput} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </section>
    );
  };

export default ContactUs;