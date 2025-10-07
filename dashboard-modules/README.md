# Dashboard Style Modules

> 재사용 가능한 대시보드 스타일 컴포넌트 라이브러리

## 📦 포함된 모듈

### 1. **Corporate Professional** 🏢
**경로**: `/styles/corporate-professional/`

**적합 산업**: 금융, 법률, 컨설팅, 대기업

**특징**:
- 보수적이고 신뢰감 있는 디자인
- 네이비/그레이 색상
- 직각 모서리, 두꺼운 border
- 데이터 중심 레이아웃

**주요 컴포넌트**:
- `CorporateButton` - 전문가용 버튼
- `CorporateCard` - 명확한 구조의 카드
- `CorporateKPICard` - KPI 지표 카드
- `CorporateOverviewTemplate` - 전체 페이지 템플릿

**색상**: Navy #1e3a8a, Slate #64748b, Cyan #0891b2

---

### 2. **Soft Pastel** 🎀
**경로**: `/styles/soft-pastel/`

**적합 산업**: 뷰티, 화장품, 베이커리, 육아, 웰니스

**특징**:
- 부드럽고 따뜻한 파스텔 톤
- 둥근 모서리 (rounded-3xl)
- 그래디언트 배경
- 미묘한 그림자

**주요 컴포넌트**:
- `SoftPastelCard` - 파스텔 그래디언트 카드
- `SoftPastelButton` - 둥근 버튼
- `SoftPastelKPICard` - 귀여운 KPI 카드

**색상**: Pink #f472b6, Purple #c4b5fd, Blue #38bdf8, Peach #fb923c

---

### 3. **Modern SaaS** 💻
**경로**: `/styles/modern-saas/`

**적합 산업**: 스타트업, SaaS, 테크 회사, 디지털 서비스

**특징**:
- 깔끔하고 모던한 디자인
- 최소한의 장식
- 블루 액센트
- 사용자 친화적

**주요 컴포넌트**:
- 현재 프로젝트의 기본 컴포넌트 활용
- `/components/dashboard/kpi-card.tsx` 참고

**색상**: Blue #3b82f6, Gray #6b7280, Green #10b981

---

## 🚀 사용 방법

### 1. 모듈 복사
```bash
# Corporate Professional 사용
cp -r dashboard-modules/styles/corporate-professional /your-project/src/components/

# Soft Pastel 사용
cp -r dashboard-modules/styles/soft-pastel /your-project/src/components/

# Modern SaaS 사용
# → 현재 프로젝트 컴포넌트 그대로 사용
```

### 2. Import 예시
```typescript
// Corporate Professional
import { CorporateButton } from '@/components/corporate-professional/atoms/Button';
import { CorporateCard } from '@/components/corporate-professional/molecules/Card';
import { CorporateKPICard } from '@/components/corporate-professional/organisms/KPICard';
import { CorporateOverviewTemplate } from '@/components/corporate-professional/templates/OverviewTemplate';

// Soft Pastel
import { SoftPastelCard } from '@/components/soft-pastel/molecules/Card';

// Modern SaaS
import { KPICard } from '@/components/dashboard/kpi-card';
```

### 3. 사용 예시
```typescript
// Corporate Professional
<CorporateOverviewTemplate
  title="Executive Dashboard"
  subtitle="Q4 2024"
  kpis={[
    { title: 'Revenue', value: '$2.5M', trend: 'up', change: '+12%' },
  ]}
  leftChart={{
    title: 'Performance',
    content: <LineChart data={data} />,
  }}
  rightChart={{
    title: 'Distribution',
    content: <BarChart data={data} />,
  }}
/>

// Soft Pastel
<SoftPastelCard variant="pink" hoverable>
  <h3>Lovely Dashboard</h3>
  <p>Beautiful pastel colors</p>
</SoftPastelCard>
```

---

## 📊 스타일 비교표

