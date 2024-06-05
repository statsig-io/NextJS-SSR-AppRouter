import Statsig, { StatsigUser } from "statsig-node";
import ClientApp from "./client-app";

async function getStatsigValues(user: StatsigUser): Promise<Record<string, unknown>> {
  await Statsig.initialize(process.env.STATSIG_SERVER_SECRET!);
  const values = Statsig.getClientInitializeResponse(user);
  return values ?? {};
}

export default async function Index(): Promise<JSX.Element> {
  const user = { userID: "123" };
  const values = await getStatsigValues(user);
  return <ClientApp user={user} values={values} />;
}
