# 프리랜서를 위한 대시보드 스타일 가이드

> **목적**: 랜딩페이지 대시보드를 빠르고 일관되게 제작하기 위한 재사용 가능한 스타일 모듈 라이브러리

---

## 📚 목차

1. [스타일 카테고리 개요](#1-스타일-카테고리-개요)
2. [추천 스타일 목록](#2-추천-스타일-목록)
3. [스타일별 특징 및 사용 사례](#3-스타일별-특징-및-사용-사례)
4. [모듈화 구조](#4-모듈화-구조)
5. [실전 활용 시나리오](#5-실전-활용-시나리오)

---

## 1. 스타일 카테고리 개요

### A. 전체 디자인 시스템
- **Modern Minimal** - 깔끔한 SaaS 스타일
- **Bold & Vibrant** - 강렬한 색상과 그래디언트
- **Corporate Professional** - 보수적이고 신뢰감 있는
- **Creative Agency** - 독특하고 개성 있는
- **Dark Mode First** - 다크 테마 중심
- **Glassmorphism** - 반투명 유리 효과
- **Neumorphism** - 부드러운 입체감

### B. 컴포넌트별 스타일
- **Card Styles** (10가지)
- **Table Styles** (8가지)
- **Chart Styles** (6가지)
- **Button Styles** (12가지)
- **Layout Patterns** (5가지)

### C. 색상 팔레트
- **Professional** (블루/그레이)
- **Energetic** (오렌지/레드)
- **Calm** (그린/티얼)
- **Premium** (퍼플/골드)
- **Monochrome** (흑백)

---

## 2. 추천 스타일 목록

### 🎨 Style #1: Modern SaaS (기본 - 현재 프로젝트)

**특징**:
- 깔끔한 화이트 베이스
- 부드러운 그림자 (shadow-sm)
- 둥근 모서리 (rounded-lg)
- 블루 액센트 (#3b82f6)
- 최소한의 장식

**적합한 클라이언트**:
- 스타트업, SaaS 제품
- B2B 서비스
- 테크 회사

**색상 팔레트**:
```css
primary: #3b82f6 (blue-500)
secondary: #6b7280 (gray-500)
success: #10b981 (green-500)
warning: #f59e0b (amber-500)
danger: #ef4444 (red-500)
background: #ffffff
card: #f9fafb (gray-50)
border: #e5e7eb (gray-200)
```

**컴포넌트 예시**:
- Card: `rounded-lg border shadow-sm bg-white p-6`
- Button: `px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600`
- Table: `border-collapse border border-gray-200`

---

### 🎨 Style #2: Bold Gradient

**특징**:
- 강렬한 그래디언트 배경
- 비비드한 색상 조합
- 큰 폰트 사이즈
- 두꺼운 border
- 눈에 띄는 CTA

**적합한 클라이언트**:
- 마케팅 에이전시
- 이벤트/프로모션
- 젊은 타겟층 서비스

**색상 팔레트**:
```css
gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
primary: #667eea (보라)
secondary: #f093fb (핑크)
accent: #ffd700 (골드)
background: #1a1a2e (다크 네이비)
card: rgba(255,255,255,0.1) (반투명)
```

**컴포넌트 예시**:
- Card: `rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-8 shadow-2xl`
- Button: `px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full`
- Chart: 비비드 색상, 두꺼운 선

---

### 🎨 Style #3: Corporate Professional

**특징**:
- 보수적인 컬러 (네이비, 그레이)
- 직각 모서리 (rounded-sm or none)
- 명확한 계층 구조
- 데이터 중심 레이아웃
- 읽기 쉬운 타이포그래피

**적합한 클라이언트**:
- 금융, 법률, 컨설팅
- 대기업
- 정부/공공기관

**색상 팔레트**:
```css
primary: #1e3a8a (navy-900)
secondary: #64748b (slate-500)
accent: #0891b2 (cyan-600)
background: #f8fafc (slate-50)
card: #ffffff
border: #cbd5e1 (slate-300)
text: #0f172a (slate-900)
```

**컴포넌트 예시**:
- Card: `rounded-sm border-2 border-slate-300 bg-white p-6 shadow-none`
- Button: `px-4 py-2 bg-navy-900 text-white rounded-sm font-semibold uppercase text-sm tracking-wide`
- Table: 스트라이프, 고정 헤더, Excel 느낌

---

### 🎨 Style #4: Glassmorphism (유리 효과)

**특징**:
- 반투명 배경 (backdrop-blur)
- 미묘한 border (rgba)
- 레이어드 효과
- 부드러운 그림자
- 모던한 느낌

**적합한 클라이언트**:
- 크리에이티브 에이전시
- 디자인 중심 서비스
- 프리미엄 브랜드

**색상 팔레트**:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
card: rgba(255, 255, 255, 0.1)
border: rgba(255, 255, 255, 0.18)
text: #ffffff
shadow: rgba(0, 0, 0, 0.1)
```

**컴포넌트 예시**:
- Card: `backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl`
- Button: `backdrop-blur-sm bg-white/20 border border-white/30 px-6 py-3 rounded-full`
- Chart: 반투명 배경, 글로우 효과

**기술 요구사항**:
```css
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.18);
```

---

### 🎨 Style #5: Dark Mode Premium

**특징**:
- 다크 배경 (#0a0a0a ~ #1a1a1a)
- 골드/실버 액센트
- 미묘한 글로우 효과
- 높은 대비
- 프리미엄 느낌

**적합한 클라이언트**:
- 럭셔리 브랜드
- 암호화폐/핀테크
- 게이밍
- 고급 레스토랑/호텔

**색상 팔레트**:
```css
background: #0a0a0a (거의 검정)
card: #1a1a1a (다크 그레이)
primary: #ffd700 (골드)
secondary: #c0c0c0 (실버)
accent: #a855f7 (보라)
border: #2a2a2a
text: #e5e5e5
```

**컴포넌트 예시**:
- Card: `bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl shadow-purple-500/10`
- Button: `bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-bold`
- Chart: 네온 색상 (cyan, magenta, yellow)

**특수 효과**:
```css
box-shadow: 0 0 20px rgba(168, 85, 247, 0.3); /* 글로우 */
text-shadow: 0 0 10px rgba(255, 215, 0, 0.5); /* 텍스트 글로우 */
```

---

### 🎨 Style #6: Minimal Monochrome

**특징**:
- 흑백 위주
- 극도로 단순한 디자인
- 타이포그래피 중심
- 여백 많음
- 액센트 컬러 1개만

**적합한 클라이언트**:
- 포트폴리오
- 아티스트/사진작가
- 미니멀리즘 브랜드
- 뉴스/매거진

**색상 팔레트**:
```css
background: #ffffff
card: #fafafa
text: #0a0a0a
accent: #000000 (or 빨강 한 가지)
border: #e0e0e0
```

**컴포넌트 예시**:
- Card: `bg-white border-2 border-black p-8`
- Button: `border-2 border-black px-8 py-3 text-black hover:bg-black hover:text-white transition-colors`
- Chart: 흑백 + 빨강 하이라이트

**타이포그래피**:
- 큰 헤딩 (text-4xl ~ text-6xl)
- 세리프 폰트 고려
- 넓은 letter-spacing

---

### 🎨 Style #7: Neumorphism (뉴모피즘)

**특징**:
- 부드러운 입체감
- 동일 배경색의 그림자 활용
- 미묘한 하이라이트
- 최소한의 색상
- 소프트한 느낌

**적합한 클라이언트**:
- 모바일 앱 디자인
- IoT/스마트홈
- 헬스케어
- 교육

**색상 팔레트**:
```css
background: #e0e5ec
card: #e0e5ec (동일)
shadow-dark: #a3b1c6
shadow-light: #ffffff
primary: #6c63ff (부드러운 보라)
text: #4a5568
```

**컴포넌트 예시**:
```css
/* Card */
.neomorphism-card {
  background: #e0e5ec;
  border-radius: 20px;
  box-shadow:
    9px 9px 16px #a3b1c6,
    -9px -9px 16px #ffffff;
  padding: 2rem;
}

/* Button (Pressed) */
.neomorphism-button {
  box-shadow:
    inset 5px 5px 10px #a3b1c6,
    inset -5px -5px 10px #ffffff;
}
```

**주의사항**:
- 접근성 낮음 (대비 부족)
- 다크 모드 어려움
- 트렌디하지만 유행 지남

---

### 🎨 Style #8: Brutalism (브루탈리즘)

**특징**:
- 날 것 그대로의 디자인
- 불규칙한 레이아웃
- 강렬한 타이포그래피
- 원색 사용
- 실험적

**적합한 클라이언트**:
- 아트 갤러리
- 패션 브랜드
- 음악 페스티벌
- 실험적 스타트업

**색상 팔레트**:
```css
background: #ffff00 (노랑)
card: #ff0000 (빨강)
primary: #0000ff (파랑)
text: #000000
border: 3px solid #000000
```

**컴포넌트 예시**:
- Card: `bg-yellow-400 border-4 border-black p-6 rotate-1`
- Button: `bg-red-500 border-4 border-black px-8 py-4 text-xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`
- Layout: 비대칭, 겹침 효과

**특수 효과**:
```css
/* 두꺼운 그림자 */
box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);

/* 기울어진 요소 */
transform: rotate(-2deg);
```

---

### 🎨 Style #9: Soft Pastel

**특징**:
- 부드러운 파스텔 톤
- 미묘한 그래디언트
- 넓은 border-radius
- 여성스러운 느낌
- 편안한 분위기

**적합한 클라이언트**:
- 뷰티/화장품
- 베이커리/카페
- 육아/교육
- 웰니스/요가

**색상 팔레트**:
```css
background: #fef3f8 (연핑크)
card: #ffffff
primary: #fbb6ce (핑크)
secondary: #a7d8f0 (하늘색)
accent: #c4b5fd (라벤더)
text: #4a5568
border: #fce7f3
```

**컴포넌트 예시**:
- Card: `bg-white border border-pink-200 rounded-3xl p-6 shadow-lg shadow-pink-100`
- Button: `bg-gradient-to-r from-pink-300 to-purple-300 px-6 py-3 rounded-full text-white`
- Chart: 파스텔 컬러 팔레트

---

### 🎨 Style #10: Tech/Cyberpunk

**특징**:
- 네온 색상 (cyan, magenta, yellow)
- 다크 배경
- 글리치 효과
- 미래지향적
- 애니메이션 많음

**적합한 클라이언트**:
- 게임 회사
- 테크 스타트업
- 암호화폐
- 이벤트/페스티벌

**색상 팔레트**:
```css
background: #0d0221 (다크 퍼플)
card: #1a0b2e
primary: #00ffff (cyan)
secondary: #ff00ff (magenta)
accent: #ffff00 (yellow)
text: #ffffff
border: #00ffff
```

**컴포넌트 예시**:
- Card: `bg-purple-950 border-2 border-cyan-500 rounded-lg p-6 shadow-[0_0_15px_rgba(0,255,255,0.5)]`
- Button: `bg-gradient-to-r from-cyan-500 to-magenta-500 px-6 py-3 rounded text-white font-bold animate-pulse`
- Chart: 네온 선, 글로우 효과

**특수 효과**:
```css
/* 네온 글로우 */
box-shadow:
  0 0 5px #00ffff,
  0 0 10px #00ffff,
  0 0 20px #00ffff,
  0 0 40px #00ffff;

/* 글리치 애니메이션 */
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}
```

---

## 3. 스타일별 특징 및 사용 사례

### 비교표

| 스타일 | 개발 난이도 | 보편성 | 차별성 | 적합 산업 | 예상 작업 시간 |
|--------|------------|--------|--------|----------|--------------|
| Modern SaaS | ⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | 테크, B2B | 빠름 |
| Bold Gradient | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | 마케팅, 이벤트 | 보통 |
| Corporate | ⭐ | ⭐⭐⭐⭐⭐ | ⭐ | 금융, 법률 | 빠름 |
| Glassmorphism | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 크리에이티브 | 느림 |
| Dark Premium | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | 럭셔리, 게임 | 보통 |
| Minimal Mono | ⭐ | ⭐⭐⭐ | ⭐⭐⭐ | 포트폴리오 | 빠름 |
| Neumorphism | ⭐⭐⭐⭐ | ⭐ | ⭐⭐⭐ | 모바일 앱 | 느림 |
| Brutalism | ⭐⭐ | ⭐ | ⭐⭐⭐⭐⭐ | 아트, 패션 | 보통 |
| Soft Pastel | ⭐ | ⭐⭐⭐⭐ | ⭐⭐ | 뷰티, 육아 | 빠름 |
| Cyberpunk | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | 게임, 크립토 | 느림 |

---

## 4. 모듈화 구조

### 폴더 구조 제안

```
/dashboard-modules/
├── styles/
│   ├── modern-saas/
│   │   ├── colors.css
│   │   ├── components.css
│   │   ├── layout.css
│   │   └── README.md
│   ├── bold-gradient/
│   │   ├── colors.css
│   │   ├── components.css
│   │   └── README.md
│   └── ... (각 스타일별 폴더)
├── components/
│   ├── cards/
│   │   ├── card-modern-saas.tsx
│   │   ├── card-glassmorphism.tsx
│   │   └── ...
│   ├── tables/
│   ├── charts/
│   └── buttons/
├── templates/
│   ├── overview-modern-saas.tsx
│   ├── overview-dark-premium.tsx
│   └── ...
└── presets/
    ├── tailwind-modern-saas.js
    ├── tailwind-glassmorphism.js
    └── ...
```

---

### 모듈 파일 구조 예시

#### colors.css
```css
/* Modern SaaS Color Tokens */
:root {
  --primary: #3b82f6;
  --secondary: #6b7280;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --background: #ffffff;
  --card: #f9fafb;
  --border: #e5e7eb;
  --text: #111827;
}

.dark {
  --background: #0f172a;
  --card: #1e293b;
  --text: #f1f5f9;
}
```

#### components.css
```css
/* Modern SaaS Components */

.card-modern-saas {
  @apply rounded-lg border border-border shadow-sm bg-card p-6;
}

.button-modern-saas-primary {
  @apply px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors;
}

.table-modern-saas {
  @apply w-full border-collapse;
}

.table-modern-saas th {
  @apply border-b border-border bg-card px-4 py-2 text-left font-semibold text-sm;
}

.table-modern-saas td {
  @apply border-b border-border px-4 py-2;
}
```

#### Component 파일 (card-modern-saas.tsx)
```typescript
// Modern SaaS Card Component
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function CardModernSaaS({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg border border-gray-200 shadow-sm bg-white p-6 ${className}`}>
      {children}
    </div>
  );
}

CardModernSaaS.Header = function CardHeader({ children }: { children: ReactNode }) {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <h3 className="text-lg font-semibold text-gray-900">{children}</h3>
    </div>
  );
};

CardModernSaaS.Content = function CardContent({ children }: { children: ReactNode }) {
  return <div className="text-gray-700">{children}</div>;
};
```

#### Template 파일 (overview-modern-saas.tsx)
```typescript
// Modern SaaS Overview Dashboard Template
import { CardModernSaaS } from '@/components/cards/card-modern-saas';
import { KPICardModernSaaS } from '@/components/dashboard/kpi-card-modern-saas';
import { LineChartModernSaaS } from '@/components/charts/line-chart-modern-saas';

export function OverviewModernSaaS({ data }) {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back, User</p>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <KPICardModernSaaS title="Total Visitors" value="1,234" trend="up" change="+12.5%" />
        {/* ... more KPI cards */}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CardModernSaaS>
          <CardModernSaaS.Header>Visitor Trends</CardModernSaaS.Header>
          <CardModernSaaS.Content>
            <LineChartModernSaaS data={data.visitorTrends} />
          </CardModernSaaS.Content>
        </CardModernSaaS>
        {/* ... more charts */}
      </div>
    </div>
  );
}
```

#### Tailwind Preset (tailwind-modern-saas.js)
```javascript
// Modern SaaS Tailwind Preset
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#6b7280',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        card: '#f9fafb',
        border: '#e5e7eb',
      },
      borderRadius: {
        'card': '0.5rem',
        'button': '0.5rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      },
    },
  },
};
```

---

## 5. 실전 활용 시나리오

### 시나리오 1: 스타트업 클라이언트 - 빠른 MVP

**클라이언트 요구사항**:
- "깔끔하고 모던한 대시보드"
- 예산: 낮음
- 일정: 1주일

**추천 스타일**: Modern SaaS

**작업 흐름**:
1. `/templates/overview-modern-saas.tsx` 복사
2. 클라이언트 브랜드 컬러로 `--primary` 수정
3. Mock 데이터를 클라이언트 데이터로 교체
4. 배포

**예상 시간**: 2-3일

---

### 시나리오 2: 럭셔리 브랜드 - 고급스러운 대시보드

**클라이언트 요구사항**:
- "프리미엄하고 독특한 느낌"
- 예산: 중상
- 일정: 2주

**추천 스타일**: Dark Premium 또는 Glassmorphism

**작업 흐름**:
1. 두 스타일 시각화 제안
2. 클라이언트 선택 후 템플릿 적용
3. 골드 액센트 커스터마이징
4. 글로우 효과 추가
5. 배포

**예상 시간**: 1주일

---

### 시나리오 3: 보수적 기업 - 신뢰감 있는 대시보드

**클라이언트 요구사항**:
- "전문적이고 깔끔한"
- 데이터 중심
- 예산: 중
- 일정: 1.5주

**추천 스타일**: Corporate Professional

**작업 흐름**:
1. `/templates/overview-corporate.tsx` 사용
2. 네이비 브랜드 컬러 적용
3. 데이터 테이블 중심 레이아웃
4. Excel 스타일 필터링 추가
5. 배포

**예상 시간**: 5-7일

---

### 시나리오 4: 크리에이티브 에이전시 - 독특한 대시보드

**클라이언트 요구사항**:
- "다른 곳에서 본 적 없는 디자인"
- 예산: 상
- 일정: 3주

**추천 스타일**: Glassmorphism 또는 Brutalism

**작업 흐름**:
1. 두 극단적 스타일 시각화
2. 클라이언트 선택
3. 완전 커스텀 애니메이션 추가
4. 인터랙션 효과 강화
5. 배포

**예상 시간**: 2주

---

## 6. 모듈 활용 워크플로우

### Step 1: 클라이언트 미팅
```
질문 체크리스트:
□ 산업/업종은?
□ 타겟 고객층은?
□ 예산 범위는?
□ 일정은?
□ 브랜드 가이드라인 존재 여부?
□ 경쟁사 레퍼런스?
□ 선호하는 색상?
□ 기능 우선순위? (디자인 vs 기능)
```

### Step 2: 스타일 추천
```
- 미팅 내용 기반 2-3개 스타일 선택
- 각 스타일의 컨셉 이미지 or 목업 제시
- 장단점 설명
```

### Step 3: 시각화 요청 (Claude Code에게)
```
프롬프트 예시:

"[선택한 스타일] 스타일로 대시보드 Overview 페이지를 구현해줘.

요구사항:
- KPI 카드 4개 (방문자, 전환율, 신규 가입, 이탈률)
- 방문자 추이 Line Chart
- 유입 소스 Pie Chart
- 최근 리드 테이블 (5개 행)

브랜드 컬러:
- Primary: #ff6b6b (빨강)
- Secondary: #4ecdc4 (청록)

데이터: [첨부된 mock 데이터]"
```

### Step 4: 피드백 & 수정
```
- 클라이언트에게 미리보기 공유
- 피드백 수집
- Claude Code에게 수정 요청
```

### Step 5: 모듈화 저장
```
프롬프트 예시:

"지금 작업한 대시보드를 재사용 가능한 모듈로 저장해줘.

저장 위치:
/dashboard-modules/styles/[클라이언트명-스타일]/

포함 파일:
- colors.css (컬러 토큰)
- components.tsx (Card, Button, Table 컴포넌트)
- overview-template.tsx (전체 레이아웃)
- README.md (사용법)

주석 포함해서 작성해줘."
```

### Step 6: 문서화
```
README.md 내용:
- 스타일 컨셉 설명
- 색상 팔레트
- 사용된 컴포넌트 목록
- 커스터마이징 방법
- 적용 방법
```

---

## 7. 빠른 참조 치트시트

### 스타일 선택 가이드

**클라이언트가 "모던하고 깔끔한" 요구 시**:
→ Modern SaaS

**클라이언트가 "눈에 띄는, 강렬한" 요구 시**:
→ Bold Gradient 또는 Cyberpunk

**클라이언트가 "전문적이고 신뢰감 있는" 요구 시**:
→ Corporate Professional

**클라이언트가 "독특하고 특별한" 요구 시**:
→ Glassmorphism 또는 Brutalism

**클라이언트가 "부드럽고 따뜻한" 요구 시**:
→ Soft Pastel

**클라이언트가 "고급스러운" 요구 시**:
→ Dark Premium

**클라이언트가 "심플한" 요구 시**:
→ Minimal Monochrome

---

## 8. 다음 단계

1. **스타일별 시각화 요청** - 원하는 스타일 선택
2. **모듈 생성** - 선택한 스타일의 재사용 가능한 컴포넌트 라이브러리 구축
3. **템플릿 확장** - Lead Management, Analytics 페이지도 동일 스타일로 확장
4. **Storybook 통합** - 각 컴포넌트를 Storybook에 문서화
5. **NPM 패키지화** (선택) - 자주 쓰는 모듈을 패키지로 배포

---

## 🎯 핵심 포인트

1. **일관성**: 한 프로젝트 내에서 스타일 혼용 금지
2. **재사용성**: 모든 컴포넌트를 독립적으로 재사용 가능하게
3. **문서화**: 미래의 나를 위한 명확한 주석
4. **유연성**: Props로 색상, 크기 커스터마이징 가능하게
5. **성능**: 불필요한 애니메이션/효과 최소화

---

**준비 완료! 이제 원하는 스타일을 선택하고 시각화를 요청하세요.** 🚀
