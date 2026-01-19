import React from 'react';
import { Quote, TrendingUp } from 'lucide-react';
import { COMPANY_LOGOS } from '../constants';

const SuccessStories: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-wondershare-light scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          성공적인 도입 사례
        </h2>
        <p className="text-center text-gray-600 mb-16">
          전 세계 100만 개 이상의 기업과 공공기관이 PDFelement로 업무를 혁신하고 있습니다.
        </p>

        {/* Logo Wall */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center mb-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {COMPANY_LOGOS.map((logo, idx) => (
            <div key={idx} className="h-12 flex items-center">
              <img 
                src={logo.url} 
                alt={`${logo.name} logo`} 
                className="h-full object-contain max-w-[120px]"
              />
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Case 1: Bose */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 text-gray-100 w-16 h-16" fill="currentColor" />
            <div className="relative z-10">
              <div className="mb-6">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Cost Efficiency
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                "소프트웨어 비용 70% 절감"
              </h3>
              <p className="text-gray-600 mb-8 text-lg italic leading-relaxed">
                "Adobe Acrobat 대체 후 막대한 라이선스 비용을 절감했습니다. 
                PDFelement는 비용 효율적이면서도 우리 엔지니어들에게 필요한 모든 기능을 갖추고 있습니다."
              </p>
              <div className="flex items-center gap-4 border-t pt-6">
                 <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src="https://picsum.photos/seed/bose/200" alt="Avatar" className="w-full h-full object-cover"/>
                 </div>
                 <div>
                    <p className="font-bold text-gray-900">Miguel Sanchez</p>
                    <p className="text-sm text-gray-500">IT Manager, Bose Automotive</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Case 2: Energy Company */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
             <TrendingUp className="absolute top-6 right-6 text-gray-100 w-16 h-16" />
             <div className="relative z-10">
              <div className="mb-6">
                <span className="bg-blue-100 text-wondershare-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Productivity
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                "업무 효율 30% 증가"
              </h3>
              <p className="text-gray-600 mb-8 text-lg italic leading-relaxed">
                "수기 문서의 데이터화 작업이 자동화되면서 데이터 수집 속도가 획기적으로 빨라졌습니다. 
                현장 직원들이 태블릿으로 즉시 보고서를 작성하고 공유합니다."
              </p>
              <div className="flex items-center gap-4 border-t pt-6">
                 <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src="https://picsum.photos/seed/energy/200" alt="Avatar" className="w-full h-full object-cover"/>
                 </div>
                 <div>
                    <p className="font-bold text-gray-900">Digital Transformation Lead</p>
                    <p className="text-sm text-gray-500">Global Energy T Company</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;