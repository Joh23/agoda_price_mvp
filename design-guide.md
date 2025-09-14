# 아고다 스캐너 디자인 가이드
> SimplyCodes 스타일 기반

## 🎨 컬러 시스템

### Primary Colors (주요 색상)
```css
/* 메인 브랜드 컬러 - SimplyCodes의 주황/빨강 계열 */
--primary-orange: #FF6B35;      /* 주요 CTA 버튼, 할인 배지 */
--primary-red: #E74C3C;         /* 중요한 액션, 긴급함 표현 */
--primary-dark: #C0392B;        /* hover 상태, 어두운 강조 */

/* 성공/검증 컬러 */
--success-green: #27AE60;       /* "검증됨" 배지, 성공 메시지 */
--success-light: #2ECC71;       /* 연한 성공 표시 */

/* 경고/주의 컬러 */
--warning-yellow: #F39C12;      /* 주의사항, 중간 상태 */
--warning-orange: #E67E22;      /* 경고 메시지 */
```

### Neutral Colors (중성 색상)
```css
/* 텍스트 컬러 */
--text-primary: #2C3E50;        /* 메인 텍스트 */
--text-secondary: #7F8C8D;      /* 부가 정보, 설명 텍스트 */
--text-muted: #95A5A6;          /* 비활성 텍스트 */
--text-white: #FFFFFF;          /* 어두운 배경의 텍스트 */

/* 배경 컬러 */
--bg-primary: #FFFFFF;          /* 메인 배경 */
--bg-secondary: #F8F9FA;        /* 섹션 구분 배경 */
--bg-card: #FFFFFF;             /* 카드 배경 */
--bg-hover: #ECEFF1;            /* hover 상태 배경 */

/* 경계선 */
--border-light: #E0E4E7;        /* 연한 경계선 */
--border-medium: #BDC3C7;       /* 일반 경계선 */
--border-dark: #95A5A6;         /* 진한 경계선 */
```

### Semantic Colors (의미별 색상)
```css
/* 할인/절약 관련 */
--discount-bg: #FFF5F5;         /* 할인 카드 배경 */
--discount-border: #FED7D7;     /* 할인 카드 테두리 */
--savings-highlight: #FF6B35;   /* 절약 금액 강조 */

/* 검증/신뢰 관련 */
--verified-bg: #F0FDF4;         /* 검증된 코드 배경 */
--verified-border: #86EFAC;     /* 검증 배지 테두리 */
--trust-indicator: #27AE60;     /* 신뢰도 표시 */

/* 상태별 컬러 */
--status-working: #27AE60;      /* 작동 중인 코드 */
--status-expired: #E74C3C;      /* 만료된 코드 */
--status-unknown: #95A5A6;      /* 상태 불명 */
```

## 📝 타이포그래피

### Font Family
```css
/* Primary Font Stack - SimplyCodes와 유사한 모던 폰트 */
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
                'Helvetica Neue', Arial, sans-serif;

/* Korean Support */
--font-korean: 'Noto Sans KR', 'Malgun Gothic', '맑은 고딕', sans-serif;

/* Monospace for codes */
--font-mono: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
```

### Font Sizes & Weights
```css
/* 제목 크기 */
--text-4xl: 36px;              /* 메인 페이지 제목 */
--text-3xl: 30px;              /* 섹션 제목 */
--text-2xl: 24px;              /* 카드 제목 */
--text-xl: 20px;               /* 부제목 */

/* 본문 크기 */
--text-lg: 18px;               /* 큰 본문 텍스트 */
--text-base: 16px;             /* 기본 본문 텍스트 */
--text-sm: 14px;               /* 작은 텍스트, 부가 정보 */
--text-xs: 12px;               /* 매우 작은 텍스트, 라벨 */

/* 폰트 굵기 */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Line Heights
```css
--leading-tight: 1.2;          /* 제목용 */
--leading-normal: 1.5;         /* 본문용 */
--leading-relaxed: 1.7;        /* 긴 텍스트용 */
```

## 🔧 컴포넌트 스타일

### Buttons (버튼)
```css
/* Primary Button - SimplyCodes의 브라이트 그린 */
.btn-primary {
  background: var(--primary-green);        /* #86FC4F */
  color: var(--text-black);                /* 검은 텍스트 (SimplyCodes 스타일) */
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: var(--font-semibold);
  border: none;
  transition: all 0.2s ease;
  text-transform: uppercase;               /* SimplyCodes처럼 대문자 */
  letter-spacing: 0.5px;
}

.btn-primary:hover {
  background: var(--primary-green-dark);   /* #6BD63A */
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(134, 252, 79, 0.3);
}

/* Secondary Button - 다크 테마 스타일 */
.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  padding: 10px 20px;
  border: 2px solid var(--border-light);
  border-radius: 8px;
  font-weight: var(--font-medium);
}

.btn-secondary:hover {
  background: var(--bg-hover);
  border-color: var(--primary-green);
}

