import React from "react";
import contactImg from "../../assets/contact.svg";
import phoneImg from "../../assets/cell.svg";
import emailImg from "../../assets/email.svg";
import { ContactBox, ContactPhoneAndEmail, Container, FormBox } from "./styles";

const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <ContactBox>
        <img src={contactImg} alt="ContactImg" />
        <FormBox>
          <h1>Contact Us</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Full name" type="text" />
            <input placeholder="E-mail" type="email" />
            <textarea placeholder="Message" rows={8} cols={33} />
            <button>Contact Us</button>
          </form>
        </FormBox>
        <ContactPhoneAndEmail>
          <div>
            <img src={phoneImg} alt="phone" />
            <p>(XX)XXXXX-XXXX</p>
          </div>
          <div>
            <img src={emailImg} alt="email" />
            <p>plantationSchool@gmail.com</p>
          </div>
        </ContactPhoneAndEmail>
      </ContactBox>
    </Container>
  );
};

export default Contact;
