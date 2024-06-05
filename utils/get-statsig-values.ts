// utils/get-statsig-values.ts

import Statsig, { StatsigUser } from "statsig-node";

const isStatsigReady = Statsig.initialize(
  process.env.STATSIG_SERVER_SECRET!,
);

export async function getStatsigValues(user: StatsigUser): Promise<Record<string, unknown>> {
  await isStatsigReady;

  const values = Statsig.getClientInitializeResponse(user);

  return values ?? {};
}