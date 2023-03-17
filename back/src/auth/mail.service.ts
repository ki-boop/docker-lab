import { Injectable } from "@nestjs/common";
import * as nodemailler from "nodemailer";
import { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
@Injectable()
export class MailService {
  constructor() {
    this.transporter = nodemailler.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    console.log({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  transporter: Transporter<SMTPTransport.SentMessageInfo>;

  async sendActivationMail(to: string, link: string) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Активация аккаунта на ${process.env.API_URL}`,
      text: "",
      html: `
      <div>
        <h1>Для активации перейдите по ссылке </h1> 
        <a href="${link}">${link}</a>
      </div>`,
    });
  }
}
