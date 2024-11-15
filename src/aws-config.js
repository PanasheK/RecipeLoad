const awsConfig = {
  Auth: {
    region: "YOUR_REGION",
    userPoolId: "YOUR_USER_POOL_ID",
    userPoolWebClientId: "YOUR_CLIENT_ID",
  },
  Storage: {
    region: "YOUR_REGION",
    bucket: "XXXXXXXXXXXXXX",
    identityPoolId: "YOUR_IDENTITY_POOL_ID",
  },
  API: {
    endpoints: [
      {
        name: "recipes",
        endpoint: "YOUR_API_GATEWAY_URL",
      },
    ],
  },
};

export default awsConfig;
