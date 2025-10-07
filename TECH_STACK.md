# 기술 스택 및 라이브러리 정리

## 📦 Core Framework

### Next.js 15.5.4
- **용도**: React 기반 풀스택 프레임워크
- **주요 기능 사용**:
  - App Router (최신 라우팅 시스템)
  - Server Components / Client Components
  - Static Site Generation (SSG)
  - 파일 기반 라우팅 (`app/` 디렉토리)
- **왜 선택했나**:
  - 최신 React 19 지원
  - 뛰어난 개발자 경험 (DX)
  - Netlify 배포 최적화

### React 19.1.0
- **용도**: UI 라이브러리
- **특징**: 최신 버전으로 성능 및 기능 개선

### TypeScript 5
- **용도**: 정적 타입 검사
- **활용**: 모든 컴포넌트 및 데이터 타입 정의
- **주요 인터페이스**:
  - `Lead`, `LeadStatus`, `LeadSource`
  - `ChartDataPoint`, `KPIData`
  - `LeadMetadata`

---

## 🎨 스타일링

### Tailwind CSS v4
- **용도**: Utility-first CSS 프레임워크
- **스타일 접근법**:
  - **Utility Classes**: `flex`, `grid`, `p-4`, `hover:bg-accent` 등
  - **Responsive Design**: `md:grid-cols-2`, `lg:grid-cols-4` (모바일 퍼스트)
  - **Dark Mode**: `dark:bg-background` 클래스 활용
- **설정**:
  - `@import "tailwindcss"` (v4 방식)
  - CSS 변수 기반 테마 시스템
  - `@theme inline` 블록으로 커스텀 토큰 정의

### 컬러 시스템: oklch()
- **개념**: CSS Color Module Level 4의 최신 색상 공간
- **장점**:
  - 인간의 시각적 인지에 맞는 균일한 색상 분포
  - 밝기 조정 시 색조 유지
  - 다크 모드 전환 시 일관성
- **예시**:
  ```css
  --primary: oklch(0.205 0 0);  /* L(밝기) C(채도) H(색조) */
  --destructive: oklch(0.577 0.245 27.325);
  ```

### CSS 변수 기반 테마
- **Light/Dark Mode 전환**:
  - `:root`에 라이트 모드 변수 정의
  - `.dark` 클래스에 다크 모드 변수 오버라이드
  - JavaScript로 `document.documentElement.classList.toggle('dark')`
- **주요 변수**:
  - `--background`, `--foreground`: 기본 배경/전경색
  - `--primary`, `--secondary`: 브랜드 컬러
  - `--muted`, `--accent`: 보조 컬러
  - `--border`, `--ring`: UI 요소 컬러
  - `--chart-1` ~ `--chart-5`: 차트 전용 컬러

### 유틸리티 라이브러리
- **clsx**: 조건부 클래스 이름 결합
- **tailwind-merge**: Tailwind 클래스 충돌 방지 및 병합
- **class-variance-authority (cva)**: 컴포넌트 variant 관리

---

## 📊 데이터 시각화

### Recharts 3.2.1
- **용도**: React 기반 차트 라이브러리
- **구현한 차트**:
  - `LineChart`: 방문자 추이
  - `BarChart`: 지역별 분포, A/B 테스트
  - `PieChart`: 유입 소스, 디바이스/브라우저 분포
  - `AreaChart`: (재사용 가능 컴포넌트)
  - `FunnelChart`: 커스텀 전환 퍼널 (자체 구현)
- **특징**:
  - 선언적 API (컴포넌트 조합)
  - 반응형 지원 (`ResponsiveContainer`)
  - 커스터마이징 가능한 tooltip, legend

---

## 📋 테이블

### TanStack Table v8.21.3
- **용도**: Headless 데이터 테이블 라이브러리
- **구현 기능**:
  - 정렬 (Sorting)
  - 필터링 (Filtering) - 전역 검색
  - 페이지네이션 (Pagination)
  - 컬럼 정의 및 커스터마이징
- **왜 선택했나**:
  - Headless 접근 (UI 완전 커스텀 가능)
  - TypeScript 완벽 지원
  - 뛰어난 성능과 유연성

---

## 📝 폼 관리

### React Hook Form 7.64.0
- **용도**: 폼 상태 관리 및 검증
- **장점**:
  - Uncontrolled 방식으로 리렌더링 최소화
  - 직관적인 API
  - Zod와 완벽한 통합

