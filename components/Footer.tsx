import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-gray-400 py-16 border-t border-gray-800 text-sm">
      <div className="container mx-auto px-4 md:px-6 text-center">
        
        {/* Contact Section */}
        <div className="mb-10">
          <h5 className="text-white font-bold text-lg mb-4">Contact</h5>
          <div className="flex flex-col gap-2 text-gray-400 items-center justify-center">
            <p className="text-base">이메일 : sales@estc.co.kr | 전화 : 02-567-0510</p>
            <p className="text-base">평일 09:00 - 18:00 (점심시간 12:00 - 13:00 | 주말/공휴일 휴무)</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div>
          <p className="text-gray-600">
            © 2026 ESTC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;