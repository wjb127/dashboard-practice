# Corporate Professional Dashboard Style Module

> 보수적이고 신뢰감 있는 전문가용 대시보드 스타일

## 📋 개요

**적합한 산업**:
- 금융 (은행, 증권, 보험)
- 법률 (로펌, 법무법인)
- 컨설팅 (전략, 회계, 감사)
- 대기업 (B2B 서비스)
- 정부/공공기관

**디자인 철학**:
- 보수적이고 신뢰감 있는
- 데이터 중심 (장식 최소화)
- 명확한 계층 구조
- 읽기 쉬운 타이포그래피

## 🎨 스타일 특징

### 색상 팔레트
```typescript
primary: #1e3a8a      // Navy 900 - 브랜드 컬러
secondary: #64748b    // Slate 500 - 보조 컬러
accent: #0891b2       // Cyan 600 - 강조
background: #f8fafc   // Slate 50 - 페이지 배경
border: #cbd5e1       // Slate 300 - Border
```

### 디자인 요소
- **모서리**: 직각 (`rounded-sm` or `rounded-none`)
- **Border**: 두꺼움 (`border-2`)
- **그림자**: 없음 or 최소 (`shadow-none`)
- **폰트**: 굵게 (`font-bold`, `font-semibold`)
- **대문자**: 제목은 `uppercase` + `tracking-wide`

## 📦 설치 및 사용

### 1. 파일 복사
```bash
cp -r dashboard-modules/styles/corporate-professional /your-project/src/components/corporate
```

### 2. 필요한 의존성
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "lucide-react": "^0.545.0",
    "tailwindcss": "^4.0.0"
  }
}
```

### 3. Tailwind 설정
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'navy-900': '#1e3a8a',
        'navy-800': '#1e40af',
      },
    },
  },
};
```

## 🧩 컴포넌트 가이드

### Button

```typescript
import { CorporateButton } from './atoms/Button';

// Primary Button
<CorporateButton variant="primary" size="md">
  Submit Report
</CorporateButton>

// Outline Button
<CorporateButton variant="outline" size="lg">
  Cancel Operation
</CorporateButton>

// Loading State
<CorporateButton loading>
  Processing
</CorporateButton>
```

**Props**:
| Prop | Type | Default | 설명 |
|------|------|---------|------|
| variant | 'primary' \| 'secondary' \| 'outline' | 'primary' | 버튼 스타일 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 크기 |
| fullWidth | boolean | false | 전체 너비 |
| loading | boolean | false | 로딩 상태 |

---

### Card

```typescript
import { CorporateCard } from './molecules/Card';

<CorporateCard>
  <CorporateCard.Header>
    <CorporateCard.Title>Quarterly Report</CorporateCard.Title>
    <CorporateCard.Subtitle>Q4 2024</CorporateCard.Subtitle>
  </CorporateCard.Header>

  <CorporateCard.Content>
    <p>Report content here...</p>
  </CorporateCard.Content>

  <CorporateCard.Footer>
    <CorporateButton>Download</CorporateButton>
  </CorporateCard.Footer>
</CorporateCard>
```

**서브 컴포넌트**:
- `Card.Header` - 상단 타이틀 영역 (bordered)
- `Card.Title` - 제목 (uppercase + tracking)
- `Card.Subtitle` - 부제목 (작고 연한 색)
- `Card.Content` - 본문 영역
- `Card.Footer` - 하단 액션 영역 (bordered)

---

### KPICard

```typescript
import { CorporateKPICard } from './organisms/KPICard';
import { Users } from 'lucide-react';

<CorporateKPICard
  title="Total Visitors"
  value="15,234"
  change="+12.5%"
  trend="up"
  icon={<Users className="h-10 w-10" />}
  comparisonText="vs. last quarter"
/>
```

**Props**:
| Prop | Type | Default | 설명 |
|------|------|---------|------|
| title | string | required | 지표 제목 |
| value | string \| number | required | 주요 값 |
| change | string | optional | 변화량 (예: "+12.5%") |
| trend | 'up' \| 'down' \| 'neutral' | 'neutral' | 트렌드 방향 |
| icon | ReactNode | optional | Lucide 아이콘 |
| comparisonText | string | "vs. last period" | 비교 기간 텍스트 |

---

### OverviewTemplate

```typescript
import { CorporateOverviewTemplate } from './templates/OverviewTemplate';
import { LineChart } from '@/components/charts/line-chart';
import { Users, Target, DollarSign } from 'lucide-react';

<CorporateOverviewTemplate
  title="Executive Dashboard"
  subtitle="Corporate Overview | Q4 2024"
  lastUpdated="2024-10-08"
  kpis={[
    {
      title: 'Total Visitors',
      value: '15,234',
      change: '+12.5%',
      trend: 'up',
      icon: <Users className="h-10 w-10" />,
    },
    {
      title: 'Conversion Rate',
      value: '8.4%',
      change: '+2.3%',
      trend: 'up',
      icon: <Target className="h-10 w-10" />,
    },
    // ... more KPIs
  ]}
  leftChart={{
    title: 'Visitor Trends Analysis',
    subtitle: '30-Day Period',
    content: <LineChart data={visitorData} />,
  }}
  rightChart={{
    title: 'Traffic Source Distribution',
    subtitle: 'By Channel',
    content: <BarChart data={sourceData} />,
  }}
  dataTable={{
    title: 'Key Performance Indicators',
    content: (
      <table>
        {/* Table content */}
      </table>
    ),
  }}
/>
```

