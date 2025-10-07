# Dashboard Practice Projects

Next.js + Netlify 기반 대시보드 프로젝트 제안서

## 기술 스택

### Core
- **Framework**: Next.js 15 (App Router)
- **Deployment**: Netlify
- **Language**: TypeScript
- **Styling**: Tailwind CSS

### 추천 라이브러리
- **차트/시각화**: Recharts or Chart.js
- **데이터 테이블**: TanStack Table (React Table v8)
- **UI Components**: shadcn/ui
- **폼 관리**: React Hook Form + Zod
- **날짜**: date-fns
- **아이콘**: Lucide React
- **상태관리**: Zustand (필요시)

---

## 🔥 필수 프로젝트

### 1. 랜딩페이지 고객 DB 수집 대시보드
**목적**: 랜딩페이지 방문자 및 리드 데이터 분석

#### 주요 화면
- **Overview Dashboard**
  - 총 방문자 수, 전환율, 신규 가입자 (KPI Cards)
  - 일별/주별/월별 방문자 추이 (Line Chart)
  - 유입 소스 분포 (Pie Chart)
  - 실시간 방문자 현황 (Real-time Widget)

- **Lead Management**
  - 수집된 리드 목록 (Data Table with 필터링/정렬)
  - 리드 상세 정보 모달
  - 리드 상태 관리 (신규/연락중/전환/실패)
  - Export 기능 (CSV/Excel)

- **Analytics**
  - Funnel 분석 (방문 → 관심 → 가입)
  - 디바이스/브라우저 분포
  - 지역별 방문자 분포 (Map or Bar Chart)
  - A/B 테스트 결과 비교

#### 데이터 구조 예시
```typescript
interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  source: 'organic' | 'paid' | 'referral' | 'direct';
  status: 'new' | 'contacted' | 'converted' | 'lost';
  createdAt: Date;
  metadata: {
    device: string;
    browser: string;
    location?: string;
    referrer?: string;
  };
}
```

---

## 📊 선택 프로젝트

### 2. E-commerce 판매 대시보드
**목적**: 온라인 쇼핑몰 판매 데이터 분석

#### 주요 화면
- **Sales Overview**
  - 총 매출, 주문 수, 평균 주문 금액 (KPI Cards)
  - 매출 추이 (Area Chart)
  - 카테고리별 판매 비율 (Donut Chart)
  - 베스트셀러 제품 Top 10 (Bar Chart)

- **Order Management**
  - 주문 목록 (Data Table)
  - 주문 상태별 필터 (대기/처리중/배송중/완료/취소)
  - 주문 상세 모달

- **Product Analytics**
  - 재고 현황 (Stock Alert)
  - 제품별 판매 성과
  - 리뷰 및 평점 분석

- **Customer Insights**
  - 신규 vs 재구매 고객 비율
  - 고객 LTV (Lifetime Value)
  - 고객 세그먼트 분석

#### 추천 차트
- Recharts (Line, Bar, Area, Pie Charts)
- TanStack Table (주문/제품 목록)

---

### 3. SaaS 서비스 사용량 대시보드
**목적**: SaaS 제품의 사용자 활동 및 구독 모니터링

#### 주요 화면
- **Usage Metrics**
  - DAU/MAU (Daily/Monthly Active Users)
  - 기능별 사용 빈도 (Heat Map)
  - API 호출량 추이 (Line Chart)
  - 에러율 모니터링

- **Subscription Analytics**
  - MRR (Monthly Recurring Revenue) 추이
  - Churn Rate (이탈률)
  - 플랜별 구독자 분포
  - 업그레이드/다운그레이드 추세

- **User Engagement**
  - 사용자 활동 로그 타임라인
  - 세션 지속 시간 분석
  - Feature Adoption Rate

- **Billing Dashboard**
  - 결제 현황
  - 미수금 관리
  - 환불 요청 처리

#### 기술 포인트
- Real-time 업데이트 (Polling or Webhooks)
- 시계열 데이터 최적화

---

### 4. 소셜 미디어 분석 대시보드
**목적**: 소셜 미디어 성과 통합 모니터링

#### 주요 화면
- **Multi-Platform Overview**
  - 플랫폼별 팔로워/구독자 수 (Instagram, Twitter, YouTube)
  - 통합 Engagement Rate
  - 게시물 성과 비교

- **Content Performance**
  - 최근 게시물 성과 (좋아요, 댓글, 공유)
  - 해시태그 분석
  - 최적 게시 시간 분석

- **Audience Demographics**
  - 연령/성별 분포
  - 지역별 분포
  - 관심사 분석

- **Growth Tracking**
  - 팔로워 증가 추이
  - 유입 경로 분석
  - 바이럴 콘텐츠 식별

#### 추천 시각화
- Multi-line Chart (플랫폼 비교)
- Stacked Bar Chart (Engagement 분해)

---

