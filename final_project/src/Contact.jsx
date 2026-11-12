import { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import PageTitle from "./PageTitle";

export default function Contact() {

    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            await emailjs.sendForm(
                "service_z20hybr",
                "template_kk9tmld",
                e.currentTarget,
                "7HJ_v7piGBDWiNrUo"
            );

            setStatus("Message sent successfully!");
            e.target.reset();
        } catch (error) {
            console.error(error);
            setStatus("Failed to send message.");
        }
    };


    return (
        <>

            <PageTitle title="Contact" />

            <div id="main">

                <h1>Contact</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="name">Name*</label><br />
                    <input type="text" id="name" name="name" placeholder="Your Name" required="required" /><br />
                    </div>
                    <div>   
                    <label htmlFor="email">Email*</label><br />
                    <input type="email" id="email" name="email" placeholder="YourName@abc.com" required="required" /><br />
                    </div>  
                    <div>
                    <label htmlFor="phone">Phone Number</label><br />
                    <input type="tel" id="phone" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /><br />
                    </div>
                    <div>
                    <label htmlFor="message">Message*</label><br />
                    <textarea name="message" id="message" placeholder="Enter your message..." required="required"></textarea><br />
                    </div>
                    <div>
                        <button type="submit" id="submit">Submit</button>
                        <br />
                        </div>
                        <div>
                            {status && <p>{status}</p>}
                        </div>
                    
                </form>

            </div>
            <Footer />
        </>
    );
}