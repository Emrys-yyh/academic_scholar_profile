import { ProfileData, Publication, NewsItem, ExperienceItem, AwardItem, SectionConfig } from './types';
import newsData from './news.json';
import publicationsData from './publications.json';

export const data = {
  en: {
    PROFILE: {
      name: "Yuhang Yang",
      title: "Undergraduate Student",
      affiliation: "Mathematics,Nanjing University",
      email: "yuhangyang@smail.nju.edu.cn",
      location: "Nanjing, China",
      bio: `
      Hi, I'm Yuhang Yang, a Mathematics sophomore at Nanjing University. Driven by the philosophy that "mathematics is the soul of AI," my passion lies at the intersection of pure math and deep learning. Rather than solely focusing on engineering applications, I am captivated by the fundamental "what" and "why" behind AI models.
      My current research curiosity is inspired by associative memory models, such as generalized Hopfield Networks. I am fascinated by how abstract mathematical operations—like similarity metrics and separation functions—can fundamentally define a machine's learning behavior. I am dedicated to using rigorous math to establish the underlying logic of AI, with a specific focus on Explainable AI (XAI) and machine cognition.
      I thrive on translating complex mathematical theories into clean Python algorithms. Proficient in Python and LaTeX, and supported by a highly structured knowledge management workflow, I approach research with meticulous attention to detail. I am currently seeking opportunities to join a dynamic AI research lab to learn, grow, and contribute to cutting-edge research.
      `,
      researchInterests: [
        "Mathematical Foundations of Deep Learning",
        "Explainable AI (XAI)",
        "Associative Memory Models",
        "Cognitive & Learning Mechanisms in AI"  
      ],
      socials: [
        { platform: 'email', url: 'mailto:yuhangyang@smail.nju.edu.cn' },
        // { platform: 'scholar', url: 'https://scholar.google.com', username: 'Google Scholar' },
        { platform: 'github', url: 'https://github.com/Emrys-yyh', username: 'GitHub' },
        { platform: 'zhihu', url: 'https://www.zhihu.com/people/74-44-50-26-39', username: 'Zhihu' },
        { platform: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/692941e000000000380194d0', username: 'Xiaohongshu' },
      ],
      lastUpdated: "2026-03-14"
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
          { id: 'aw1', title: "Jiangsu Provincial Third Prize, Contemporary Undergraduate Mathematical Contest in Modeling",organization: "China Society for Industrial and Applied Mathematics",year: " Sep 2025"},
          { id: 'aw2', title: "Jiangsu Provincial Second Prize, The Chinese Mathematics Competitions", organization: "Chinese Mathematical Society", year: "Oct 2025"},
          { id: 'aw3', title: "People's Scholarship", organization: "Nanjing University", year: "Dec 2025" },
        ] 
      },
      { 
        id: 'education', 
        title: 'Education', 
        type: 'timeline', 
        content: [
          { id: 'ed1', role: "Undergraduate Student", organization: "Nanjing University", period: "2024 - present", description: "Major: Mathematics" },
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
      name: "阳宇航",
      title: "本科生",
      affiliation: "南京大学 数学",
      email: "yuhangyang@smail.nju.edu.cn",
      location: "中国 南京",
      bio: `
      你好，我是阳宇航，南京大学数学学院大二学生。我坚信“数学是人工智能的灵魂”，并致力于探索纯数学与深度学习的交叉地带。相较于单纯的工程调参，我更痴迷于探究模型背后的“是什么”与“为什么”。
      近期，我的研究兴趣深受广义 Hopfield 网络等联想记忆模型的启发，我热衷于探索如何通过相似性度量与分离函数等抽象数学操作，从底层重构机器的学习行为，我希望用严谨的数学逻辑去解释 AI，尤其关注可解释性 AI (XAI) 与机器认知领域。
      我非常享受将复杂的数学理论转化为高效 Python 代码的过程，熟练掌握 Python 与 LaTeX，并建有高度结构化的个人知识管理系统，以保持精益求精的研究状态。目前，我正积极寻找机会加入充满活力的 AI 课题组，参与激动人心的前沿科研。
      ‘
      researchInterests: [
        "深度学习的数学基础",
        "可解释性人工智能 (XAI)",
        "联想记忆模型",
        "AI 认知与学习机制"
      ],
      socials: [
        { platform: 'email', url: 'mailto:yuhangyang@smail.nju.edu.cn' },
        // { platform: 'scholar', url: 'https://scholar.google.com', username: 'Google Scholar' },
        { platform: 'github', url: 'https://github.com/Emrys-yyh', username: 'GitHub' },
        { platform: 'zhihu', url: 'https://www.zhihu.com/people/74-44-50-26-39', username: '知乎' },
        { platform: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/692941e000000000380194d0', username: '小红书' },
      ],
      lastUpdated: "2026-03-14"
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
          { id: 'aw1', title: "全国大学生数学建模竞赛江苏省三等奖", organization: "中国工业与应用数学学会", year: "2025年9月" },
          { id: 'aw2', title: "全国大学生数学竞赛江苏省二等奖", organization: "中国数学会", year: "2025年10月" },
          { id: 'aw3', title: "人民奖学金", organization: "南京大学", year: "2025年12月" },
        ] 
      },
      { 
        id: 'education', 
        title: '教育背景', 
        type: 'timeline', 
        content: [
          { id: 'ed1', role: "本科生", organization: "南京大学（Nanjing University)", period: "2024 - 至今", description: "专业：数学" },
          { id: 'ed2', role: "高中生", organization: "衡阳市第八中学", period: "2021 - 2024", description: "这是一段难忘的回忆" },
          // { id: 'ed3', role: "计算机科学学士", organization: "加州大学伯克利分校 (UC Berkeley)", period: "2014 - 2018" }
        ] 
      },
      { 
        id: 'internships', 
        title: '实习经历', 
        type: 'timeline', 
        content: [
    
        ] 
      }
    ] as SectionConfig[]
  }
};
