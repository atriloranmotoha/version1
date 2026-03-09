const SUPABASE_URL = 'https://cickmixswbwhatikgwfj.supabase.co';
const SUPABASE_KEY = 'sb_publishable__PhFrmzv-0RxCWSmaJDpPQ_bOSQXZJN';

const RESOURCE_LIBRARY = {
    python: {
        name: 'Python编程',
        modules: [
            {
                name: 'Python基础入门',
                goal: '掌握Python语法基础，能够编写简单程序',
                resources: [
                    {
                        title: 'Python官方教程',
                        type: '文档',
                        platform: 'Python.org',
                        url: 'https://docs.python.org/zh-cn/3/tutorial/',
                        reason: '官方权威教程，内容全面系统，适合零基础入门',
                        difficulty: 'easy',
                        duration: '8小时'
                    },
                    {
                        title: 'Python入门视频教程',
                        type: '视频',
                        platform: 'Bilibili',
                        url: 'https://www.bilibili.com/video/BV1qW4y1a7fU',
                        reason: '廖雪峰老师经典教程，讲解清晰易懂',
                        difficulty: 'easy',
                        duration: '10小时'
                    }
                ]
            },
            {
                name: 'Python进阶',
                goal: '掌握面向对象编程和常用标准库',
                resources: [
                    {
                        title: 'Python面向对象',
                        type: '文档',
                        platform: '菜鸟教程',
                        url: 'https://www.runoob.com/python3/python3-class.html',
                        reason: '面向对象编程基础',
                        difficulty: 'medium',
                        duration: '4小时'
                    }
                ]
            }
        ]
    },
    llm: {
        name: '大语言模型',
        modules: [
            {
                name: '大语言模型基础',
                goal: '理解LLM的基本原理、能力和局限性',
                resources: [
                    {
                        title: '大语言模型综述',
                        type: '文档',
                        platform: '知乎',
                        url: 'https://zhuanlan.zhihu.com/p/626575382',
                        reason: '通俗易懂的LLM入门介绍，涵盖核心概念',
                        difficulty: 'medium',
                        duration: '3小时'
                    },
                    {
                        title: '吴恩达AI课程',
                        type: '视频',
                        platform: 'Coursera',
                        url: 'https://www.coursera.org/learn/generative-ai-with-llms',
                        reason: '顶级AI课程，系统讲解生成式AI',
                        difficulty: 'medium',
                        duration: '15小时'
                    }
                ]
            },
            {
                name: 'Prompt工程',
                goal: '掌握提示词设计技巧，提高模型输出质量',
                resources: [
                    {
                        title: 'Prompt Engineering Guide',
                        type: '文档',
                        platform: 'GitHub',
                        url: 'https://www.promptingguide.ai/zh',
                        reason: '最全面的Prompt工程指南，中文版',
                        difficulty: 'easy',
                        duration: '4小时'
                    },
                    {
                        title: 'ChatGPT提示词技巧',
                        type: '文档',
                        platform: 'OpenAI',
                        url: 'https://platform.openai.com/docs/guides/prompt-engineering',
                        reason: '官方最佳实践指南',
                        difficulty: 'medium',
                        duration: '3小时'
                    }
                ]
            },
            {
                name: 'OpenAI API开发',
                goal: '学会调用OpenAI API实现对话功能',
                resources: [
                    {
                        title: 'OpenAI API官方文档',
                        type: '文档',
                        platform: 'OpenAI',
                        url: 'https://platform.openai.com/docs/introduction',
                        reason: '官方文档，最权威的API使用指南',
                        difficulty: 'medium',
                        duration: '5小时'
                    },
                    {
                        title: 'ChatGPT API开发教程',
                        type: '视频',
                        platform: 'Bilibili',
                        url: 'https://www.bilibili.com/video/BV1aM4y1v7eK',
                        reason: '实战教程，手把手教你开发',
                        difficulty: 'medium',
                        duration: '6小时'
                    }
                ]
            }
        ]
    },
    rag: {
        name: 'RAG知识库',
        modules: [
            {
                name: 'RAG概念入门',
                goal: '理解RAG技术原理和应用场景',
                resources: [
                    {
                        title: 'RAG技术详解',
                        type: '文档',
                        platform: '知乎',
                        url: 'https://zhuanlan.zhihu.com/p/673392898',
                        reason: '通俗易懂的RAG原理解释',
                        difficulty: 'medium',
                        duration: '3小时'
                    },
                    {
                        title: 'LangChain RAG教程',
                        type: '文档',
                        platform: 'LangChain',
                        url: 'https://python.langchain.com/docs/tutorials/rag/',
                        reason: '官方RAG实现教程',
                        difficulty: 'medium',
                        duration: '3小时'
                    }
                ]
            },
            {
                name: '向量数据库入门',
                goal: '学会使用向量数据库存储和检索数据',
                resources: [
                    {
                        title: 'ChromaDB教程',
                        type: '文档',
                        platform: 'Chroma',
                        url: 'https://docs.trychroma.com/',
                        reason: '轻量级向量数据库，适合入门',
                        difficulty: 'medium',
                        duration: '5小时'
                    },
                    {
                        title: '向量数据库对比',
                        type: '文档',
                        platform: '知乎',
                        url: 'https://zhuanlan.zhihu.com/p/665448873',
                        reason: '了解不同向量数据库的特点',
                        difficulty: 'easy',
                        duration: '2小时'
                    }
                ]
            },
            {
                name: '文档处理与Embedding',
                goal: '学会文档解析和向量化处理',
                resources: [
                    {
                        title: '文本Embedding入门',
                        type: '文档',
                        platform: 'HuggingFace',
                        url: 'https://huggingface.co/blog/getting-started-with-embeddings',
                        reason: 'HuggingFace官方Embedding教程',
                        difficulty: 'medium',
                        duration: '4小时'
                    },
                    {
                        title: '文档分割策略',
                        type: '文档',
                        platform: 'LangChain',
                        url: 'https://python.langchain.com/docs/modules/data_connection/document_transformers/',
                        reason: 'LangChain文档处理模块详解',
                        difficulty: 'medium',
                        duration: '3小时'
                    }
                ]
            }
        ]
    },
    agent: {
        name: 'AI智能体',
        modules: [
            {
                name: 'Agent概念入门',
                goal: '理解AI Agent的基本原理',
                resources: [
                    {
                        title: 'AI Agent综述',
                        type: '文档',
                        platform: '知乎',
                        url: 'https://zhuanlan.zhihu.com/p/682345678',
                        reason: '全面的Agent概念介绍',
                        difficulty: 'medium',
                        duration: '3小时'
                    },
                    {
                        title: 'LangChain Agent教程',
                        type: '文档',
                        platform: 'LangChain',
                        url: 'https://python.langchain.com/docs/modules/agents/',
                        reason: '官方Agent模块文档',
                        difficulty: 'medium',
                        duration: '5小时'
                    }
                ]
            },
            {
                name: 'Function Calling',
                goal: '掌握LLM工具调用机制',
                resources: [
                    {
                        title: 'OpenAI Function Calling',
                        type: '文档',
                        platform: 'OpenAI',
                        url: 'https://platform.openai.com/docs/guides/function-calling',
                        reason: '官方Function Calling文档',
                        difficulty: 'medium',
                        duration: '4小时'
                    },
                    {
                        title: '工具调用实战',
                        type: '视频',
                        platform: 'Bilibili',
                        url: 'https://www.bilibili.com/video/BV1bW4y1s7aB',
                        reason: '实战工具调用教程',
                        difficulty: 'medium',
                        duration: '6小时'
                    }
                ]
            },
            {
                name: '任务规划',
                goal: '实现Agent的任务分解和规划能力',
                resources: [
                    {
                        title: 'ReAct原理详解',
                        type: '文档',
                        platform: '知乎',
                        url: 'https://zhuanlan.zhihu.com/p/675234567',
                        reason: '经典Agent推理框架',
                        difficulty: 'hard',
                        duration: '4小时'
                    }
                ]
            }
        ]
    },
    cv: {
        name: '计算机视觉',
        modules: [
            {
                name: '深度学习基础',
                goal: '理解神经网络基本原理',
                resources: [
                    {
                        title: '深度学习入门',
                        type: '视频',
                        platform: 'Bilibili',
                        url: 'https://www.bilibili.com/video/BV1FT4y1E74V',
                        reason: '吴恩达深度学习课程',
                        difficulty: 'medium',
                        duration: '12小时'
                    }
                ]
            },
            {
                name: 'PyTorch入门',
                goal: '学会使用PyTorch构建神经网络',
                resources: [
                    {
                        title: 'PyTorch官方教程',
                        type: '文档',
                        platform: 'PyTorch',
                        url: 'https://pytorch.org/tutorials/',
                        reason: '官方教程，内容全面',
                        difficulty: 'medium',
                        duration: '10小时'
                    },
                    {
                        title: 'PyTorch实战教程',
                        type: '视频',
                        platform: 'Bilibili',
                        url: 'https://www.bilibili.com/video/BV1hE411t7RN',
                        reason: '小土堆PyTorch教程',
                        difficulty: 'medium',
                        duration: '12小时'
                    }
                ]
            },
            {
                name: 'OpenCV基础',
                goal: '学会图像处理基本操作',
                resources: [
                    {
                        title: 'OpenCV官方教程',
                        type: '文档',
                        platform: 'OpenCV',
                        url: 'https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html',
                        reason: '官方Python教程',
                        difficulty: 'medium',
                        duration: '8小时'
                    }
                ]
            },
            {
                name: '图像分类',
                goal: '实现CNN图像分类模型',
                resources: [
                    {
                        title: 'CNN入门教程',
                        type: '文档',
                        platform: 'PyTorch',
                        url: 'https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html',
                        reason: '官方CIFAR10分类教程',
                        difficulty: 'medium',
                        duration: '6小时'
                    }
                ]
            },
            {
                name: '目标检测',
                goal: '实现YOLO目标检测',
                resources: [
                    {
                        title: 'YOLOv8教程',
                        type: '文档',
                        platform: 'Ultralytics',
                        url: 'https://docs.ultralytics.com/',
                        reason: '最新YOLO官方文档',
                        difficulty: 'medium',
                        duration: '8小时'
                    }
                ]
            }
        ]
    },
    nlp: {
        name: '自然语言处理',
        modules: [
            {
                name: 'NLP基础概念',
                goal: '理解自然语言处理基本任务',
                resources: [
                    {
                        title: 'NLP入门指南',
                        type: '文档',
                        platform: '知乎',
                        url: 'https://zhuanlan.zhihu.com/p/643567890',
                        reason: 'NLP任务全面介绍',
                        difficulty: 'easy',
                        duration: '4小时'
                    },
                    {
                        title: 'HuggingFace入门',
                        type: '文档',
                        platform: 'HuggingFace',
                        url: 'https://huggingface.co/learn/nlp-course/chapter1/1',
                        reason: '最权威的NLP课程',
                        difficulty: 'medium',
                        duration: '5小时'
                    }
                ]
            },
            {
                name: 'Transformer与BERT',
                goal: '理解Transformer架构和预训练模型',
                resources: [
                    {
                        title: 'Transformer详解',
                        type: '文档',
                        platform: '知乎',
                        url: 'https://zhuanlan.zhihu.com/p/48508221',
                        reason: '图解Transformer原理',
                        difficulty: 'hard',
                        duration: '4小时'
                    },
                    {
                        title: 'BERT教程',
                        type: '文档',
                        platform: 'HuggingFace',
                        url: 'https://huggingface.co/learn/nlp-course/chapter3/1',
                        reason: 'BERT实战教程',
                        difficulty: 'hard',
                        duration: '8小时'
                    }
                ]
            },
            {
                name: '文本分类',
                goal: '实现文本分类模型',
                resources: [
                    {
                        title: '文本分类教程',
                        type: '文档',
                        platform: 'HuggingFace',
                        url: 'https://huggingface.co/docs/transformers/tasks/sequence_classification',
                        reason: '官方文本分类教程',
                        difficulty: 'medium',
                        duration: '6小时'
                    }
                ]
            }
        ]
    },
    web: {
        name: 'Web开发',
        modules: [
            {
                name: 'HTML/CSS入门',
                goal: '学会网页结构和样式设计',
                resources: [
                    {
                        title: 'MDN Web教程',
                        type: '文档',
                        platform: 'MDN',
                        url: 'https://developer.mozilla.org/zh-CN/docs/Learn',
                        reason: '最权威的Web开发教程',
                        difficulty: 'easy',
                        duration: '10小时'
                    },
                    {
                        title: 'CSS入门教程',
                        type: '视频',
                        platform: 'Bilibili',
                        url: 'https://www.bilibili.com/video/BV1YJ411a7dy',
                        reason: 'Pink老师CSS教程',
                        difficulty: 'easy',
                        duration: '8小时'
                    }
                ]
            },
            {
                name: 'JavaScript基础',
                goal: '掌握JavaScript编程基础',
                resources: [
                    {
                        title: 'JavaScript教程',
                        type: '文档',
                        platform: 'MDN',
                        url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide',
                        reason: '官方JavaScript指南',
                        difficulty: 'medium',
                        duration: '7小时'
                    }
                ]
            },
            {
                name: 'Vue.js入门',
                goal: '学会使用Vue构建前端应用',
                resources: [
                    {
                        title: 'Vue官方教程',
                        type: '文档',
                        platform: 'Vue.js',
                        url: 'https://cn.vuejs.org/guide/introduction.html',
                        reason: 'Vue官方中文文档',
                        difficulty: 'medium',
                        duration: '10小时'
                    }
                ]
            },
            {
                name: '前端界面开发',
                goal: '开发用户友好的界面',
                resources: [
                    {
                        title: 'Streamlit快速入门',
                        type: '文档',
                        platform: 'Streamlit',
                        url: 'https://docs.streamlit.io/',
                        reason: 'Python快速开发Web界面，无需前端基础',
                        difficulty: 'easy',
                        duration: '4小时'
                    },
                    {
                        title: 'Gradio教程',
                        type: '文档',
                        platform: 'Gradio',
                        url: 'https://www.gradio.app/guides/quickstart',
                        reason: '专为ML应用设计的UI框架',
                        difficulty: 'easy',
                        duration: '2小时'
                    }
                ]
            }
        ]
    },
    database: {
        name: '数据库',
        modules: [
            {
                name: '数据库基础',
                goal: '学会使用MySQL/MongoDB',
                resources: [
                    {
                        title: 'MySQL教程',
                        type: '文档',
                        platform: '菜鸟教程',
                        url: 'https://www.runoob.com/mysql/mysql-tutorial.html',
                        reason: 'MySQL入门教程',
                        difficulty: 'medium',
                        duration: '6小时'
                    },
                    {
                        title: 'MongoDB教程',
                        type: '文档',
                        platform: 'MongoDB',
                        url: 'https://www.mongodb.com/docs/manual/tutorial/',
                        reason: 'MongoDB官方教程',
                        difficulty: 'medium',
                        duration: '6小时'
                    }
                ]
            }
        ]
    },
    langchain: {
        name: 'LangChain框架',
        modules: [
            {
                name: 'LangChain入门',
                goal: '学会使用LangChain构建LLM应用',
                resources: [
                    {
                        title: 'LangChain入门教程',
                        type: '文档',
                        platform: 'LangChain',
                        url: 'https://python.langchain.com/docs/get_started/introduction',
                        reason: 'LangChain官方教程，构建LLM应用必备',
                        difficulty: 'medium',
                        duration: '8小时'
                    }
                ]
            },
            {
                name: '对话系统开发',
                goal: '实现完整的对话机器人，支持上下文记忆',
                resources: [
                    {
                        title: '构建对话机器人实战',
                        type: '视频',
                        platform: 'Bilibili',
                        url: 'https://www.bilibili.com/video/BV1XM4y1s7Y4',
                        reason: '完整项目实战，从零到一构建',
                        difficulty: 'hard',
                        duration: '10小时'
                    }
                ]
            }
        ]
    },
    deployment: {
        name: '项目部署',
        modules: [
            {
                name: '项目部署入门',
                goal: '将项目部署到云服务器，实现公网访问',
                resources: [
                    {
                        title: 'Streamlit Cloud部署',
                        type: '文档',
                        platform: 'Streamlit',
                        url: 'https://docs.streamlit.io/streamlit-community-cloud/get-started',
                        reason: '免费部署方案，适合学生项目',
                        difficulty: 'easy',
                        duration: '2小时'
                    },
                    {
                        title: 'Vercel部署教程',
                        type: '视频',
                        platform: 'Bilibili',
                        url: 'https://www.bilibili.com/video/BV1tV4y1V7ou',
                        reason: '流行的免费部署平台教程',
                        difficulty: 'easy',
                        duration: '2小时'
                    }
                ]
            },
            {
                name: 'Docker部署',
                goal: '学习容器化部署',
                resources: [
                    {
                        title: 'Docker部署教程',
                        type: '视频',
                        platform: 'Bilibili',
                        url: 'https://www.bilibili.com/video/BV1og4y1q7p4',
                        reason: '容器化部署必备技能',
                        difficulty: 'medium',
                        duration: '4小时'
                    }
                ]
            }
        ]
    },
    api: {
        name: 'API开发',
        modules: [
            {
                name: 'HTTP与API基础',
                goal: '理解HTTP协议，学会使用requests库调用API',
                resources: [
                    {
                        title: 'HTTP协议详解',
                        type: '文档',
                        platform: 'MDN',
                        url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTTP',
                        reason: 'MDN权威文档，全面介绍HTTP协议',
                        difficulty: 'medium',
                        duration: '3小时'
                    },
                    {
                        title: 'Python requests库教程',
                        type: '文档',
                        platform: 'Requests文档',
                        url: 'https://requests.readthedocs.io/projects/cn/zh_CN/latest/',
                        reason: '官方中文文档，实例丰富',
                        difficulty: 'easy',
                        duration: '2小时'
                    }
                ]
            },
            {
                name: 'FastAPI后端开发',
                goal: '学会使用FastAPI构建后端API',
                resources: [
                    {
                        title: 'FastAPI部署',
                        type: '文档',
                        platform: 'FastAPI',
                        url: 'https://fastapi.tiangolo.com/zh/',
                        reason: 'Python Web框架中文文档',
                        difficulty: 'medium',
                        duration: '6小时'
                    }
                ]
            }
        ]
    }
};

