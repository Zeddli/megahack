import { databases, config } from '../config/appwrite';
import { ID, Query } from 'node-appwrite';

/**
 * Base repository class that handles common database operations with Appwrite
 */
export default abstract class BaseRepository<T> {
  protected collectionId: string;
  
  /**
   * @param collectionId - The ID of the Appwrite collection
   */
  constructor(collectionId: string) {
    this.collectionId = collectionId;
  }
  
  /**
   * Create a new document in the collection
   * @param data - The data to create
   * @returns Created document
   */
  async create(data: Partial<T>): Promise<T> {
    try {
      return await databases.createDocument(
        config.databaseId,
        this.collectionId,
        ID.unique(),
        data
      ) as T;
    } catch (error) {
      console.error(`Error creating document in ${this.collectionId}:`, error);
      throw error;
    }
  }
  
  /**
   * Create a new document with a custom ID
   * @param id - Custom document ID
   * @param data - The data to create
   * @returns Created document
   */
  async createWithId(id: string, data: Partial<T>): Promise<T> {
    try {
      return await databases.createDocument(
        config.databaseId,
        this.collectionId,
        id,
        data
      ) as T;
    } catch (error) {
      console.error(`Error creating document with ID in ${this.collectionId}:`, error);
      throw error;
    }
  }
  
  /**
   * Find a document by ID
   * @param id - Document ID
   * @returns Document or null if not found
   */
  async findById(id: string): Promise<T | null> {
    try {
      return await databases.getDocument(
        config.databaseId,
        this.collectionId,
        id
      ) as T;
    } catch (error) {
      if ((error as any).code === 404) {
        return null;
      }
      console.error(`Error finding document by ID in ${this.collectionId}:`, error);
      throw error;
    }
  }
  
  /**
   * Find documents by a specific field value
   * @param field - Field to search by
   * @param value - Value to search for
   * @returns Array of matching documents
   */
  async findByField(field: string, value: any): Promise<T[]> {
    try {
      const result = await databases.listDocuments(
        config.databaseId,
        this.collectionId,
        [Query.equal(field, value)]
      );
      return result.documents as T[];
    } catch (error) {
      console.error(`Error finding documents by field in ${this.collectionId}:`, error);
      throw error;
    }
  }
  
  /**
   * Find a single document by a field value
   * @param field - Field to search by
   * @param value - Value to search for
   * @returns Document or null if not found
   */
  async findOneByField(field: string, value: any): Promise<T | null> {
    try {
      const result = await databases.listDocuments(
        config.databaseId,
        this.collectionId,
        [Query.equal(field, value), Query.limit(1)]
      );
      
      if (result.documents.length === 0) {
        return null;
      }
      
      return result.documents[0] as T;
    } catch (error) {
      console.error(`Error finding one document by field in ${this.collectionId}:`, error);
      throw error;
    }
  }
  
  /**
   * Update a document by ID
   * @param id - Document ID
   * @param data - Data to update
   * @returns Updated document
   */
  async update(id: string, data: Partial<T>): Promise<T> {
    try {
      return await databases.updateDocument(
        config.databaseId,
        this.collectionId,
        id,
        data
      ) as T;
    } catch (error) {
      console.error(`Error updating document in ${this.collectionId}:`, error);
      throw error;
    }
  }
  
  /**
   * Delete a document by ID
   * @param id - Document ID
   * @returns Success status
   */
  async delete(id: string): Promise<boolean> {
    try {
      await databases.deleteDocument(
        config.databaseId,
        this.collectionId,
        id
      );
      return true;
    } catch (error) {
      console.error(`Error deleting document in ${this.collectionId}:`, error);
      throw error;
    }
  }
  
  /**
   * Find all documents in the collection
   * @param limit - Optional limit of documents to return
   * @param offset - Optional offset for pagination
   * @returns Array of documents
   */
  async findAll(limit = 100, offset = 0): Promise<T[]> {
    try {
      const result = await databases.listDocuments(
        config.databaseId,
        this.collectionId,
        [Query.limit(limit), Query.offset(offset)]
      );
      return result.documents as T[];
    } catch (error) {
      console.error(`Error finding all documents in ${this.collectionId}:`, error);
      throw error;
    }
  }
  
  /**
   * Find documents with custom queries
   * @param queries - Array of Appwrite Query objects
   * @returns Array of matching documents
   */
  async findWithQueries(queries: string[]): Promise<T[]> {
    try {
      const result = await databases.listDocuments(
        config.databaseId,
        this.collectionId,
        queries
      );
      return result.documents as T[];
    } catch (error) {
      console.error(`Error finding documents with queries in ${this.collectionId}:`, error);
      throw error;
    }
  }
} 