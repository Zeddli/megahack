import BaseRepository from './BaseRepository';
// import { AuditLog, AuditLogCreateData } from '../models/AuditLog';
import { config } from '../config/appwrite';
import { Query } from 'node-appwrite';


interface AuditLog {
  $id: string;
  userId?: string;
  action: string;
  entity: string;
  entityId?: string;
  oldValues?: string;
  newValues?: string;
  metadata?: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
}

interface AuditLogCreateData {
  userId?: string;
  action: string;
  entity: string;
  entityId?: string;
  oldValues?: Record<string, any>;
  newValues?: Record<string, any>;
  metadata?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
}

export default class AuditLogRepository extends BaseRepository<AuditLog> {
  constructor() {
    super(config.collections.auditLogs);
  }

  async createAuditLog(data: AuditLogCreateData): Promise<AuditLog> {
    // Convert objects to JSON strings
    const formattedData = {
      ...data,
      oldValues: data.oldValues ? JSON.stringify(data.oldValues) : undefined,
      newValues: data.newValues ? JSON.stringify(data.newValues) : undefined,
      metadata: data.metadata ? JSON.stringify(data.metadata) : undefined,
      createdAt: new Date().toISOString()
    };

    return this.create(formattedData);
  }

  async findByEntity(entity: string, entityId: string, limit = 100): Promise<AuditLog[]> {
    return this.findWithQueries([
      Query.equal('entity', entity),
      Query.equal('entityId', entityId),
      Query.orderDesc('createdAt'),
      Query.limit(limit)
    ]);
  }

  async findByUser(userId: string, limit = 100): Promise<AuditLog[]> {
    return this.findWithQueries([
      Query.equal('userId', userId),
      Query.orderDesc('createdAt'),
      Query.limit(limit)
    ]);
  }

  async findByEntityAndAction(
    entity: string, 
    action: string, 
    limit = 100
  ): Promise<AuditLog[]> {
    return this.findWithQueries([
      Query.equal('entity', entity),
      Query.equal('action', action),
      Query.orderDesc('createdAt'),
      Query.limit(limit)
    ]);
  }

  async findRecent(limit = 100): Promise<AuditLog[]> {
    return this.findWithQueries([
      Query.orderDesc('createdAt'),
      Query.limit(limit)
    ]);
  }

  async findByDateRange(
    startDate: Date,
    endDate: Date,
    limit = 100
  ): Promise<AuditLog[]> {
    return this.findWithQueries([
      Query.greaterThanEqual('createdAt', startDate.toISOString()),
      Query.lessThanEqual('createdAt', endDate.toISOString()),
      Query.orderDesc('createdAt'),
      Query.limit(limit)
    ]);
  }

  /**
   * Find audit logs by action
   * @param action - Action type
   * @param limit - Number of results to return
   * @returns Array of audit logs
   */
  async findByAction(action: string, limit = 100): Promise<AuditLog[]> {
    const result = await this.findWithQueries([
      Query.equal('action', action),
      Query.orderDesc('createdAt'),
      Query.limit(limit)
    ]);
    
    return result;
  }

  parseJsonFields(log: AuditLog): AuditLog & {
    parsedOldValues?: Record<string, any>;
    parsedNewValues?: Record<string, any>;
    parsedMetadata?: Record<string, any>;
  } {
    return {
      ...log,
      parsedOldValues: log.oldValues ? JSON.parse(log.oldValues) : undefined,
      parsedNewValues: log.newValues ? JSON.parse(log.newValues) : undefined,
      parsedMetadata: log.metadata ? JSON.parse(log.metadata) : undefined
    };
  }
}