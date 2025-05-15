/**
 * AuditLog model interface
 */
export interface AuditLog {
  $id: string;
  userId?: string;
  action: string;
  entity: string;
  entityId?: string;
  oldValues?: string; // JSON string
  newValues?: string; // JSON string
  metadata?: string;  // JSON string
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;  // ISO date string
}

/**
 * AuditLog creation data
 */
export type AuditLogCreateData = Omit<AuditLog, '$id' | 'createdAt'>;

/**
 * Type for data to be stored as JSON
 */
export interface AuditLogDataValues {
  oldValues?: Record<string, any>;
  newValues?: Record<string, any>;
  metadata?: Record<string, any>;
} 