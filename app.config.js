import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  extra: {
    apiUrl: process.env.API_URL,
    apiUrlVercel: process.env.API_URL_VERCEL,
    apiLocal: process.env.API_LOCAL,
    eas: {
      projectId: "579597f5-c40c-49e6-b4a7-3a4689427967"
    }
  },
});
