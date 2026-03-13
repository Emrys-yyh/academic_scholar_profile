import { ProfileData, Publication, NewsItem, ExperienceItem, AwardItem, SectionConfig } from './types';
import newsData from './news.json';
import publicationsData from './publications.json';

export const data = {
  en: {
    PROFILE: {
      name: "Dr. Alex Chen",
      title: "Postdoctoral Researcher",
      affiliation: "AI Perception Lab, Stanford University",
      email: "alex.chen@stanford.edu",
      location: "Gates Computer Science Building, 353 Serra Mall",
      bio: `
        I am a Postdoctoral Researcher at Stanford University, working with Prof. Jane Doe. 
        Previously, I received my Ph.D. from MIT CSAIL in 2023.
        
        My research lies at the intersection of **Computer Vision** and **Machine Learning**. 
        I am particularly interested in building robust visual perception systems that can generalize 
        to unseen environments with limited supervision. My recent work focuses on self-supervised learning, 
        3D scene understanding, and multimodal representation learning.
      `,
      researchInterests: [
        "Computer Vision",
        "Self-Supervised Learning",
        "3D Scene Understanding",
        "Robotics"
      ],
      socials: [
        { platform: 'email', url: 'mailto:alex.chen@stanford.edu' },
        { platform: 'scholar', url: 'https://scholar.google.com', username: 'Google Scholar' },
        { platform: 'github', url: 'https://github.com', username: 'GitHub' },
        { platform: 'zhihu', url: 'https://zhihu.com', username: 'Zhihu' },
        { platform: 'xiaohongshu', url: 'https://xiaohongshu.com', username: 'Xiaohongshu' },
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
          { id: 'aw1', title: "Outstanding Reviewer", organization: "CVPR", year: "2025" },
          { id: 'aw2', title: "Best Paper Honorable Mention", organization: "ICCV", year: "2023" },
          { id: 'aw3', title: "National Scholarship", organization: "Ministry of Education", year: "2017" }
        ] 
      },
      { 
        id: 'education', 
        title: 'Education', 
        type: 'timeline', 
        content: [
          { id: 'ed1', role: "Postdoctoral Researcher", organization: "Stanford University", period: "2023 - Present", description: "Advisor: Prof. Jane Doe" },
          { id: 'ed2', role: "Ph.D. in Computer Science", organization: "MIT CSAIL", period: "2018 - 2023", description: "Thesis: Robust Perception in the Wild. Advisor: Prof. Alan Turing" },
          { id: 'ed3', role: "B.S. in Computer Science", organization: "University of California, Berkeley", period: "2014 - 2018" }
        ] 
      },
      { 
        id: 'internships', 
        title: 'Internships', 
        type: 'timeline', 
        content: [
          { id: 'in1', role: "Research Intern", organization: "Google Research", period: "Summer 2021", description: "Worked on large-scale video pre-training." }
        ] 
      }
    ] as SectionConfig[]
  },
  zh: {
    PROFILE: {
      name: "陈亚历 (Dr. Alex Chen)",
      title: "博士后研究员",
      affiliation: "斯坦福大学 AI感知实验室",
      email: "alex.chen@stanford.edu",
      location: "Gates Computer Science Building, 353 Serra Mall",
      bio: `
        我是斯坦福大学的一名博士后研究员，合作导师是 Jane Doe 教授。
        此前，我于2023年在麻省理工学院（MIT CSAIL）获得博士学位。
        
        我的研究方向是**计算机视觉**和**机器学习**的交叉领域。
        我特别致力于构建鲁棒的视觉感知系统，使其能够在有限的监督下泛化到未知的环境中。我近期的工作主要集中在自监督学习、3D场景理解以及多模态表征学习。
      `,
      researchInterests: [
        "计算机视觉",
        "自监督学习",
        "3D场景理解",
        "机器人学"
      ],
      socials: [
        { platform: 'email', url: 'mailto:alex.chen@stanford.edu' },
        { platform: 'scholar', url: 'https://scholar.google.com', username: 'Google Scholar' },
        { platform: 'github', url: 'https://github.com', username: 'GitHub' },
        { platform: 'zhihu', url: 'https://zhihu.com', username: '知乎' },
        { platform: 'xiaohongshu', url: 'https://xiaohongshu.com', username: '小红书' },
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
          { id: 'aw1', title: "杰出审稿人 (Outstanding Reviewer)", organization: "CVPR", year: "2025" },
          { id: 'aw2', title: "最佳论文提名 (Best Paper Honorable Mention)", organization: "ICCV", year: "2023" },
          { id: 'aw3', title: "国家奖学金", organization: "教育部", year: "2017" }
        ] 
      },
      { 
        id: 'education', 
        title: '教育背景', 
        type: 'timeline', 
        content: [
          { id: 'ed1', role: "博士后研究员", organization: "斯坦福大学 (Stanford University)", period: "2023 - 至今", description: "合作导师: Prof. Jane Doe" },
          { id: 'ed2', role: "计算机科学博士", organization: "麻省理工学院 (MIT CSAIL)", period: "2018 - 2023", description: "论文: Robust Perception in the Wild. 导师: Prof. Alan Turing" },
          { id: 'ed3', role: "计算机科学学士", organization: "加州大学伯克利分校 (UC Berkeley)", period: "2014 - 2018" }
        ] 
      },
      { 
        id: 'internships', 
        title: '实习经历', 
        type: 'timeline', 
        content: [
          { id: 'in1', role: "研究实习生", organization: "谷歌研究院 (Google Research)", period: "2021年夏季", description: "参与大规模视频预训练研究。" }
        ] 
      }
    ] as SectionConfig[]
  }
};
