const whoami = (req, res) => {
    let data = parser(req.connection.remoteAddress,
        req.headers['user-agent'],
        req.headers['accept-language']);

    res.status(200).jsonp(data);
}

module.exports = whoami;

const parser = (remoteAddress, userAgent, acceptLanguage) => {
    const ipaddress = remoteAddress;
    const lang = acceptLanguage.split(',')[0];
    const regExp = /\(([^)]+)\)/;
    const software = userAgent.split(regExp)[1];

    return {
        ipaddress,
        lang,
        software
    };

};