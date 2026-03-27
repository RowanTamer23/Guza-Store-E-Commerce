import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-8 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-black tracking-tighter text-gray-900">
              GUZA STORE
            </h2>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">
              Premium E-Commerce Experience
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500 font-medium">
              © {new Date().getFullYear()} Built with React, Tailwind & TS
            </p>
            <div className="flex gap-4 mt-2 justify-center md:justify-end">
              <span className="text-xs text-gray-400 hover:text-blue-600 cursor-pointer transition-colors">Privacy</span>
              <span className="text-xs text-gray-400 hover:text-blue-600 cursor-pointer transition-colors">Terms</span>
              <span className="text-xs text-gray-400 hover:text-blue-600 cursor-pointer transition-colors">Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;