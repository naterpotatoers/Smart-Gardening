import { CognitoUserPool } from "amazon-cognito-identity-js";
// Credentials for connecting to Smart Garden's AWS Cognito user pool
const poolData = {
  UserPoolId: "us-west-2_l3lbnzjbe",
  ClientId: "730lmgqgvuoers9c248phcbfsf",
};

export default new CognitoUserPool(poolData);
