# @velocity/shared

Shared validation schemas and types for the Velocity project management suite.

This package exports Zod schemas and TypeScript types that are used consistently across both the client and server applications.

## Usage

### In Client

```typescript
import { userSchema, User } from '@velocity/shared';

// Validate user data
const validatedUser = userSchema.parse(userData);

// Type-safe user variable
const user: User = { ... };
```

### In Server

```typescript
import { createUserSchema, CreateUser } from '@velocity/shared';

// Validate incoming request data
app.post('/users', (req, res) => {
  const result = createUserSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json(result.error);
  }
  // result.data is type-safe
});
```

## Schemas

### User Schema

- **`userSchema`**: Full user object with all fields (including optional id, timestamps)
- **`createUserSchema`**: For creating new users (excludes id and timestamps)
- **`updateUserSchema`**: For updating users (all fields optional except id)

## Types

All types are derived from schemas using Zod's `z.infer`:
- `User`: Full user type
- `CreateUser`: User creation type
- `UpdateUser`: User update type

## Adding New Schemas

1. Create a new file in `src/schemas/` (e.g., `project.ts`)
2. Export schemas and types
3. Re-export from `src/index.ts`

## Building

```bash
npm run build
npm run dev  # Watch mode
```