const TECH_FIELD_DEPENDENCIES = {
    llm: ['python', 'api'],
    rag: ['python', 'llm', 'database'],
    agent: ['python', 'llm', 'api'],
    cv: ['python'],
    nlp: ['python'],
    web: [],
    database: [],
    python: []
};

const STORAGE_KEY = 'learning_path_progress';
const PROJECT_STORAGE_KEY = 'current_project';

function initializeStorage() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({}));
    }
    if (!localStorage.getItem(PROJECT_STORAGE_KEY)) {
        localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(null));
    }
}

function getProgress() {
    initializeStorage();
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getCurrentProject() {
    initializeStorage();
    return JSON.parse(localStorage.getItem(PROJECT_STORAGE_KEY));
}

function saveCurrentProject(project) {
    localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(project));
    
    if (project && project.name) {
        fetch(`${SUPABASE_URL}/rest/v1/learning_paths`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            },
            body: JSON.stringify({
                project_name: project.name,
                project_description: project.description,
                tech_fields: project.techFields || [],
                current_skills: project.currentSkills || '',
                timeline: project.timeline || '',
                learning_path: project
            })
        }).catch(err => console.error('Supabase save error:', err));
    }
}

function toggleResourceComplete(projectId, stageIndex, moduleIndex, resourceIndex) {
    const progress = getProgress();
    const key = `${projectId}_${stageIndex}_${moduleIndex}_${resourceIndex}`;
    
    if (!progress[key]) {
        progress[key] = true;
    } else {
        progress[key] = !progress[key];
    }
    
    saveProgress(progress);
    return progress[key];
}

