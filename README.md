
## Getting Started
This is a Next.JS project with Statsig Feature Flags. To run, make an account on the [Statsig Console](https://console.statsig.com/sign_up) and add your Client and Server keys to the .env.local file in the format: 

```bash
NEXT_PUBLIC_STATSIG_CLIENT_KEY=your_client_key
STATSIG_SERVER_SECRET=your_server_key
```

```bash
npm run dev
```