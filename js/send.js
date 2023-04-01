const nodemailer = require('nodemailer');   

// const form = document.querySelector('.js-form');
// const ism = document.querySelector('.js-ism');
// const familiya = document.querySelector('.js-familiya');
// const email = document.querySelector('.js-email');
// const subjectMess = document.querySelector('.js-subject');
// const textMess = document.querySelector('.js-message');


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "edoniyorbekdev@gmail.com",
        pass: "cmcpcszpyyzajgrm"
    }
});

const mailOptions = {
    from: "edoniyorbekdev@gmail.com",
    to: "edoniyorbekdev@gmail.com",
    subject: "subject",
    text: "text",
}

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(info.response);
    }
})