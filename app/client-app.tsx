// app/client-app.tsx

"use client"; // important!  the distinction between what is happening on the client and server is what matters

import {
  StatsigSynchronousProvider, // update the import
  StatsigUser,
  useGate,
} from "statsig-react";


function Content() {
  const { value } = useGate("example_feature_flag");
  return (
    <div style={value ? {background: "#194B7D"} : {}}>
      <div style={{ padding: 16 }}>nextjs_app_bg: {value ? "Passing" : "Failing"}</div>
    </div>
  );
}

export default function ClientApp({
  user,
  values,
}: {
  user: StatsigUser;
  values: Record<string, unknown>;
}): JSX.Element {

  return (
    <StatsigSynchronousProvider
      sdkKey={process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY!}
      initializeValues={values}
      user={user}
    >
      <Content />
    </StatsigSynchronousProvider>
  );
}