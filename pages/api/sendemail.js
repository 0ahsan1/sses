export default async function handler(req, res) {
    try {
        sendEmail(req.body);
        res.status(200).send({ message: "Success" });
    } catch (error) {
        res.status(500).send({ message: "Failed" });
        
    }
}

export const sendEmail = async (data) => {
    const { email, name, phone, subject, message } = data;
    const transporter = nodemailer.createTransport({
        host: "mail.sses.pk",
        port: 587,
        secure: false,
        auth: {
            user: 'info@sses.pk',
            pass: 'sses_0321',
        },
    });
    const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>MTFX Connect With</title>
      <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th,
        td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        th {
          background-color: #f2f2f2;
        }
        tfoot td {
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <table border="1" width="621" style="border:1px solid #222;" cellpadding="0" cellspacing="0">
      <tbody>
      <tr>
      <td style="width: 260px;border:1px solid #222;padding:8px;">Name</td>
      <td style="width: 345px;border:1px solid #222;padding:8px;">${name}</td>
      </tr>
      <tr>
      <td style="width: 260px;border:1px solid #222;padding:8px;">Email</td>
      <td style="width: 345px;border:1px solid #222;padding:8px;">${email}</td>
      </tr>
      <tr>
      <td style="width: 260px;border:1px solid #222;padding:8px;">Phone</td>
      <td style="width: 345px;border:1px solid #222;padding:8px;">${phone}</td>
      </tr>
      <td style="width: 260px;border:1px solid #222;padding:8px;">Subject</td>
      <td style="width: 345px;border:1px solid #222;padding:8px;">${subject}</td>
      </tr>
      <tr>
      <td style="width: 260px;border:1px solid #222;padding:8px;">Message</td>
      <td style="width: 345px;border:1px solid #222;padding:8px;">${message}</td>
      </tr>
      </tbody>
      </table><br />
    </body>
  </html>
  `;
    const mailData = {
        from: 'info@sses.pk',
        to: 'info.sustainablesolar@gmail.com',
        subject: 'Message Received (Contact Page)',
        html: html,
    };
    transporter.sendMail(mailData, function (error, info) {

        if (error) {
            console.error(error);
        } else {
        }
    });
};