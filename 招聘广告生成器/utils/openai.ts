import OpenAI from 'openai';

export const generateJobDescription = async (
    data: {
        jobTitle: string;
        industry: string;
        companyProfile: string;
        keyWords: string;
        tone: string;
        numWords: number;
    }
) => {
    const apiKey = 'sk-bvbrgrrczqstuxjlvbyfxwnkcmfkuqjeapvdeylbvlczsnoh';
    const openai = new OpenAI({
        apiKey: apiKey,
        baseURL: 'https://api.siliconflow.cn/v1/',
        dangerouslyAllowBrowser: true, // Client-side usage as per requirements
    });

    const prompt = `
请为一家${data.industry}公司写一份关于${data.jobTitle}职位的招聘广告。
公司简介如下：${data.companyProfile}。
职位要求包含以下技能或关键词：${data.keyWords}。
广告语气应该是：${data.tone}。
字数大约在${data.numWords}字左右。
请使用中文撰写，注重吸引力。
  `;

    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'deepseek-ai/DeepSeek-V3',
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error generating job description:', error);
        throw error;
    }
};
