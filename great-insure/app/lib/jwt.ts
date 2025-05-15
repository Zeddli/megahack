import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'farm-protection-secret-key-development-only';

interface JWTSignOptions {
  expiresIn?: string | number;
  audience?: string;
  issuer?: string;
}

export function jwtSign(payload: Record<string, unknown>, options: JWTSignOptions = {}) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: options.expiresIn ?? '1h',
    audience: options.audience ?? 'farm-protection-app',
    issuer: options.issuer ?? 'farm-protection-api',
  });
}

export function jwtVerify(token: string): JwtPayload | string | null {
  if (!token || token.trim() === '') {
    console.error('JWT verification error: Empty token provided');
    return null;
  }
  
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.error('JWT verification error:', error);
    return null;
  }
}

export function jwtDecode(token: string): JwtPayload | string | null {
  if (!token || token.trim() === '') {
    console.error('JWT decode error: Empty token provided');
    return null;
  }
  
  try {
    return jwt.decode(token);
  } catch (error) {
    console.error('JWT decode error:', error);
    return null;
  }
} 