import { z } from 'zod';

/**
 * User validation schema
 * Used across client and server for consistent user data validation
 */
export const userSchema = z.object({
  id: z.string().optional(),
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  avatar: z.string().url('Invalid avatar URL').optional().nullable(),
  role: z.enum(['admin', 'member', 'guest']).default('member'),
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

/**
 * User update schema (all fields optional except id)
 */
export const updateUserSchema = userSchema.omit({
  createdAt: true,
  updatedAt: true,
}).partial();

export type User = z.infer<typeof userSchema>;
export type CreateUser = z.infer<typeof createUserSchema>;
export type UpdateUser = z.infer<typeof updateUserSchema>;
