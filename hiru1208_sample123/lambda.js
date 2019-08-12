let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {
    debugger;

    cognito_idp.listUsers({
        UserPoolId: process.env.UserPoolId_cognitohirutest,
        AttributesToGet: ["sub", "address", "birthdate", "email", "family_name", "given_name", "locale", "name", "nickname", "picture", "preferred_username", "profile", "timezone", "updated_at", "website"],
        Limit: 10
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        console.log(data)
    });


    callback(null, { "message": "Successfully executed" });
}