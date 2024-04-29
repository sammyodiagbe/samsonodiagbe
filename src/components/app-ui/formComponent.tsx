"use client";

import { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import CustomButton from "./button";
import { Resend } from "resend";
const resend = new Resend(`${process.env.RESEND_API_KEY}`);
console.log(`${process.env.RESEND_API_KEY}`);

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sendmessage = await resend.emails.send({
      from: email,
      to: "odiagbesamsonosaro@gmail.com",
      text: message,
      subject: "",
      html: ``,
    });

    console.log(sendMessage);
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
          />
        </div>
        <div className="mb-4">
          <title>Name</title>
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <title>Message</title>
          <Textarea
            placeholder="Your message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></Textarea>
        </div>
        <CustomButton content="Send Your Message" />
      </form>
    </div>
  );
};

export default FormComponent;
