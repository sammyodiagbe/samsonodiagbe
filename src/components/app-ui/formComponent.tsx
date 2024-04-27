import { useState } from "react";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {};
  return (
    <div>
      <h1 className="text-2xl font-bold">Send a message</h1>
      <form onSubmit={sendMessage}>
        <div>
          <title>Name</title>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <title>Name</title>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <title>Message</title>
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
