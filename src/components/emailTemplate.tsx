import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1 className="font-bold text-xl mb-5">You have got mail from {email}</h1>
    <h1 className="mb-5">Welcome, {name}!</h1>
    <p>{message}</p>
  </div>
);
