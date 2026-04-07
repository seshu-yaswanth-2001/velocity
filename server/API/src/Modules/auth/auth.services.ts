import bcrypt from "bcrypt";
import { RegisterUser } from "@velocity/shared";
import { UserModel } from "./user.model";

export class AuthService {
  /**
   * Creates a new user in the database
   * @param userData Data from the registration form (validated by Zod)
   */
  
  static async register(userData: RegisterUser) {
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // Hash the password
    // Salt rounds = 10
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    const newUser = await UserModel.create({
      ...userData,
      password: hashedPassword,
    });

    return newUser;
  }

  /**
   * Validates user credentials for login
   */
  static async validateUser(email: string, pass: string) {
    // We must explicitly '.select("+password")' because we hid it in the model
    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) return null;

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) return null;

    return user;
  }
}