/* Verified Button - 검증된 상태 */
.btn-verified {
  background: rgba(134, 252, 79, 0.1);
  color: var(--verified-text);
  padding: 6px 12px;
  border: 1px solid rgba(134, 252, 79, 0.3);
  border-radius: 6px;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
}
```

### Cards (카드)
```css
/* 기본 카드 스타일 - 다크 테마 */
.card {
  background: var(--bg-card);              /* #111111 */
  border: 1px solid var(--border-dark);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
  border-color: rgba(134, 252, 79, 0.3);
}

/* 할인 코드 카드 */
.discount-card {
  border-left: 4px solid var(--primary-green);
  background: var(--discount-bg);
  position: relative;
}

.discount-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid var(--primary-green);
  border-top: 20px solid var(--primary-green);
  border-radius: 0 12px 0 0;
}

/* 검증된 카드 */
.verified-card {
  border: 1px solid rgba(134, 252, 79, 0.3);
  background: var(--verified-bg);
}
```

### Badges (배지)
```css
/* 검증 배지 - SimplyCodes 스타일 */
.badge-verified {
  background: transparent;
  color: var(--verified-text);             /* #86FC4F */
  padding: 4px 0;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* 할인율 배지 */
.badge-discount {
  background: var(--primary-green);
  color: var(--text-black);
  padding: 6px 12px;
  border-radius: 16px;
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  text-transform: uppercase;
}

/* 상태 배지 */
.badge-working { 
  color: var(--status-working); 
  background: rgba(134, 252, 79, 0.1);
}
.badge-expired { 
  color: var(--status-expired);
  background: rgba(239, 68, 68, 0.1);
}
.badge-unknown { 
  color: var(--status-unknown);
  background: rgba(107, 114, 128, 0.1);
}
```

## 📐 레이아웃 시스템

### Spacing Scale
```css
/* SimplyCodes 스타일의 간격 시스템 */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

### Container & Grid
```css
/* 컨테이너 최대 너비 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

/* 메인 그리드 - SimplyCodes 스타일 */
.main-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .main-grid {
    grid-template-columns: 300px 1fr;
    gap: var(--space-8);
  }
}
```

### Border Radius
```css
--radius-sm: 4px;              /* 작은 요소 */
--radius-md: 8px;              /* 기본 카드, 버튼 */
--radius-lg: 12px;             /* 큰 카드 */
--radius-xl: 16px;             /* 컨테이너 */
--radius-full: 50%;            /* 원형 */
```

## 🎯 UI 패턴

### Header Design
```css
/* SimplyCodes 스타일 헤더 */
.header {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-light);
  padding: var(--space-4) 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--primary-orange);
}
```

### Search Input
```css
/* 검색창 스타일 */
.search-input {
  width: 100%;
  padding: var(--space-4);
  border: 2px solid var(--border-light);
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
  transition: border-color 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-orange);
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
}

/* 검색 버튼 */
.search-button {
  background: var(--primary-orange);
  color: white;
  padding: var(--space-4) var(--space-6);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  margin-left: var(--space-2);
}
```

### Code Display
```css
/* 할인 코드 표시 */
.code-display {
  background: var(--bg-secondary);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--text-primary);
  border: 1px dashed var(--border-medium);
  user-select: all;
}

/* 코드 복사 버튼 */
.copy-button {
  background: var(--success-green);
  color: white;
  padding: var(--space-2) var(--space-3);
  border: none;
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  margin-left: var(--space-2);
}
```

## 📱 반응형 디자인

### Breakpoints
```css
/* SimplyCodes와 유사한 반응형 브레이크포인트 */
--breakpoint-sm: 576px;        /* 모바일 */
--breakpoint-md: 768px;        /* 태블릿 */
--breakpoint-lg: 1024px;       /* 데스크톱 */
--breakpoint-xl: 1280px;       /* 큰 화면 */
```

### Mobile First Approach
```css
/* 모바일 우선 스타일 */
.discount-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .discount-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .discount-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## 🎨 애니메이션 & 인터랙션

### Transition Effects
```css
/* 부드러운 전환 효과 */
.smooth-transition {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 호버 효과 */
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

/* 클릭 효과 */
.click-scale:active {
  transform: scale(0.98);
}
```

### Loading States
```css
/* 로딩 애니메이션 */
.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-light);
  border-top: 2px solid var(--primary-orange);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## 🚀 사용 예시

### 메인 페이지 구조
```html
<!-- SimplyCodes 스타일 메인 페이지 -->
<div class="container">
  <header class="header">
    <div class="header-content">
      <div class="logo">호텔픽</div>
      <nav>최저가 찾기</nav>
    </div>
  </header>
  
  <main class="main-content">
    <section class="hero-section">
      <h1 class="hero-title">아고다 최저가를 찾아보세요</h1>
      <div class="search-container">
        <input type="text" class="search-input" placeholder="아고다 링크를 입력하세요">
        <button class="search-button">찾기</button>
      </div>
    </section>
    
    <section class="results-section">
      <div class="discount-grid">
        <!-- 할인 카드들 -->
      </div>
    </section>
  </main>
</div>
```

이 디자인 가이드는 SimplyCodes, envato의 신뢰감 있고 깔끔한 디자인 언어를 차용하되, 아고다 할인 검색이라는 특성에 맞게 조정한 것입니다. 주황/빨강 컬러로 긴급함과 절약의 느낌을 주면서도 전문적인 인상을 유지합니다.