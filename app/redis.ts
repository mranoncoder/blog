import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: 'https://curious-wasp-37511.upstash.io',
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export default redis;
