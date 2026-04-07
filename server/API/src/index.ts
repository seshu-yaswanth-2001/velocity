import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { connectDB } from "./config/db.js";
import authRoutes from "./Modules/auth/auth.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, "../.env") });

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use("/api/v1/auth", authRoutes);

connectDB();

// Temporary test to create a user - will remove this later after testing the registration flow from the client
// const testUser = async () => {
//   try {
//     const user = await UserModel.create({
//       email: "seshu@gmail.com",
//       firstName: "Seshu",
//       lastName: "Kumar",
//       password: "password123",
//       role: "admin",
//     });
//     console.log("Test user created:", user);
//   } catch (err) {
//     console.error("Error creating test user:", err);
//   }
// };

// testUser();

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "Velocity API is up and running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Velocity API is running on port ${PORT}`);
});