| 특징 | Corporate | Soft Pastel | Modern SaaS |
|------|-----------|-------------|-------------|
| 난이도 | ⭐ | ⭐ | ⭐ |
| 보편성 | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 차별성 | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| 개발 속도 | 빠름 | 빠름 | 매우 빠름 |
| 적합 산업 | 금융, 법률 | 뷰티, 육아 | 테크, SaaS |
| 색상 | 네이비/그레이 | 핑크/파스텔 | 블루/화이트 |
| 모서리 | 직각 | 둥글게 | 중간 |
| Border | 두꺼움 | 얇음 | 얇음 |
| 그림자 | 없음 | 부드러움 | 미묘함 |

---

## 💡 선택 가이드

### Corporate Professional을 선택하세요:
- ✅ 타겟 고객이 40대 이상
- ✅ 금융/법률 등 보수적 산업
- ✅ 데이터 중심 대시보드
- ✅ 신뢰감이 최우선

### Soft Pastel을 선택하세요:
- ✅ 여성 고객이 주 타겟
- ✅ 뷰티/웰니스 산업
- ✅ 친근하고 따뜻한 느낌 중요
- ✅ 차별화된 디자인 필요

### Modern SaaS를 선택하세요:
- ✅ 스타트업 또는 테크 회사
- ✅ 빠른 개발이 중요
- ✅ 범용적인 디자인 필요
- ✅ 사용자 친화적 UI 우선

---

## 🔧 커스터마이징

### 브랜드 컬러 변경
각 모듈의 `config/colors.ts` 파일 수정:
```typescript
// config/colors.ts
export const colors = {
  primary: '#YOUR_BRAND_COLOR',
  // ...
};
```

### 컴포넌트 스타일 수정
Tailwind 클래스를 직접 수정:
```typescript
// Before
className="bg-blue-500 rounded-lg"

// After
className="bg-green-500 rounded-xl"
```

---

## 📚 폴더 구조

```
dashboard-modules/
├── README.md (이 파일)
└── styles/
    ├── corporate-professional/
    │   ├── config/
    │   │   └── colors.ts
    │   ├── atoms/
    │   │   └── Button.tsx
    │   ├── molecules/
    │   │   └── Card.tsx
    │   ├── organisms/
    │   │   └── KPICard.tsx
    │   ├── templates/
    │   │   └── OverviewTemplate.tsx
    │   └── README.md
    ├── soft-pastel/
    │   ├── config/
    │   │   └── colors.ts
    │   ├── molecules/
    │   │   └── Card.tsx
    │   └── README.md
    └── modern-saas/
        ├── config/
        │   └── colors.ts
        └── README.md
```

---

## 🎯 실전 활용 시나리오

### 시나리오 1: 금융 스타트업 대시보드
**선택**: Corporate Professional + 브랜드 컬러 커스터마이징

**이유**:
- 금융 산업 → 신뢰감 필수
- 데이터 중심 → 명확한 레이아웃
- 투자 유치 → 전문가적 인상

**작업 시간**: 2일 (모듈 활용 시)

---

### 시나리오 2: 뷰티 브랜드 고객 관리
**선택**: Soft Pastel

**이유**:
- 뷰티 산업 → 여성 타겟
- 브랜드 정체성 → 부드럽고 고급스러운
- 차별화 → 독특한 파스텔 톤

**작업 시간**: 1.5일

---

### 시나리오 3: SaaS 제품 Analytics
**선택**: Modern SaaS

**이유**:
- 범용 SaaS → 익숙한 UI 패턴
- 빠른 개발 → 검증된 컴포넌트
- 사용자 친화적 → 높은 UX

**작업 시간**: 0.5일 (현재 프로젝트 활용)

---

## 📄 라이선스

MIT License - 자유롭게 사용 및 수정 가능

---

## 🔗 관련 문서

- [프리랜서 베스트 프랙티스](../FREELANCE_BEST_PRACTICES.md)
- [스타일 가이드](../FREELANCE_DASHBOARD_STYLES.md)
- [아키텍처 가이드](../DASHBOARD_ARCHITECTURE.md)

---

**만든 이**: Claude Code 🤖
**최종 업데이트**: 2025-10-08
