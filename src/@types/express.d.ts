// @types/express.d.ts
import "express";

declare global {
  namespace Express {
    // Matching the field from the user model
    interface User {
      googleId: string;
      username: string;
      role: string;
    }
  }
}
