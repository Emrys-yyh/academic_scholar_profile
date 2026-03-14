import { ProfileData, Publication, NewsItem, ExperienceItem, AwardItem, SectionConfig } from './types';
import newsData from './news.json';
import publicationsData from './publications.json';

export const data = {
  en: {
    PROFILE: {
      name: "Hengtao Wu",
      title: "Undergraduate Student",
      affiliation: "Computer Science,Shanghai Jiao Tong University",
      email: "eternity_w@sjtu.edu.cn",
      location: "Shanghai, China",
      bio: `
        I am an undergraduate student in Computer Science at **Shanghai Jiao Tong University**, and a member of the **Yongqiang Honors Class**.
        I am currently a member of the [X-LANCE Lab](https://x-lance.sjtu.edu.cn) at SJTU, where I conduct research under the supervision of Professor [Xie Chen](https://chenxie95.github.io).
        My research interests lie in speech and language technologies, with a particular focus on speech generation and voice interaction. I am especially interested in the integration of speech systems with large language models and intelligent agents, and in exploring how speech can serve as a natural interface for intelligent systems.
        Beyond research, I am also enthusiastic about volunteer service and public-interest activities, and enjoy contributing to initiatives that use technology to create positive social impact.
      `,
      researchInterests: [
        "Audio",
        "Text-to-speech",
        "Natural Language Processing",
        "Speech Generation and Audio Generation"  
      ],
      socials: [
        { platform: 'email', url: 'mailto:eternity_w@sjtu.edu.cn' },
        // { platform: 'scholar', url: 'https://scholar.google.com', username: 'Google Scholar' },
        { platform: 'github', url: 'https://github.com/LazySheep006', username: 'GitHub' },
        { platform: 'zhihu', url: 'https://www.zhihu.com/people/13-45-83-69-15', username: 'Zhihu' },
        { platform: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/666affc400000000070070aa', username: 'Xiaohongshu' },
      ],
      lastUpdated: "2026-03-13"
    } as ProfileData,

    SECTIONS: [
      { id: 'about', title: 'About', type: 'about' },
      { id: 'news', title: 'Recent News', navLabel: 'News', type: 'news', content: newsData.en },
      { id: 'publications', title: 'Selected Publications', navLabel: 'Publications', type: 'publications', content: publicationsData.en },
      { 
        id: 'awards', 
        title: 'Awards & Honors', 
        type: 'awards', 
        content: [
          { id: 'aw1', title: "Merit Student", organization: "SJTU", year: "2025" },
          { id: 'aw2', title: "Second-Class Scholarship", organization: "SJTU", year: "2025" },
        ] 
      },
      { 
        id: 'education', 
        title: 'Education', 
        type: 'timeline', 
        content: [
          { id: 'ed1', role: "Undergraduate Student", organization: "Shanghai Jiao Tong University", period: "2024 - present", description: "Major: Computer Science and Technology, Advisor: Prof. Xie Chen" },
          { id: 'ed2', role: "Senior High Student", organization: "Hengyang No.8 High School", period: "2021 - 2024", description: "An unforgettable experience" },
          ] 
      },
      { 
        id: 'internships', 
        title: 'Internships', 
        type: 'timeline', 
        content: [
          { id: 'in1', role: "Research Intern", organization: "X-lance Lab", period: "2024.08 - present", description: "Worked on speech generation." }
        ] 
      }
    ] as SectionConfig[]
  },
  zh: {
    PROFILE: {
      name: "吴恒涛",
      title: "本科生",
      affiliation: "上海交通大学 计算机科学",
      email: "eternity_w@sjtu.edu.cn",
      location: "中国 上海",
      bio: `
        我是上海交通大学计算机科学与技术专业本科生，永强班成员。
        目前是 [X-LANCE Lab](https://x-lance.sjtu.edu.cn) 成员，在陈谐教授（[Xie Chen](https://chenxie95.github.io)）指导下开展研究。
        我的研究兴趣主要在语音与语言技术方向，关注语音生成与语音交互，以及语音系统与大语言模型和智能体系统的结合。我对探索语音作为智能系统自然交互接口的可能性尤为感兴趣。
        在科研之外，我也热衷于参与志愿服务与公益活动，希望通过技术与行动为社会创造一些积极影响。  
      `,
      researchInterests: [
        "音频",
        "文本转语音",
        "自然语言处理",
        "语音和音频生成"
      ],
      socials: [
        { platform: 'email', url: 'mailto:eternity_w@sjtu.edu.cn' },
        // { platform: 'scholar', url: 'https://scholar.google.com', username: 'Google Scholar' },
        { platform: 'github', url: 'https://github.com/LazySheep006', username: 'GitHub' },
        { platform: 'zhihu', url: 'https://www.zhihu.com/people/13-45-83-69-15', username: '知乎' },
        { platform: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/666affc400000000070070aa', username: '小红书' },
      ],
      lastUpdated: "2026-03-13"
    } as ProfileData,

    SECTIONS: [
      { id: 'about', title: '关于我', type: 'about' },
      { id: 'news', title: '最新动态', type: 'news', content: newsData.zh },
      { id: 'publications', title: '学术论文', type: 'publications', content: publicationsData.zh },
      { 
        id: 'awards', 
        title: '荣誉奖项', 
        type: 'awards', 
        content: [
          { id: 'aw1', title: "三好学生", organization: "上海交通大学", year: "2025" },
          { id: 'aw2', title: "B类奖学金", organization: "上海交通大学", year: "2025" },
          // { id: 'aw3', title: "国家奖学金", organization: "教育部", year: "2017" }
        ] 
      },
      { 
        id: 'education', 
        title: '教育背景', 
        type: 'timeline', 
        content: [
          { id: 'ed1', role: "本科生", organization: "上海交通大学(Shanghai Jiao Tong University)", period: "2024 - 至今", description: "计算机科学与技术 导师:陈谐教授" },
          { id: 'ed2', role: "高中生", organization: "衡阳市第八中学", period: "2021 - 2024", description: "这是一段难忘的回忆" },
          // { id: 'ed3', role: "计算机科学学士", organization: "加州大学伯克利分校 (UC Berkeley)", period: "2014 - 2018" }
        ] 
      },
      { 
        id: 'internships', 
        title: '实习经历', 
        type: 'timeline', 
        content: [
          { id: 'in1', role: "研究实习生", organization: "X-lance Lab", period: "2024.08 - 至今", description: "参与语音生成相关研究。" }
        ] 
      }
    ] as SectionConfig[]
  }
};
