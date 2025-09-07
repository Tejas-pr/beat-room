import express from "express";
import dotenv from "dotenv";
import { prisma } from "@workspace/db";

dotenv.config();

const app = express();

const PORT = process.env.BE_PORT || 8000;
console.log("process.env.DATABASE_URL", process.env.DATABASE_URL);
console.log("process.env.PORT", process.env.BE_PORT);

app.get("/", async (req, res) => {
  const data = await prisma.post.findMany();
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
