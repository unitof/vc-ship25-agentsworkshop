import { codingAgent } from "./agent";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

codingAgent(
  "Add a contributing section to the readme of this project. Use standard format.",
  "https://github.com/nicoalbanese/ship-25-nextjs-playground",
)
  .then(console.log)
  .catch(console.error);