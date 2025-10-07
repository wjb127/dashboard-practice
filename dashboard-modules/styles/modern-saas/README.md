# Modern SaaS Dashboard Style Module

> 깔끔하고 모던한 SaaS 스타일 (현재 프로젝트 기본 스타일)

## 📋 개요

**적합한 산업**:
- 스타트업
- SaaS 제품 (B2B/B2C)
- 테크 회사
- 디지털 서비스
- 클라우드 플랫폼

**디자인 철학**:
- Clean & Modern
- 최소한의 장식
- 명확한 계층 구조
- 사용자 친화적

## 🎨 스타일 특징

### 색상 팔레트
```typescript
primary: #3b82f6      // Blue 500 - 브랜드 컬러
secondary: #6b7280    // Gray 500 - 보조 컬러
success: #10b981      // Green 500
warning: #f59e0b      // Amber 500
danger: #ef4444       // Red 500
background: #ffffff   // White
card: #f9fafb         // Gray 50
```

### 디자인 요소
- **모서리**: 중간 둥글기 (`rounded-lg`)
- **Border**: 얇음 (`border`)
- **그림자**: 미묘함 (`shadow-sm`, `shadow-md`)
- **폰트**: 적절한 굵기 (`font-medium`, `font-semibold`)
- **간격**: 넉넉한 padding/margin

## 🧩 주요 컴포넌트

### Card
```tsx
<div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
  <h3 className="text-lg font-semibold text-gray-900">Title</h3>
  <p className="text-gray-600 mt-2">Content</p>
</div>
```

### Button
```tsx
<button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  Click me
</button>
```

### KPI Card
```tsx
<div className="bg-white rounded-lg border shadow-sm p-6">
  <p className="text-sm text-gray-500">Total Users</p>
  <p className="text-3xl font-bold text-gray-900 mt-2">15,234</p>
  <p className="text-sm text-green-600 mt-2">↑ +12.5%</p>
</div>
```

## 📊 차트 스타일

**Recharts 색상**:
- Primary Line: `#3b82f6` (blue)
- Secondary Line: `#10b981` (green)
- Tertiary: `#f59e0b` (amber)

**권장사항**:
- 부드러운 곡선 (`type="monotone"`)
- Tooltip 활성화
- 그리드 라인 표시 (연한 회색)

## 🎯 테이블 스타일

```tsx
<table className="w-full">
  <thead>
    <tr className="border-b border-gray-200 bg-gray-50">
      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">
        Name
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2 text-sm text-gray-700">
        Value
      </td>
    </tr>
  </tbody>
</table>
```

## 💡 사용 사례

### 예시 1: SaaS Analytics Dashboard
```typescript
<div className="p-6 bg-gray-50 min-h-screen">
  <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>

  {/* KPI Grid */}
  <div className="grid grid-cols-4 gap-6 mt-6">
    {/* KPI Cards */}
  </div>

  {/* Charts */}
  <div className="grid grid-cols-2 gap-6 mt-6">
    {/* Chart Cards */}
  </div>
</div>
```

## 🚀 빠른 시작

1. 현재 프로젝트의 컴포넌트들이 이미 Modern SaaS 스타일입니다
2. `/components/dashboard/kpi-card.tsx` 참고
3. `/app/page.tsx` 참고 (Overview 페이지)

## 📝 장점

✅ 범용성: 대부분의 SaaS 제품에 적용 가능
✅ 친숙함: 사용자가 익숙한 UI 패턴
✅ 빠른 개발: 복잡한 디자인 불필요
✅ 유지보수: 간단한 구조로 수정 용이

## 🔗 참고

- 현재 프로젝트가 이 스타일 사용 중
- `/app/page.tsx`, `/app/leads/page.tsx`, `/app/analytics/page.tsx` 참고
