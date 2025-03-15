import React from 'react';
import { Home, Users, Settings, BarChart2, Mail, ChevronLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: BarChart2, label: 'Analytics', path: '/analytics' },
  { icon: Users, label: 'Customers', path: '/customers' },
  { icon: Mail, label: 'Messages', path: '/messages' },
  { icon: Settings, label: 'Settings', path: '/settings' }
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <aside 
      className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64' : 'w-20'} bg-indigo-700 text-white pt-20`}
    >
      <button
        onClick={onToggle}
        className="absolute right-0 top-20 bg-indigo-600 p-2 transform translate-x-1/2 rounded-full hover:bg-indigo-500 transition-colors"
      >
        <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${!isOpen ? 'rotate-180' : ''}`} />
      </button>

      <nav className="space-y-2 px-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `
              flex items-center space-x-4 p-3 rounded-lg transition-colors
              ${isActive ? 'bg-indigo-800' : 'hover:bg-indigo-600'}
            `}
          >
            <item.icon className="w-6 h-6" />
            {isOpen && <span className="font-medium">{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}