## 📊 차트 스타일 가이드

### 색상 팔레트 (Recharts)
```typescript
const corporateChartColors = {
  primary: '#1e3a8a',    // Navy
  secondary: '#0891b2',  // Cyan
  tertiary: '#059669',   // Green
  quaternary: '#d97706', // Amber
};

// LineChart 예시
<LineChart
  data={data}
  dataKeys={['visitors', 'conversions']}
  colors={['#1e3a8a', '#0891b2']}
/>
```

### 스타일 권장사항
- **Line Chart**: 두꺼운 선 (`strokeWidth={2}`)
- **Bar Chart**: 단색, 간격 좁게
- **Pie Chart**: 최대 4-5 섹션, 레이블 명확하게
- **Grid**: 얇은 회색 그리드 표시

## 🎯 테이블 스타일 가이드

```typescript
<table className="w-full border-collapse">
  <thead>
    <tr className="bg-slate-100 border-b-2 border-slate-300">
      <th className="px-6 py-3 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">
        Metric
      </th>
      <th className="px-6 py-3 text-right text-xs font-bold text-slate-700 uppercase tracking-wider">
        Value
      </th>
    </tr>
  </thead>
  <tbody className="divide-y divide-slate-200">
    <tr className="hover:bg-slate-50">
      <td className="px-6 py-4 text-sm font-medium text-slate-900">
        Page Views
      </td>
      <td className="px-6 py-4 text-sm text-right text-slate-700">
        45,678
      </td>
    </tr>
  </tbody>
</table>
```

**특징**:
- 스트라이프 행 (hover:bg-slate-50)
- 고정 헤더 (sticky top-0)
- 명확한 border
- 오른쪽 정렬 숫자

## 💡 커스터마이징 가이드

### 브랜드 컬러 변경

**1. colors.ts 수정**:
```typescript
export const corporateColors = {
  primary: '#YOUR_BRAND_COLOR',  // 회사 브랜드 컬러로 변경
  secondary: '#64748b',
  // ...
};
```

**2. Tailwind 클래스 업데이트**:
```typescript
// Button.tsx, Card.tsx 등에서
// bg-navy-900 → bg-[YOUR_COLOR]
```

### 모서리 둥글게 만들기

**모든 컴포넌트에서**:
```diff
- rounded-sm
+ rounded-lg
```

### 그림자 추가

**Card.tsx**:
```diff
- className="bg-white border-2 border-slate-300 rounded-sm"
+ className="bg-white border-2 border-slate-300 rounded-sm shadow-md"
```

## 🚀 실전 예시

### 예시 1: 금융 대시보드
```typescript
<CorporateOverviewTemplate
  title="Financial Dashboard"
  subtitle="Investment Portfolio Overview | Q4 2024"
  kpis={[
    { title: 'Total Assets', value: '$2.5M', trend: 'up', change: '+8.2%' },
    { title: 'YTD Return', value: '12.4%', trend: 'up', change: '+3.1%' },
    { title: 'Portfolio Risk', value: 'Medium', trend: 'neutral' },
    { title: 'Transactions', value: '148', trend: 'up', change: '+24' },
  ]}
  leftChart={{
    title: 'Asset Allocation',
    content: <PieChart data={assetData} />,
  }}
  rightChart={{
    title: 'Performance Trend',
    content: <LineChart data={performanceData} />,
  }}
/>
```

### 예시 2: 법률 대시보드
```typescript
<CorporateOverviewTemplate
  title="Case Management Dashboard"
  subtitle="Legal Department | 2024"
  kpis={[
    { title: 'Active Cases', value: '42', trend: 'up', change: '+7' },
    { title: 'Win Rate', value: '87%', trend: 'up', change: '+2%' },
    { title: 'Avg. Settlement', value: '$125K', trend: 'neutral' },
    { title: 'Pending Reviews', value: '12', trend: 'down', change: '-3' },
  ]}
  leftChart={{
    title: 'Case Status Distribution',
    content: <BarChart data={caseData} />,
  }}
  rightChart={{
    title: 'Monthly Case Volume',
    content: <LineChart data={volumeData} />,
  }}
/>
```

## 📝 체크리스트

프로젝트에 적용하기 전 확인:

- [ ] 타겟 고객이 보수적인 산업인가?
- [ ] 데이터 중심 대시보드인가?
- [ ] 신뢰감과 전문성이 중요한가?
- [ ] 읽기 쉬운 레이아웃이 우선인가?
- [ ] 모바일보다 데스크톱 사용이 많은가?

5개 중 3개 이상 "예" → Corporate Professional 스타일 추천!

## 🔗 관련 문서

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide React Icons](https://lucide.dev/)
- [Recharts Documentation](https://recharts.org/)

## 📄 라이선스

MIT License - 자유롭게 사용 및 수정 가능
