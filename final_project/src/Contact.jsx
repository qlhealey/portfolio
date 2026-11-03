export default function Contact() {


    return (
        <>
            <div id="main">

                <h1>Contact</h1>

                <form>
                    <label htmlFor="name">Name*</label><br />
                    <input type="text" id="name" placeholder="Your Name" required="required" /><br />
                    <label htmlFor="email">Email*</label><br />
                    <input type="email" id="email" placeholder="YourName@abc.com" /><br />
                    <label htmlFor="phone">Phone Number</label><br />
                    <input type="tel" id="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /><br />
                    <label htmlFor="message">Message*</label><br />
                    <textarea name="message" id="message" placeholder="Enter your message..."></textarea><br />

                    <button type="submit" id="submit">Submit</button>
                </form>

            </div>
        </>
    );
}