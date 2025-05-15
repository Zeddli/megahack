/**
 * User model interface
 */
export interface User {
  $id: string;
  email: string;
  password: string;
  fullName?: string;
  phoneNumber?: string;
  walletAddress?: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

/**
 * User without sensitive fields
 */
export type SafeUser = Omit<User, 'password'>;

/**
 * User creation data
 */
export type UserCreateData = Omit<User, '$id' | 'createdAt' | 'updatedAt'>;

/**
 * User update data
 */
export type UserUpdateData = Partial<Omit<User, '$id' | 'createdAt' | 'updatedAt' | 'email' | 'password'>>;

/**
 * User with password update
 */
export type UserWithPasswordUpdate = UserUpdateData & {
  password?: string;
}; 