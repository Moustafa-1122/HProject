import { definePrismaConfig } from "prisma/config";
import "dotenv/config"

export default definePrismaConfig({
  schema: "prisma/schema.prisma",
  migrations:{
    path: "prisma/migrations",

  },
  datasources: {
      url: process.env["DATABASE_URL"],
  },
});