### Zod 4.1.12
- **용도**: TypeScript 우선 스키마 검증
- **활용**: 폼 데이터 검증 및 타입 추론
- **예시**:
  ```typescript
  const leadSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
  });
  ```

### @hookform/resolvers
- **용도**: React Hook Form과 Zod 연결

---

## 🎯 UI/UX

### Lucide React 0.545.0
- **용도**: 아이콘 라이브러리
- **사용 아이콘**: `LayoutDashboard`, `Users`, `BarChart3`, `Bell`, `Moon`, `Sun`, `ArrowUp`, `Download` 등
- **특징**:
  - 가볍고 커스터마이징 가능
  - 일관된 디자인 스타일

### Sonner 2.0.7
- **용도**: Toast 알림 시스템
- **구현 위치**:
  - Lead 상태 변경 시 알림
  - CSV Export 성공 알림
- **특징**:
  - 우아한 애니메이션
  - `richColors` 옵션으로 색상 구분
  - `position="top-right"` 배치

### tw-animate-css
- **용도**: Tailwind CSS 애니메이션 유틸리티
- **사용**: Skeleton Loading 애니메이션 (`animate-pulse`)

---

## 🛠️ 유틸리티

### date-fns 4.1.0
- **용도**: 날짜 조작 및 포맷팅
- **사용 예시**:
  - `format(date, 'yyyy-MM-dd')`
  - `parseISO()`, `addDays()`, `subDays()`
- **왜 선택했나**:
  - Moment.js 대비 경량
  - Tree-shaking 지원
  - 함수형 접근

---

## 🚀 배포

### @netlify/plugin-nextjs 5.13.5
- **용도**: Netlify에서 Next.js 최적화 배포
- **기능**:
  - 자동 빌드 최적화
  - Edge Function 지원
  - 이미지 최적화

### netlify.toml 설정
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"
```

---

## 📐 아키텍처 패턴

### 컴포넌트 구조
```
components/
├── charts/          # 재사용 가능한 차트 컴포넌트
├── dashboard/       # 대시보드 전용 컴포넌트 (KPI Cards)
├── leads/           # Lead 관리 컴포넌트 (Table, Modal)
├── shared/          # 공통 컴포넌트 (Layout, Theme Toggle, Skeleton)
└── ui/              # shadcn/ui 기반 기본 UI 컴포넌트
```

### 데이터 흐름
1. **Mock Data** (`lib/mock-data/leads.ts`)
   - 개발용 정적 데이터
   - 실제 API 연동 시 교체 가능한 구조

2. **Type Safety** (`types/index.ts`)
   - 모든 데이터에 TypeScript 타입 적용
   - 컴파일 타임 에러 방지

3. **Client Components** (`'use client'`)
   - 인터랙티브 컴포넌트만 클라이언트 사이드
   - 나머지는 서버 컴포넌트로 최적화

### 스타일링 전략
- **Utility-First**: Tailwind CSS 유틸리티 클래스 우선 사용
- **Component-Scoped**: 컴포넌트별로 스타일 격리
- **CSS Variables**: 테마 변수로 일관성 유지
- **Responsive**: 모바일 우선 반응형 디자인 (`md:`, `lg:` breakpoints)

---

## 🎓 핵심 개념 설명

### 1. Tailwind CSS v4의 변화
- **v3**: `tailwind.config.js` 파일 필요
- **v4**: CSS 파일 내 `@theme` 블록으로 설정
- **장점**: 설정 간소화, CSS 변수와 통합

### 2. Dark Mode 구현
```typescript
// localStorage 기반 단순 구현 (SSR 이슈 없음)
localStorage.setItem('dashboard-theme', 'dark');
document.documentElement.classList.add('dark');
```

### 3. Headless UI 개념
- **TanStack Table**: UI 없이 로직만 제공
- **장점**: 디자인 자유도 100%, Tailwind로 완전 커스텀

### 4. Static Site Generation (SSG)
- `export const dynamic = 'force-dynamic'` 사용
- 빌드 타임에 정적 HTML 생성
- Netlify CDN으로 빠른 배포

---

## 📊 프로젝트 통계

- **총 라이브러리**: 14개 (dependencies)
- **개발 의존성**: 9개 (devDependencies)
- **번들 크기 (추정)**:
  - First Load JS: ~102KB (기본 페이지)
  - 차트 페이지: ~227KB
- **TypeScript 타입**: 100% 커버리지

---

## 🔧 개발 환경

- **Node.js**: v20
- **Package Manager**: npm
- **IDE 추천**: VS Code + Tailwind CSS IntelliSense
- **린트**: ESLint + Next.js 설정
