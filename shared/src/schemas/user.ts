import { z } from "zod";

/**
 * User validation schema
 * Used across client and server for consistent user data validation
 */
export const userSchema = z.object({
  id: z.string().optional(),
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  avatar: z.string().url("Invalid avatar URL").optional().nullable(),
  role: z.enum(["admin", "lead", "devs"]).default("devs"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

/**
 * User creation schema (excludes id and timestamps)
 */
export const createUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Registration schema (includes password)
export const registerUserSchema = userSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

/**
 * User update schema (all fields optional except id)
 */
export const updateUserSchema = userSchema
  .omit({
    createdAt: true,
    updatedAt: true,
  })
  .partial();

export type User = z.infer<typeof userSchema>;
export type CreateUser = z.infer<typeof createUserSchema>;
export type RegisterUser = z.infer<typeof registerUserSchema>;
export type UpdateUser = z.infer<typeof updateUserSchema>;
