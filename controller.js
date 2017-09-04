const whoami = (req, res) => {
    let data = parser(req.header('x-forwarded-for'),
        req.header('user-agent'),
        req.header('accept-language'));

    res.status(200).jsonp(data);
}

module.exports = whoami;

const parser = (remoteAddress, userAgent, acceptLanguage) => {
    const ipaddress = remoteAddress.split(',')[0];
    const language = acceptLanguage.split(',')[0];
    const regExp = /\(([^)]+)\)/;
    const software = userAgent.split(regExp)[1];

    return {
        ipaddress,
        language,
        software
    };

};