import React from 'react';
import { CheckCircle, ShieldCheck, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden flex items-center justify-center min-h-[550px]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Base Image with Blur - Ring Note Image */}
        <img 
          src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2301&auto=format&fit=crop" 
          alt="Office Background with Ring Note" 
          className="w-full h-full object-cover blur-sm scale-105 opacity-50"
        />
        {/* Pastel Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-indigo-100/70 to-purple-100/70 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-blue-50/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-gray-900">
        
        {/* G2 Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/50 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-sm text-gray-700">
          <Star size={14} className="text-yellow-400" fill="currentColor" />
          <span>G2 Crowd Leader 2024</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-gray-900 drop-shadow-sm">
          기업의 문서 업무,<br className="md:hidden" /> 이제 더 가볍고 똑똑해집니다
        </h1>
        
        {/* Subtitle / Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium max-w-3xl mx-auto leading-relaxed">
          전 세계 100만 기업이 선택한 올인원 PDF 솔루션, Wondershare PDFelement
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a 
            href="#contact" 
            onClick={scrollToContact}
            className="inline-flex items-center justify-center bg-point-orange hover:bg-point-darkOrange text-white text-lg font-bold px-10 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            무료 체험 신청
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
          <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full backdrop-blur-sm border border-white/50 shadow-sm">
            <ShieldCheck className="text-green-500" size={16} />
            <span>ISO 27001 보안 인증</span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full backdrop-blur-sm border border-white/50 shadow-sm">
            <CheckCircle className="text-green-500" size={16} />
            <span>영구 라이선스 지원</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;