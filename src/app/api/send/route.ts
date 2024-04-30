import { EmailTemplate } from "@/components/emailTemplate";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "Sam <sam@samsonodiagbe.online>",
      to: "sam@bluapedevs.com",
      subject: `Message from ${name}`,
      react: EmailTemplate({
        name,
        email,
        message,
      }),
      html: "",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
