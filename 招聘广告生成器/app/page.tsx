'use client';

import { useState } from 'react';
import { generateJobDescription } from '../utils/openai';
import { Toaster, toast } from 'react-hot-toast';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [jobDescription, setJobDescription] = useState('');

    const [formData, setFormData] = useState({
        jobTitle: '',
        industry: '',
        companyProfile: '',
        keyWords: '',
        tone: '',
        numWords: 200,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        try {
            const jd = await generateJobDescription(formData);
            setJobDescription(jd || '生成失败，请重试');
            toast.success('生成成功！');
        } catch (error) {
            toast.error('生成出错，请检查 API Key 或网络');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-[#fdfaf3]">
            <Toaster position="top-center" />

            <main className="flex flex-col items-center w-full max-w-7xl space-to-y-8">
                <h1 className="text-5xl font-bold text-stone-800 mb-2 font-kaiti">
                    招聘广告<span className="text-[#b3a08d]">生成器</span>
                </h1>
                <p className="text-xl text-stone-600 mb-10 font-serif italic">
                    Generate Job Description Faster with AI
                </p>

                <div className="w-full bg-white shadow-xl rounded-2xl overflow-hidden border border-stone-100">
                    <div className="grid grid-cols-1 md:grid-cols-3">

                        {/* Left Column: Input Form (1/3) */}
                        <div className="p-8 bg-[#f7f1e6] border-r border-stone-100 md:col-span-1">
                            <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                                <span className="mr-2">📥</span> 输入指令
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">



                                <div>
                                    <label className="block text-lg font-medium text-slate-800 mb-2">职位名称</label>
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        placeholder="例如：高级前端工程师"
                                        className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-slate-800 mb-2">所属行业/公司</label>
                                    <input
                                        type="text"
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        placeholder="例如：互联网科技公司"
                                        className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-slate-800 mb-2">公司简介 (可选)</label>
                                    <textarea
                                        name="companyProfile"
                                        value={formData.companyProfile}
                                        onChange={handleChange}
                                        placeholder="简要描述公司的企业文化、使命或规模..."
                                        rows={3}
                                        className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-slate-800 mb-2">核心技能 (关键词)</label>
                                    <textarea
                                        name="keyWords"
                                        value={formData.keyWords}
                                        onChange={handleChange}
                                        placeholder="例如：React, TypeScript, 良好的沟通能力..."
                                        rows={3}
                                        className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all resize-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-slate-800 mb-2">语气风格</label>
                                    <select
                                        name="tone"
                                        value={formData.tone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all"
                                    >
                                        <option value="专业严谨">专业严谨</option>
                                        <option value="轻松活泼">轻松活泼</option>
                                        <option value="充满激情">充满激情</option>
                                        <option value="诚恳实在">诚恳实在</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-slate-800 mb-2">大致字数: {formData.numWords}</label>
                                    <input
                                        type="range"
                                        name="numWords"
                                        min="100"
                                        max="1000"
                                        step="50"
                                        value={formData.numWords}
                                        onChange={handleChange}
                                        className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#b3a08d]"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 px-6 bg-[#b3a08d] hover:bg-[#a3907d] text-white font-bold text-lg rounded-xl shadow-lg transform transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            正在生成...
                                        </span>
                                    ) : (
                                        '生成招聘广告'
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Output (2/3) */}
                        <div className="p-8 bg-white min-h-[600px] flex flex-col md:col-span-2">
                            <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                                <span className="mr-2">📝</span> 生成结果
                            </h2>

                            <div className="flex-1 bg-[#fdfaf3] border border-stone-200 rounded-xl overflow-hidden shadow-inner flex">
                                {jobDescription ? (
                                    <textarea
                                        value={jobDescription}
                                        onChange={(e) => setJobDescription(e.target.value)}
                                        className="w-full h-full p-6 bg-transparent text-stone-800 text-lg leading-relaxed resize-none focus:outline-none focus:ring-0"
                                    />
                                ) : (
                                    <div className={`h-full w-full flex flex-col items-center justify-center text-stone-400 ${loading ? 'opacity-100' : ''}`}>
                                        <div className={loading ? 'animate-float-breathing' : ''}>
                                            <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                            </svg>
                                        </div>
                                        <p>{loading ? '正在制作中...' : '等待生成...'}</p>
                                    </div>
                                )}
                            </div>

                            {jobDescription && (
                                <button
                                    onClick={() => { navigator.clipboard.writeText(jobDescription); toast.success("已复制到剪贴板") }}
                                    className="mt-4 w-full py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium rounded-lg transition-colors border border-stone-300"
                                >
                                    复制内容
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <footer className="mt-12 text-stone-500 font-serif text-sm">
                    Powered by antigravity
                </footer>
            </main>
        </div>
    );
}
