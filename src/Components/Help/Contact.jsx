export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
