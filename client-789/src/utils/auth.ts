// src/utils/auth.js

export default function verifyToken(token: any) {
  try {
    return !!token;
  } catch (error) {
    return false;
  }
}
