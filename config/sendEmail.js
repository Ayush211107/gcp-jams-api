const nodeMailer = require("nodemailer");
require('dotenv').config();


const sendMail = async (email, subject, text) => {
    try {
        const transporter = nodeMailer.createTransport({
            name: "labfinder",
            server: smtp.sendgrid.net,
            host: smtp.sendgrid.net,
            port: 25,
            secure: false,
            auth: {
                user: "apikey",
                pass: "	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",
            },
        });

        const info = await transporter.sendMail({
            from: '"Fred Foo 👻" <noreply@labfinder.com>',
            to: email,
            subject: subject,
            text: text,
        });
        console.log("email sent successfully");
        return info;

    } catch (error) {
        console.log("email not sent!");
        console.log(error);
        return error;
    }
};

module.exports = sendMail;