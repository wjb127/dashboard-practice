'use client';

import Link from 'next/link';
import { DashboardLayout } from '@/components/shared/dashboard-layout';

export default function StyleGalleryPage() {
  const styles = [
    {
      id: 'modern-saas',
      name: 'Modern SaaS',
      description: '깔끔한 SaaS 스타일 (현재 프로젝트)',
      color: 'bg-blue-500',
      difficulty: '⭐',
      suitable: '테크, B2B',
    },
    {
      id: 'bold-gradient',
      name: 'Bold Gradient',
      description: '강렬한 그래디언트',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      difficulty: '⭐⭐',
      suitable: '마케팅, 이벤트',
    },
    {
      id: 'corporate',
      name: 'Corporate Professional',
      description: '보수적이고 신뢰감 있는',
      color: 'bg-navy-900',
      difficulty: '⭐',
      suitable: '금융, 법률',
    },
    {
      id: 'glassmorphism',
      name: 'Glassmorphism',
      description: '반투명 유리 효과',
      color: 'bg-white/20 backdrop-blur',
      difficulty: '⭐⭐⭐',
      suitable: '크리에이티브',
    },
    {
      id: 'dark-premium',
      name: 'Dark Premium',
      description: '다크 + 골드 액센트',
      color: 'bg-zinc-900',
      difficulty: '⭐⭐',
      suitable: '럭셔리, 게임',
    },
    {
      id: 'minimal-mono',
      name: 'Minimal Monochrome',
      description: '흑백 미니멀',
      color: 'bg-white border-2 border-black',
      difficulty: '⭐',
      suitable: '포트폴리오',
    },
    {
      id: 'neumorphism',
      name: 'Neumorphism',
      description: '부드러운 입체감',
      color: 'bg-gray-300',
      difficulty: '⭐⭐⭐⭐',
      suitable: '모바일 앱',
    },
    {
      id: 'brutalism',
      name: 'Brutalism',
      description: '날 것 그대로',
      color: 'bg-yellow-400 border-4 border-black',
      difficulty: '⭐⭐',
      suitable: '아트, 패션',
    },
    {
      id: 'soft-pastel',
      name: 'Soft Pastel',
      description: '부드러운 파스텔 톤',
      color: 'bg-pink-200',
      difficulty: '⭐',
      suitable: '뷰티, 육아',
    },
    {
      id: 'cyberpunk',
      name: 'Tech/Cyberpunk',
      description: '네온 + 미래지향적',
      color: 'bg-purple-950 border-2 border-cyan-500',
      difficulty: '⭐⭐⭐⭐',
      suitable: '게임, 크립토',
    },
  ];

  return (
    <DashboardLayout
      breadcrumbs={[
        { title: 'Dashboard', href: '/' },
        { title: 'Style Gallery' },
      ]}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Style Gallery</h1>
          <p className="text-muted-foreground mt-2">
            10가지 검증된 대시보드 스타일 비교
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style) => (
            <Link key={style.id} href={`/styles/${style.id}`}>
              <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className={`h-32 rounded-lg mb-4 ${style.color}`}></div>
                <h3 className="text-xl font-bold mb-2">{style.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {style.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold">난이도:</span> {style.difficulty}
                  </div>
                  <div>
                    <span className="font-semibold">적합:</span> {style.suitable}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
