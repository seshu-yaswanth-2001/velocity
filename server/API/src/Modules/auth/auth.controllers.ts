import { Request, Response } from "express";
import { AuthService } from "./auth.services";
import { registerUserSchema } from "@velocity/shared";

export class AuthController {
  /**
   * POST /api/v1/auth/register
   */
  static async register(req: Request, res: Response) {
    try {
      // Validate the Request Body using the Shared Zod Schema
      //
      const validatedData = registerUserSchema.parse(req.body);

      // Call the Service to handle DB logic and Hashing
      const user = await AuthService.register(validatedData);

      // Send back the success response

      return res.status(201).json({
        status: "success",
        message: "User registered successfully",
        data: { user },
      });
    } catch (error: any) {
      // Basic error handling - will improve this with Global Middleware later
      return res.status(400).json({
        status: "fail",
        message: error.message || "Registration failed",
      });
    }
  }

  /**
   * POST /api/v1/auth/login
   */
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await AuthService.validateUser(email, password);

      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // TODO: Generate JWT and set HTTP-only Cookie here in the next step

      return res.status(200).json({
        status: "success",
        data: { user },
      });
    } catch (error: any) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
