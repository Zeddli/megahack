"use client";

import { ReactNode } from 'react';
import { UserDataProvider as Provider } from '../contexts/UserDataContext';

interface UserDataProviderProps {
  children: ReactNode;
}

export default function UserDataProvider({ children }: UserDataProviderProps) {
  return <Provider>{children}</Provider>;
} 