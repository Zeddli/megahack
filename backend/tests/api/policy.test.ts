import request from 'supertest';
import express from 'express';
import policyRoutes from '../../src/routes/policyRoutes';
import { authenticate } from '../../src/middleware/authMiddleware';

// Mock authentication middleware
jest.mock('../../src/middleware/authMiddleware', () => ({
  authenticate: jest.fn((req, res, next) => {
    req.user = {
      id: '1',
      email: 'test@example.com',
      role: 'USER'
    };
    next();
  }),
  isAdmin: jest.fn((req, res, next) => next()),
  AuthRequest: {}
}));

// Mock Prisma client
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    policy: {
      findMany: jest.fn().mockResolvedValue([]),
      findUnique: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockResolvedValue({}),
      update: jest.fn().mockResolvedValue({})
    }
  }))
}));

describe('Policy Routes', () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/policies', policyRoutes);
  });

  describe('GET /policies/user', () => {
    it('should return user policies', async () => {
      const response = await request(app).get('/policies/user');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });
  });

  describe('GET /policies', () => {
    it('should return policies with filtering', async () => {
      const response = await request(app).get('/policies?status=active&riskPoolId=1');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });
  });
}); 