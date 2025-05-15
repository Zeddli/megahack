/**
 * OracleSource model interface
 */
export interface OracleSource {
  $id: string;
  name: string;
  sourceType?: string;
  endpoint?: string;
  createdAt: string;  // ISO date string
}

/**
 * OracleSource creation data
 */
export type OracleSourceCreateData = Omit<OracleSource, '$id' | 'createdAt'>; 