import { EmailTemplate } from "@/components/emailTemplate";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "sammiodiagbe@gmail.com",
      reply_to: email,
      subject: `Portfolio Message from ${name}`,
      react: EmailTemplate({
        name,
        email,
        message,
      }),
      html: "",
    });

    return Response.json(data);
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ error }, { status: 500 });
  }
}
