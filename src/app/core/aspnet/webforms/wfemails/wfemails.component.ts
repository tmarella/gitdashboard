import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wfemails',
  templateUrl: './wfemails.component.html',
  styleUrls: ['./wfemails.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WfemailsComponent implements OnInit {
  email = `MailMessage mailMessage = new MailMessage();
  mailMessage.To.Add("your.own@mail-address.com");
  mailMessage.To.Add("another@mail-address.com");
  mailMessage.CC.Add("me@mail-address.com");
  mailMessage.Bcc.Add("me2@mail-address.com");
  mailMessage.Priority = MailPriority.High;
  mailMessage.From = new MailAddress("another@mail-address.com");
  mailMessage.Subject = "ASP.NET e-mail test";
  mailMessage.Body = "Hello world,This is an ASP.NET test e-mail!";
  mailMessage.Attachments.Add(new Attachment(Server.MapPath("~/image.jpg")));
  SmtpClient smtpClient = new SmtpClient("smtp.your-isp.com");
  smtpClient.Send(mailMessage);
  Response.Write("E-mail sent!");`;

  htmlemail = `mailMessage.IsBodyHtml = true;
  mailMessage.Body = "Hello <b>world!</b>";`;

  constructor() { }

  ngOnInit(): void {
  }

}
