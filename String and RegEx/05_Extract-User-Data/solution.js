function solve() {
    const users = JSON.parse(document.getElementById('arr').value);

    const extractName = (user) => {
        const pattern = /^[A-Z][a-z]* [A-Z][a-z]* /;
        const match = user.match(pattern);
        return match && match[0];
    };

    const extractPhoneNumber = (user) => {
        const pattern = /\(+359 \d{1} \d{3} \d{3}) | (+359-\d-\d{3}-\d{3})/;
        const match = user.match(pattern);
        return match && match[0];
    };

    const extractEmail = (user) => {
        const pattern = / [a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        const match = user.match(pattern);
        return match && match[0];
    }

    users.forEach(user => {
        const name = extractName(user);
        const phone = extractPhoneNumber(user);
        const mail = extractEmail(user);

        if(!name || !phone || !mail){
            console.log('Invalid data');
            return;
        }

        console.log(name);
        console.log(phone);
        console.log(mail);
    })
}