function isResourceComplete(projectId, stageIndex, moduleIndex, resourceIndex) {
    const progress = getProgress();
    const key = `${projectId}_${stageIndex}_${moduleIndex}_${resourceIndex}`;
    return progress[key] || false;
}

function getStageProgress(projectId, stageIndex, modules) {
    const progress = getProgress();
    let total = 0;
    let completed = 0;
    
    modules.forEach((module, moduleIndex) => {
        module.resources.forEach((_, resourceIndex) => {
            total++;
            const key = `${projectId}_${stageIndex}_${moduleIndex}_${resourceIndex}`;
            if (progress[key]) {
                completed++;
            }
        });
    });
    
    return { total, completed, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
}

function getProjectProgress(projectId, stages) {
    const progress = getProgress();
    let total = 0;
    let completed = 0;
    
    stages.forEach((stage, stageIndex) => {
        stage.modules.forEach((module, moduleIndex) => {
            module.resources.forEach((_, resourceIndex) => {
                total++;
                const key = `${projectId}_${stageIndex}_${moduleIndex}_${resourceIndex}`;
                if (progress[key]) {
                    completed++;
                }
            });
        });
    });
    
    return { total, completed, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
}

function generateLearningPath(projectData) {
    const { projectName, projectDescription, techFields, currentSkills, timeline } = projectData;
    
    const allFields = new Set(techFields);
    techFields.forEach(field => {
        const deps = TECH_FIELD_DEPENDENCIES[field] || [];
        deps.forEach(dep => allFields.add(dep));
    });
    
    const orderedFields = [];
    const added = new Set();
    
    const addField = (field) => {
        if (added.has(field)) return;
        const deps = TECH_FIELD_DEPENDENCIES[field] || [];
        deps.forEach(dep => addField(dep));
        if (!added.has(field)) {
            orderedFields.push(field);
            added.add(field);
        }
    };
    
    techFields.forEach(field => addField(field));
    
    if (!orderedFields.includes('deployment')) {
        orderedFields.push('deployment');
    }
    
    const stages = [];
    const weeksPerStage = Math.max(1, Math.floor(timeline / 4));
    const totalWeeks = parseInt(timeline);
    
    let currentStageIndex = 0;
    let currentStageModules = [];
    let currentStageHours = 0;
    const maxHoursPerStage = totalWeeks <= 4 ? 25 : totalWeeks <= 6 ? 30 : 35;
    
    orderedFields.forEach((field, fieldIndex) => {
        const fieldData = RESOURCE_LIBRARY[field];
        if (!fieldData) return;
        
        fieldData.modules.forEach((module) => {
            const moduleHours = module.resources.reduce((sum, r) => {
                const match = r.duration.match(/(\d+)/);
                return sum + (match ? parseInt(match[1]) : 2);
            }, 0);
            
            if (currentStageHours + moduleHours > maxHoursPerStage && currentStageModules.length > 0) {
                stages.push({
                    stage: stages.length + 1,
                    stageName: `第${stages.length + 1}阶段`,
                    week: `第${stages.length * weeksPerStage + 1}-${Math.min((stages.length + 1) * weeksPerStage, totalWeeks)}周`,
                    duration: `约${currentStageHours}小时`,
                    stageGoal: currentStageModules.length > 0 ? 
                        `掌握${currentStageModules.map(m => m.name).join('、')}相关知识` : '',
                    modules: currentStageModules
                });
                currentStageModules = [];
                currentStageHours = 0;
            }
            
            currentStageModules.push(module);
            currentStageHours += moduleHours;
        });
    });
    
    if (currentStageModules.length > 0) {
        stages.push({
            stage: stages.length + 1,
            stageName: `第${stages.length + 1}阶段`,
            week: `第${stages.length * weeksPerStage + 1}-${totalWeeks}周`,
            duration: `约${currentStageHours}小时`,
            stageGoal: `掌握${currentStageModules.map(m => m.name).join('、')}相关知识`,
            modules: currentStageModules
        });
    }
    
    return {
        id: 'custom_' + Date.now(),
        name: projectName,
        description: projectDescription,
        requirements: Array.from(allFields).map(f => RESOURCE_LIBRARY[f]?.name || f),
        currentSkills: currentSkills,
        timeline: totalWeeks,
        stages: stages
    };
}
