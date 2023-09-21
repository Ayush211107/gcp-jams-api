const sgMail = require('@sendgrid/mail')


const sendMail = (email, subject, text) => {

    sgMail.setApiKey(process.env.EMAIL_API_KEY);

    const message = {
        to: email,
        from: {
            name: 'LAB FINDER',
            email: 'natureactie@gmail.com',
        },
        subject: subject,
        text: `click on link to verify your account on labfinder  ${text}`,
        // html: `
        // <div style="align-items : center">
        // <a src=${text}>Verify Account</a>
        // </div>`,
    }

    sgMail
        .send(message)
        .then(() => {
            console.log("email sent");
        })
        .catch((error) => {
            console.error(error)
        })

};

module.exports = sendMail;