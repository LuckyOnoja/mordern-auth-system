// src/types/express.d.ts
import "express";

declare global {
  namespace Express {
    interface User {
      googleId: string;
      username: string;
      role: string;
    }
  }
}
