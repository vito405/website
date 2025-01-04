export default function Contact() {
    return (
        <footer>
            <h2>
                If you would like to contact me, please use the form below to send an email, 
                or you can reach me directly at <i>Email123@gmail.com</i>.
            </h2>
            <form id="contact-form">
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div>
                    <label htmlFor="title">Title of Email</label>
                    <input type="text" id="title" name="title" placeholder="Enter the email title" required />
                </div>
                <div>
                    <label htmlFor="body">Email Body</label>
                    <textarea id="body" name="body" placeholder="Write your message here" rows="5" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </footer>
    );
}