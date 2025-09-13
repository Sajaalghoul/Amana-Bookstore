// src/app/components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-12 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-sm text-gray-600 text-center md:text-left">
          © {new Date().getFullYear()} Amana Bookstore — Built by <span className="font-semibold">Group X</span>
        </div>
        
        <div className="flex space-x-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1s-4.18 1.64-6.72 2.04A4.48 4.48 0 0016 0a4.48 4.48 0 00-4.48 4.48c0 .35.04.7.11 1.03A12.73 12.73 0 013 1.64s-4 9 5 13a13.17 13.17 0 01-7.93 2.72A12.73 12.73 0 0012 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.53A8.36 8.36 0 0023 3z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.62-1.3 1.3V12h2.2l-.35 3h-1.85v7A10 10 0 0022 12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
