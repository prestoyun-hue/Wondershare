import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { TEAM_SIZES, INTEREST_AREAS } from '../constants';
import { FormData } from '../types';

// TODO: [단계 3]에서 복사한 '웹 앱 URL'을 아래 따옴표 안에 붙여넣으세요.
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxau5zhsjp1Dnu-zFq38lwD3PiBJQlcMSHv01UF3zn_KYNNeRo9Qq0yrR0wAwbheamaJg/exec";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    teamSize: '',
    interests: [],
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('submitting');

    try {
      // Google Apps Script는 CORS 정책상 'no-cors' 모드를 사용하거나, 
      // text/plain으로 전송하여 Preflight 요청을 피하는 것이 안정적입니다.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(formData),
      });

      setStatus('success');
      setFormData({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        teamSize: '',
        interests: [],
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900 flex items-center justify-center min-h-[600px] scroll-mt-28">
        <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl max-w-lg mx-4 shadow-xl border border-blue-100">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-gray-900">문의가 접수되었습니다!</h2>
          <p className="text-lg text-gray-600 mb-6">
            전문 컨설턴트가 입력하신 연락처로<br/>순차적으로 연락 드립니다.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="bg-point-orange hover:bg-point-darkOrange text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            돌아가기
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative scroll-mt-28">
      {/* Background Decor - Pastel Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-200/50 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-200/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">도입 문의 및 제안서 신청</h2>
          <p className="text-gray-600">
            우리 회사에 딱 맞는 최적의 플랜을 제안받으세요.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl text-gray-800 border border-white/50">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">이름 / 직함 <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="name"
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white/50 focus:bg-white"
                placeholder="홍길동 / 팀장"
                value={formData.name}
                onChange={handleInputChange}
                disabled={status === 'submitting'}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">회사명 <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="companyName"
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white/50 focus:bg-white"
                placeholder="회사명"
                value={formData.companyName}
                onChange={handleInputChange}
                disabled={status === 'submitting'}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">회사 이메일 <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white/50 focus:bg-white"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleInputChange}
                disabled={status === 'submitting'}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">연락처</label>
              <input 
                type="tel" 
                name="phone"
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white/50 focus:bg-white"
                placeholder="010-1234-5678"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={status === 'submitting'}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">도입 예상 인원</label>
            <select 
              name="teamSize"
              className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white/50 focus:bg-white"
              value={formData.teamSize}
              onChange={handleInputChange}
              disabled={status === 'submitting'}
            >
              <option value="">인원을 선택해주세요</option>
              {TEAM_SIZES.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">관심 분야 (중복 선택 가능)</label>
            <div className="flex flex-wrap gap-2">
              {INTEREST_AREAS.map(interest => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleCheckboxChange(interest)}
                  disabled={status === 'submitting'}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    formData.interests.includes(interest)
                      ? 'bg-blue-100 border-blue-400 text-wondershare-blue'
                      : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1">문의 내용</label>
            <textarea 
              name="message"
              rows={3}
              className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition bg-white/50 focus:bg-white"
              placeholder="추가적인 질문이나 요청사항이 있으시면 적어주세요."
              value={formData.message}
              onChange={handleInputChange}
              disabled={status === 'submitting'}
            ></textarea>
          </div>

          {status === 'error' && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm">
              <AlertCircle size={18} />
              <span>전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</span>
            </div>
          )}

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full bg-point-orange hover:bg-point-darkOrange disabled:bg-gray-400 text-white text-lg font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                전송 중...
              </>
            ) : (
              <>
                문의 하기 <Send size={20} />
              </>
            )}
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-4">
            제출 시 개인정보 처리방침에 동의하는 것으로 간주합니다.<br/>
            버튼을 클릭하면 담당자에게 내용이 전달되며 순차적으로 연락드립니다.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;