const crypto = require('crypto');
const OAuth = require('oauth-1.0a');

const oauth = OAuth({
    consumer: {
        key: 'yoOWn0CeAYNm',
        secret: 'WjhxA2cyHpFSnPshbSZZ1cqx0zwgKEJsau5RUkmAifnszJCY'
    },
    signature_method: 'HMAC-SHA1',
    hash_function: function(base_string, key) {
        return crypto.createHmac('sha1', key).update(base_string).digest('base64');
    }
});

/*
// oauth_consumer_key=,
// oauth_signature_method=HMAC-SHA1,
// oauth_timestamp=1502611191,
// oauth_nonce=d40hGe
// oauth_version=1.0
// oauth_signature==
*/

console.log('oauth', oauth)
const authorizationHeader = () => {
    return 0
}


const initialAuthentication = () => {
    const { consumer: {key, secret}, signature_method } = oauth;

    const oauth_consumer_key = key;
    const oauth_signature_method=signature_method
    const oauth_timestamp=oauth.getTimeStamp();
    const oauth_nonce=oauth.getNonce()

GET&%2Fcourses%2F123456&application_id%3D936DA01F-1234-4d9d-80C7-02AF85C8D2A8%26oauth_consumer_key%3D4101E3E3-4240-4C53-955F-A597A3F2C017%26oauth_nonce%3DAVQEVmrmSPJtf35L1CYSM20J04WRRZUE%26oauth_signature%3DQAzisyz5QaMDV3SRqIKmcA==%26oauth_signature_method%3DCMAC-AES%26oauth_timestamp%3D1314216476



    const baseString = `GET
    
    &oauth_consumer_key${key}
    &oauth_signature_method${oauth_signature}
    &oauth_timestamp=${oauth_timestamp}
    &oauth_nonce=${oauth_nonce}`

    const oauth_signature=oauth.hash_function(baseString, key+'&')

    const authorization = {
        oauth_consumer_key,
        oauth_signature_method,
        oauth_timestamp,
        oauth_nonce,
        oauth_signature
    }


    const options = {
        method: 'GET',
        headers: {
           'Content-Type' : 'application/x-www-form-urlencoded',
        },
        body: new FormData(authorization)
    }


    console.log("Auth sent: ", authorization);

    fetch('/oauth/request', options)
        .then( res => console.log(res))
        .then( data => console.log("Inital auth data", data))
        .catch( err => console.log('Error with initial atuh'))

}


const authenticatedRequest = (req) => {
    const { url, method, headers, body } = req;
    const options = {
        method,
        body,
        headers: {
            ...headers,
            ...oauth.toHeader(oauth.authorize(req))
        }
    }

    return fetch(url, options)
        .then( res => res.json())
        .catch( err => console.log('Oauth authenticatedRequest error ', err))
}


export { authenticatedRequest, initialAuthentication };
