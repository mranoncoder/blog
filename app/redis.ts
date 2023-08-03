import { Redis, RedisConfigNodejs } from "@upstash/redis";

const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN ?? "";

const redisConfig: RedisConfigNodejs = {
  url: "https://curious-wasp-37511.upstash.io",
  token: redisToken, 
};

const redis = new Redis(redisConfig);

export default redis;
