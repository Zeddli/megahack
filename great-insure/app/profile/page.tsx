"use client"

import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import WalletButton from '../components/WalletButton';
import AuthGuard from '../components/AuthGuard';
import { useAuth } from '../contexts/AuthContext';

export default function ProfilePage() {
  const [editing, setEditing] = useState<boolean>(false);
  const { logout } = useAuth();
  
  const profileContent = (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Your Profile</h1>
        <p className="text-secondary">Manage your account settings and preferences</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {/* User Profile Information with Wallet Integration - removed */}
          
          {/* Account Summary - Now appears first in the main content */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-muted">
              <h2 className="text-2xl font-bold">Account Summary</h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-secondary">Account Status</div>
                  <div className="font-medium">Active</div>
                </div>
                
                <div>
                  <div className="text-sm text-secondary">Member Since</div>
                  <div className="font-medium">January 2023</div>
                </div>
                
                <div>
                  <div className="text-sm text-secondary">Active Policies</div>
                  <div className="font-medium">2</div>
                </div>
                
                <div>
                  <div className="text-sm text-secondary">Total Coverage</div>
                  <div className="font-medium">$350.00</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Notification Preferences - Now appears after Account Summary */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
            <div className="p-6 border-b border-muted">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Notification Preferences</h2>
                {!editing ? (
                  <button 
                    className="text-black hover:text-black-hover"
                    onClick={() => setEditing(true)}
                  >
                    Edit
                  </button>
                ) : (
                  <div className="flex space-x-3">
                    <button 
                      className="text-red-500 hover:text-red-700"
                      onClick={() => setEditing(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      className="text-black hover:text-black-hover font-medium"
                      onClick={() => setEditing(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="email" 
                    name="email"
                    defaultChecked={true}
                    disabled={!editing}
                    className="h-4 w-4 text-black focus:ring-primary-hover border-gray-300 rounded"
                  />
                  <label htmlFor="email" className="ml-2 block text-sm">
                    Email Notifications
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="sms" 
                    name="sms"
                    defaultChecked={true}
                    disabled={!editing}
                    className="h-4 w-4 text-black focus:ring-primary-hover border-gray-300 rounded"
                  />
                  <label htmlFor="sms" className="ml-2 block text-sm">
                    SMS Notifications
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="weatherAlerts" 
                    name="weatherAlerts"
                    defaultChecked={true}
                    disabled={!editing}
                    className="h-4 w-4 text-black focus:ring-primary-hover border-gray-300 rounded"
                  />
                  <label htmlFor="weatherAlerts" className="ml-2 block text-sm">
                    Weather Alerts
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="policyReminders" 
                    name="policyReminders"
                    defaultChecked={false}
                    disabled={!editing}
                    className="h-4 w-4 text-black focus:ring-primary-hover border-gray-300 rounded"
                  />
                  <label htmlFor="policyReminders" className="ml-2 block text-sm">
                    Policy Renewal Reminders
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
            <div className="p-4 bg-primary text-black">
              <h3 className="font-bold">Wallet Options</h3>
            </div>
            
            <div className="p-4">
              <div className="mb-3">
                <div className="text-sm text-secondary mb-2">Wallet Connection</div>
                <WalletButton />
              </div>
              
              <hr className="my-4 border-muted" />
              
              <button className="w-full py-2 mt-2 bg-primary-hover text-black rounded-md hover:opacity-90 transition-all font-medium">
                Change Password
              </button>
              
              <button 
                className="w-full py-2 mt-2 text-red-500 hover:text-red-700 transition-colors font-medium"
                onClick={logout}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
  
  return <AuthGuard fallback={null}>{profileContent}</AuthGuard>;
} 