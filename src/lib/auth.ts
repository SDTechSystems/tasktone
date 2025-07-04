import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'
import { prisma } from './prisma'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret'

export interface JWTPayload {
  userId: string
  email: string
  role: 'USER' | 'WORKER'
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload
  } catch {
    return null
  }
}

export async function getUserFromRequest(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value
  
  if (!token) {
    return null
  }

  const payload = verifyToken(token)
  if (!payload) {
    return null
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      paypalEmail: true,
      createdAt: true,
    }
  })

  return user
}

export function requireAuth(handler: Function) {
  return async (request: NextRequest, context: any) => {
    const user = await getUserFromRequest(request)
    
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    return handler(request, { ...context, user })
  }
}

export function requireRole(role: 'USER' | 'WORKER') {
  return function(handler: Function) {
    return async (request: NextRequest, context: any) => {
      const user = await getUserFromRequest(request)
      
      if (!user) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 })
      }

      if (user.role !== role) {
        return Response.json({ error: 'Forbidden' }, { status: 403 })
      }

      return handler(request, { ...context, user })
    }
  }
}
