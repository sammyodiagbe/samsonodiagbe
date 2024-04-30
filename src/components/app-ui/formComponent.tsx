"use client";

import { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import CustomButton from "./button";
import { useToast } from "../ui/use-toast";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendingMail, setSendingMail] = useState(false);
  const { toast } = useToast();

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSendingMail(true);
    const sendMail = await fetch("/api/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    toast({
      title: "Message sent",
      description: `Thanks ${name}, your message has been sent to me successfully`,
      style: { backgroundColor: "slateblue", color: "white" },
    });
    setName("");
    setEmail("");
    setMessage("");
    setSendingMail(false);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Send a message</h1>
      <form onSubmit={sendMessage}>
        <div className="mb-4">
          <title>Name</title>
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={sendingMail}
          />
        </div>
        <div className="mb-4">
          <title>Name</title>
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={sendingMail}
          />
        </div>
        <div className="mb-4">
          <title>Message</title>
          <Textarea
            placeholder="Your message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            disabled={sendingMail}
          ></Textarea>
        </div>
        <CustomButton content="Send Your Message" sendingEmail={sendingMail} />
      </form>
    </div>
  );
};

export default FormComponent;
