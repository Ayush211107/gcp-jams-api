const axios = require('axios');


const sendMailFromEmailJs = async () => {
    const formData = new FormData();

    formData.append('service_id', 'service_2eeyk3e');
    formData.append('template_id', 'template_xgwv3xm');
    formData.append('user_id', 'znGJ1Gu-iUiCvI_z6');
    formData.append('template_params[from_name]', 'Ayush');
    formData.append('template_params[to_name]', 'ksh');
    formData.append('template_params[pdf_link]', ' bh ');
    formData.append('template_params[to_email]', '211107@gmail.com');
    formData.append('template_params[reply_to]', 'bhbh');

    try {
        const res = await axios.post(
            'https://api.emailjs.com/api/v1.0/email/send-form',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );

        console.log('Your mail is sent!', res.data.result);
    } catch (error) {
        console.log('Oops... ' + error);
        throw error.response.data;
    }
};


module.exports = sendMailFromEmailJs 