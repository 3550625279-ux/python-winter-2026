import React, { useState } from 'react';
import { Calendar, CheckCircle, Circle, Clock, Award, Code, Brain, Trophy } from 'lucide-react';

const LearningTimeline = () => {
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedWeek, setExpandedWeek] = useState(null);

  const toggleTask = (weekId, taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [`${weekId}-${taskId}`]: !prev[`${weekId}-${taskId}`]
    }));
  };

  const phases = [
    {
      id: 'phase1',
      title: '寒假冲刺期（1.28 - 2.28）',
      subtitle: '基础建设 + Python精通',
      color: 'bg-blue-500',
      icon: Brain,
      weeks: [
        {
          id: 'w1',
          week: '第1周（1.28-2.3）',
          hours: '每天7h：Python 3h + 竞赛 3h + OOP 1h',
          focus: 'Python基础速成 + 竞赛STL入门',
          tasks: [
            {
              id: 't1',
              subject: 'Python',
              content: '语法基础：变量、数据类型、控制流、函数',
              resources: ['《Python编程：从入门到实践》1-8章', '菜鸟教程Python3基础', 'LeetCode简单题10道（用Python）']
            },
            {
              id: 't2',
              subject: 'C++竞赛',
              content: 'STL基础：vector, string, sort',
              resources: ['洛谷STL专题', 'C++ STL快速入门', '每天洛谷3题（普及组）']
            },
            {
              id: 't3',
              subject: 'OOP',
              content: 'C++ Primer Plus 第13章（类基础）',
              resources: ['阅读+敲代码示例']
            }
          ]
        },
        {
          id: 'w2',
          week: '第2周（2.4-2.10）',
          hours: '每天7h：Python 3h + 竞赛 3h + OOP 1h',
          focus: 'Python进阶 + 搜索算法专项',
          tasks: [
            {
              id: 't1',
              subject: 'Python',
              content: '列表、字典、文件操作、异常处理',
              resources: ['《Python编程：从入门到实践》9-11章', 'NumPy入门（为AI打基础）', 'LeetCode中等题5道']
            },
            {
              id: 't2',
              subject: 'C++竞赛',
              content: 'DFS/BFS深度学习 + STL（set, map）',
              resources: ['洛谷搜索专题15题', '《算法竞赛入门经典》搜索章节', 'STL刷题10道']
            },
            {
              id: 't3',
              subject: 'OOP',
              content: '第14章（类的复用）',
              resources: ['继承、组合概念理解']
            }
          ]
        },
        {
          id: 'w3',
          week: '第3周（2.11-2.17）',
          hours: '每天7h：Python 2.5h + 竞赛 3.5h + OOP 1h',
          focus: 'Python面向对象 + 动态规划入门',
          tasks: [
            {
              id: 't1',
              subject: 'Python',
              content: '面向对象编程、模块、包',
              resources: ['《Python编程：从入门到实践》12-14章', 'Pandas基础（数据处理）', '简单项目：制作计算器或爬虫']
            },
            {
              id: 't2',
              subject: 'C++竞赛',
              content: '动态规划（背包、LIS、LCS）',
              resources: ['洛谷DP专题20题', '背包九讲前3讲', 'STL priority_queue学习']
            },
            {
              id: 't3',
              subject: 'OOP',
              content: '第15章（友元、异常）',
              resources: ['代码练习']
            }
          ]
        },
        {
          id: 'w4',
          week: '第4周（2.18-2.24）',
          hours: '每天7h：Python 2h + 竞赛 4h + OOP 1h',
          focus: 'Python AI库初探 + 贪心算法',
          tasks: [
            {
              id: 't1',
              subject: 'Python',
              content: 'Matplotlib可视化 + scikit-learn入门',
              resources: ['简单机器学习项目：线性回归', 'Jupyter Notebook使用', 'Kaggle入门竞赛尝试']
            },
            {
              id: 't2',
              subject: 'C++竞赛',
              content: '贪心算法专项 + 图论基础（最短路）',
              resources: ['洛谷贪心15题 + 图论10题', 'Dijkstra算法', 'STL综合运用']
            },
            {
              id: 't3',
              subject: 'OOP',
              content: '复习13-15章，做综合练习',
              resources: ['C++ Primer Plus课后题']
            }
          ]
        },
        {
          id: 'w5',
          week: '第5周（2.25-2.28）',
          hours: '每天7h：Python项目 2h + 竞赛模拟 4h + 总结 1h',
          focus: '寒假总结 + 竞赛模拟测试',
          tasks: [
            {
              id: 't1',
              subject: 'Python',
              content: '完成一个小型AI项目（图像分类或文本分析）',
              resources: ['整合所学知识', '准备开学后深入学习计划']
            },
            {
              id: 't2',
              subject: 'C++竞赛',
              content: '蓝桥杯历年真题模拟（省赛）',
              resources: ['2022-2024年省赛真题3套', '查漏补缺', '总结薄弱点']
            },
            {
              id: 't3',
              subject: '总结',
              content: '制作知识图谱，规划开学计划',
              resources: ['错题本整理']
            }
          ]
        }
      ]
    },
    {
      id: 'phase2',
      title: '开学冲刺期（3.1 - 5.1）',
      subtitle: '竞赛为主 + Python保持',
      color: 'bg-purple-500',
      icon: Trophy,
      weeks: [
        {
          id: 'w6',
          week: '第6-7周（3.1-3.14）',
          hours: '每天可能减少至4-5h，建议：竞赛3h + Python 1h + OOP 0.5h',
          focus: '高频算法强化',
          tasks: [
            {
              id: 't1',
              subject: 'C++竞赛（主）',
              content: '树形DP、区间DP深化',
              resources: ['洛谷提高组题目30道', '《算法竞赛进阶指南》', '每日一题保持手感']
            },
            {
              id: 't2',
              subject: 'Python',
              content: '保持练习，每周2个Kaggle Notebook',
              resources: ['学习PyTorch/TensorFlow基础']
            },
            {
              id: 't3',
              subject: 'OOP',
              content: '第16-17章（string类、智能指针）',
              resources: ['周末集中学习']
            }
          ]
        },
        {
          id: 'w8',
          week: '第8-9周（3.15-3.28）',
          hours: '竞赛3.5h + Python 1h',
          focus: '图论高级 + 数学算法',
          tasks: [
            {
              id: 't1',
              subject: 'C++竞赛（主）',
              content: '最小生成树、拓扑排序、并查集',
              resources: ['洛谷图论专题25题', '数论（质数、GCD、快速幂）']
            },
            {
              id: 't2',
              subject: 'Python',
              content: '深度学习基础（CNN简介）',
              resources: ['吴恩达机器学习课程部分内容']
            }
          ]
        },
        {
          id: 'w10',
          week: '第10-11周（3.29-4.11）',
          hours: '竞赛4h + Python 0.5h',
          focus: '真题冲刺',
          tasks: [
            {
              id: 't1',
              subject: 'C++竞赛（主）',
              content: '蓝桥杯历年真题全刷',
              resources: ['2018-2024所有省赛真题', '计时模拟，总结规律', '薄弱算法专项突破']
            },
            {
              id: 't2',
              subject: 'Python',
              content: '维持性练习，每周1-2题',
              resources: ['防止遗忘']
            }
          ]
        },
        {
          id: 'w12',
          week: '第12-13周（4.12-4.25）',
          hours: '竞赛4.5h',
          focus: '模拟赛 + 心态调整',
          tasks: [
            {
              id: 't1',
              subject: 'C++竞赛（全力）',
              content: '每周2次完整模拟赛（3小时）',
              resources: ['牛客竞赛、洛谷月赛', '复习错题本', '保证代码规范性']
            },
            {
              id: 't2',
              subject: '心态',
              content: '调整作息，保证比赛状态',
              resources: ['早睡早起，适度运动']
            }
          ]
        },
        {
          id: 'w14',
          week: '第14周（4.26-5.1）',
          hours: '赛前一周：轻度复习 + 放松',
          focus: '知识回顾 + 保持手感',
          tasks: [
            {
              id: 't1',
              subject: 'C++竞赛',
              content: '复习模板、常见坑点',
              resources: ['每天1-2道中等题', '不做难题，避免挫败感', '整理代码模板库']
            },
            {
              id: 't2',
              subject: '准备',
              content: '检查设备、准备文具',
              resources: ['放松心态，相信自己！']
            }
          ]
        }
      ]
    }
  ];

  const resources = {
    python: [
      { name: '《Python编程：从入门到实践》', type: '书籍', link: '必读经典' },
      { name: '菜鸟教程', type: '网站', link: 'runoob.com/python3' },
      { name: 'LeetCode', type: '刷题', link: 'leetcode.cn' },
      { name: 'Kaggle', type: 'AI实践', link: 'kaggle.com' }
    ],
    cpp: [
      { name: '洛谷', type: '刷题平台', link: 'luogu.com.cn' },
      { name: '《算法竞赛入门经典》', type: '书籍', link: '刘汝佳' },
      { name: 'C++ Reference', type: '文档', link: 'cplusplus.com' },
      { name: '蓝桥杯历年真题', type: '真题', link: '官网/牛客' }
    ],
    oop: [
      { name: 'C++ Primer Plus', type: '书籍', link: '第13-18章' },
      { name: 'C++ Primer（更深入）', type: '进阶', link: '可选' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Award className="w-12 h-12 text-blue-600" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                蓝桥杯C++ + Python AI 学习规划
              </h1>
              <p className="text-gray-600 mt-2">目标：2025年5月蓝桥杯省一 | 掌握Python AI基础</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-800">学习时长</span>
              </div>
              <p className="text-2xl font-bold text-blue-600">每天7小时</p>
              <p className="text-sm text-gray-600">寒假黄金期</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-800">优先级</span>
              </div>
              <p className="text-lg font-bold text-purple-600">Python → 竞赛 → OOP</p>
              <p className="text-sm text-gray-600">灵活调整</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-800">比赛时间</span>
              </div>
              <p className="text-2xl font-bold text-green-600">5月初</p>
              <p className="text-sm text-gray-600">倒计时93天</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        {phases.map((phase) => (
          <div key={phase.id} className="mb-8">
            <div className={`${phase.color} rounded-t-2xl p-4 text-white`}>
              <div className="flex items-center gap-3">
                <phase.icon className="w-8 h-8" />
                <div>
                  <h2 className="text-2xl font-bold">{phase.title}</h2>
                  <p className="text-white/90">{phase.subtitle}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-b-2xl shadow-xl p-6">
              {phase.weeks.map((week, idx) => (
                <div key={week.id} className="mb-6 last:mb-0">
                  <div 
                    className="cursor-pointer hover:bg-gray-50 rounded-lg p-4 transition-colors"
                    onClick={() => setExpandedWeek(expandedWeek === week.id ? null : week.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                        {idx + 1}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-800">{week.week}</h3>
                        <p className="text-sm text-gray-600 mt-1">{week.hours}</p>
                        <div className="mt-2 inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                          重点：{week.focus}
                        </div>
                      </div>
                    </div>
                  </div>

                  {expandedWeek === week.id && (
                    <div className="mt-4 ml-12 space-y-4">
                      {week.tasks.map((task) => (
                        <div key={task.id} className="border-l-4 border-blue-300 pl-4 py-2">
                          <div className="flex items-start gap-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleTask(week.id, task.id);
                              }}
                              className="flex-shrink-0 mt-1"
                            >
                              {completedTasks[`${week.id}-${task.id}`] ? (
                                <CheckCircle className="w-6 h-6 text-green-500" />
                              ) : (
                                <Circle className="w-6 h-6 text-gray-300" />
                              )}
                            </button>
                            <div className="flex-grow">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-blue-600">{task.subject}</span>
                                {completedTasks[`${week.id}-${task.id}`] && (
                                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">已完成</span>
                                )}
                              </div>
                              <p className="text-gray-800 font-medium mb-2">{task.content}</p>
                              <div className="bg-gray-50 rounded-lg p-3">
                                <p className="text-sm font-semibold text-gray-700 mb-1">📚 学习资源：</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                  {task.resources.map((resource, i) => (
                                    <li key={i}>• {resource}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {idx < phase.weeks.length - 1 && (
                    <div className="ml-12 h-8 border-l-2 border-dashed border-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Resources */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📖 核心学习资源</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-3">Python + AI</h3>
              <ul className="space-y-2">
                {resources.python.map((r, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-semibold">{r.name}</span>
                    <span className="text-gray-600"> ({r.type})</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-purple-600 mb-3">C++竞赛</h3>
              <ul className="space-y-2">
                {resources.cpp.map((r, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-semibold">{r.name}</span>
                    <span className="text-gray-600"> ({r.type})</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-green-600 mb-3">C++ OOP</h3>
              <ul className="space-y-2">
                {resources.oop.map((r, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-semibold">{r.name}</span>
                    <span className="text-gray-600"> ({r.type})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-xl p-6 md:p-8 mt-8 text-white">
          <h2 className="text-2xl font-bold mb-4">💡 学习建议</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span>🎯</span>
              <span><strong>寒假是关键：</strong>利用每天7小时，Python要在2月底达到能做AI项目的水平</span>
            </li>
            <li className="flex gap-3">
              <span>⚡</span>
              <span><strong>竞赛刷题：</strong>每天至少3道洛谷题，从普及组过渡到提高组</span>
            </li>
            <li className="flex gap-3">
              <span>📝</span>
              <span><strong>错题本：</strong>整理每道错题，特别是算法思路和STL使用技巧</span>
            </li>
            <li className="flex gap-3">
              <span>🔄</span>
              <span><strong>开学后调整：</strong>学业压力大时，保证竞赛3小时，Python每周至少保持练习</span>
            </li>
            <li className="flex gap-3">
              <span>🏆</span>
              <span><strong>省一目标：</strong>历年省一线约70-80分（满分100），需要掌握80%知识点+比赛策略</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LearningTimeline;