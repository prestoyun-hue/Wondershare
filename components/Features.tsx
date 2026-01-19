import React from 'react';
import { Wallet, Bot, Zap, Shield } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    icon: <Wallet className="w-8 h-8 text-white" />,
    title: "압도적인 비용 절감",
    description: "구독 피로 없는 합리적인 가격",
    detail: "타사 대비 최대 70% 비용 절감, 영구 라이선스(Perpetual) 및 유연한 구독 모델 지원."
  },
  {
    icon: <Bot className="w-8 h-8 text-white" />,
    title: "AI 기반 스마트 워크",
    description: "AI 비서 Lumi와 함께 문서 혁신",
    detail: "ChatGPT 기반 AI 기능으로 긴 보고서 요약, 다국어 번역, 문장 교정을 즉시 처리합니다."
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "제로 러닝 커브",
    description: "MS Word처럼 쉬운 인터페이스",
    detail: "별도의 교육 없이 누구나 바로 편집, 변환, 서명 기능을 직관적으로 사용할 수 있습니다."
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "엔터프라이즈급 관리",
    description: "강력한 보안과 통합 라이선스 관리",
    detail: "웹 기반 Admin Console로 사용자 관리, 민감 정보 교정(Redaction), 법적 효력 e-Sign 제공."
  }
];

const costData = [
  { name: 'Adobe Acrobat', cost: 100 },
  { name: 'PDFelement', cost: 40 },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            왜 전 세계 기업들이<br/>
            <span className="text-wondershare-blue">PDFelement</span>를 선택할까요?
          </h2>
          <p className="text-lg text-gray-600">
            복잡한 기능은 덜어내고, 꼭 필요한 기능은 더 강력하게.<br/>
            비용 효율성과 생산성을 동시에 잡는 유일한 솔루션입니다.
          </p>
        </div>

        {/* Top Section: Cost Chart & Main Value */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20 bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
          <div className="w-full md:w-1/2">
             <h3 className="text-2xl font-bold mb-4">비용 절감 효과 시뮬레이션</h3>
             <p className="text-gray-600 mb-6">
               연간 라이선스 비용 기준, 도입 즉시 <span className="text-point-orange font-bold">60% 이상의 예산</span>을 절감할 수 있습니다.
             </p>
             <ul className="space-y-3 mb-6">
               <li className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-wondershare-blue rounded-full"></div>
                 <span className="text-sm font-medium">영구 라이선스 옵션 보유</span>
               </li>
               <li className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-wondershare-blue rounded-full"></div>
                 <span className="text-sm font-medium">유연한 볼륨 라이선스 정책</span>
               </li>
             </ul>
          </div>
          <div className="w-full md:w-1/2 h-64 bg-white rounded-xl p-4 shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12, fontWeight: 'bold'}} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="cost" radius={[0, 4, 4, 0]} barSize={40}>
                  {costData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#9CA3AF' : '#0065F2'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-xs text-gray-400 mt-2">* TCO 기준 예상 비교 수치입니다.</p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="w-14 h-14 bg-wondershare-blue rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-wondershare-blue font-medium mb-3">{feature.description}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;