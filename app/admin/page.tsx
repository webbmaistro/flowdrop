"use client"

import React, { useState, useEffect } from 'react';
import { Download, LogOut } from 'lucide-react';

interface SubscriberEmail {
  email: string;
  created_at: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emails, setEmails] = useState<SubscriberEmail[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      fetchEmails();
      fetchCount();
    }
  }, [isAuthenticated]);

  const fetchEmails = async () => {
    try {
      const response = await fetch('/api/admin/emails');
      const data = await response.json();
      if (data.success) {
        setEmails(data.emails);
      }
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };

  const fetchCount = async () => {
    try {
      const response = await fetch('/api/subscriberList');
      const data = await response.json();
      if (data.success) {
        setTotalCount(data.count);
      }
    } catch (error) {
      console.error('Error fetching count:', error);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'webb' && password === 'Hootch0925!') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const exportToCSV = () => {
    const headers = ['Email', 'Created At'];
    const csvContent = [
      headers.join(','),
      ...emails.map(email => [
        email.email,
        new Date(email.created_at).toLocaleString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'subscriberList_emails.csv';
    link.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-gray-900 rounded-xl border border-gray-800">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="grid gap-8">
          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Total Signups</h2>
              <button
                onClick={exportToCSV}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
            <p className="text-4xl font-bold">{totalCount}</p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <h2 className="text-xl font-semibold mb-4">Email List</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-800">
                    <th className="pb-4">Email</th>
                    <th className="pb-4">Signup Date</th>
                  </tr>
                </thead>
                <tbody>
                  {emails.map((email, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-4">{email.email}</td>
                      <td className="py-4">
                        {new Date(email.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 