### 5. 프로젝트 관리 대시보드
**목적**: 팀 프로젝트 진행 상황 모니터링

#### 주요 화면
- **Project Overview**
  - 진행 중 프로젝트 수
  - 전체 진행률 (Progress Bar)
  - 마감 임박 작업 (Urgent Tasks)
  - 팀원별 작업 부하

- **Task Management**
  - Kanban Board (To Do / In Progress / Done)
  - Gantt Chart (타임라인)
  - Task Priority Matrix

- **Team Performance**
  - 팀원별 완료 작업 수
  - 평균 작업 완료 시간
  - 병목 구간 식별

- **Time Tracking**
  - 프로젝트별 시간 소요
  - 예산 대비 실제 시간
  - 시간당 생산성 분석

#### UI Components
- Drag & Drop (dnd-kit)
- Timeline Component
- Progress Indicators

---

### 6. 헬스케어 모니터링 대시보드
**목적**: 개인 건강 지표 추적 및 분석

#### 주요 화면
- **Health Metrics**
  - 체중/BMI 추이 (Line Chart)
  - 혈압/심박수 기록
  - 수면 패턴 분석 (Bar Chart)
  - 운동 시간 및 칼로리 소모

- **Activity Tracker**
  - 일일 걸음 수
  - 운동 종류별 기록
  - 목표 달성률 (Progress Circle)

- **Nutrition Log**
  - 식단 기록
  - 영양소 분석 (단백질/탄수화물/지방)
  - 칼로리 섭취 vs 소모

- **Insights & Goals**
  - AI 기반 건강 조언
  - 목표 설정 및 추적
  - 주간/월간 리포트

#### 시각화 포인트
- Radial Charts (영양소 분포)
- Heatmap (활동 패턴)

---

### 7. 재무 관리 대시보드
**목적**: 개인/기업 재무 현황 모니터링

#### 주요 화면
- **Financial Overview**
  - 총 자산/부채
  - 월간 수입/지출 (Waterfall Chart)
  - 순자산 추이 (Area Chart)
  - 카테고리별 지출 (Pie Chart)

- **Budget Tracking**
  - 예산 대비 실제 지출 비교
  - 카테고리별 예산 알림
  - 저축 목표 진행률

- **Investment Portfolio**
  - 포트폴리오 구성 (주식/채권/현금)
  - 수익률 분석
  - 리스크 지표

- **Bills & Subscriptions**
  - 정기 결제 관리
  - 결제 예정 알림
  - 구독 서비스 분석

#### 데이터 처리
- 거래 자동 분류 (ML 태깅)
- 환율 연동 (다중 통화)

---

## 🎨 공통 UI/UX 패턴

### Layout
- Sidebar Navigation (고정 or 접이식)
- Top Header (검색, 알림, 프로필)
- Breadcrumb
- Responsive Design (모바일 최적화)

### Components
- **KPI Cards**: 주요 지표 표시
- **Date Range Picker**: 기간 선택
- **Filter Panel**: 다중 필터 옵션
- **Export Buttons**: PDF/CSV 다운로드
- **Dark Mode Toggle**: 다크 테마 지원

### 인터랙션
- Skeleton Loading
- Infinite Scroll or Pagination
- Toast Notifications
- Modal/Drawer 패턴

---

## 🚀 구현 우선순위 추천

1. **필수**: 랜딩페이지 고객 DB 대시보드
2. **초급**: 재무 관리 대시보드 (간단한 CRUD)
3. **중급**: E-commerce 판매 대시보드 (복잡한 데이터 관계)
4. **고급**: SaaS 사용량 대시보드 (실시간 데이터)

---

## 📦 프로젝트 구조 예시

```
dashboard-practice/
├── app/
│   ├── (dashboard)/
│   │   ├── landing-analytics/    # 필수 프로젝트
│   │   ├── ecommerce/             # 선택 프로젝트들
│   │   ├── saas-metrics/
│   │   └── ...
│   └── layout.tsx
├── components/
│   ├── ui/                        # shadcn components
│   ├── charts/                    # 재사용 차트 컴포넌트
│   ├── dashboard/                 # 공통 대시보드 컴포넌트
│   └── shared/
├── lib/
│   ├── utils.ts
│   ├── mock-data/                 # 개발용 Mock 데이터
│   └── api/                       # API 호출 함수
└── types/
    └── index.ts
```

---

## 💡 학습 포인트

각 프로젝트를 통해 배울 수 있는 것들:
- **데이터 시각화**: 다양한 차트 타입 활용
- **성능 최적화**: 대용량 데이터 처리
- **상태 관리**: 복잡한 필터/정렬 로직
- **반응형 디자인**: 모바일/태블릿 대응
- **실시간 데이터**: WebSocket or Polling
- **Export 기능**: CSV/PDF 생성
- **인증/권한**: Role-based Access Control

원하는 프로젝트를 선택하시면 상세 구현 가이드를 제공하겠습니다!
