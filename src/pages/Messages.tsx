import React from 'react';
import { Mail } from 'lucide-react';

export function Messages() {
  const messages = [
    { id: 1, from: 'Alice Johnson', subject: 'Project Update', time: '10:30 AM', unread: true },
    { id: 2, from: 'Bob Smith', subject: 'Meeting Notes', time: 'Yesterday', unread: false },
    { id: 3, from: 'Carol Williams', subject: 'New Feature Request', time: '2 days ago', unread: true },
  ];

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600">Check your inbox and communications.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 border-b last:border-b-0 flex items-center space-x-4 ${
              message.unread ? 'bg-indigo-50' : ''
            }`}
          >
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">{message.from}</p>
                <p className="text-sm text-gray-500">{message.time}</p>
              </div>
              <p className="text-sm text-gray-600 truncate">{message.subject}</p>
            </div>
            {message.unread && (
              <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}