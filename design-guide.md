# 아고다 스캐너 디자인 가이드
> SimplyCodes 스타일 기반

## 🎨 컬러 시스템

### Primary Colors (주요 색상)
```css
/* 메인 브랜드 컬러 - SimplyCodes 브라이트 그린 */
--primary-green: #86FC4F;           /* 브라이트 그린 - 메인 CTA */
--primary-green-dark: #6BD63A;      /* 그린 호버 상태 */
--primary-green-light: #9DFF6B;     /* 연한 그린 */

/* 보조 컬러 */
--success-green: #27AE60;           /* 성공 메시지 */
--error-red: #FF4757;               /* 에러 메시지 */
--warning-yellow: #FFA502;          /* 경고 메시지 */
```

### Neutral Colors (다크 테마)
```css
/* 다크 테마 배경 */
--bg-primary: #0F0F0F;              /* 메인 다크 배경 */
--bg-secondary: #1A1A1A;            /* 섹션 구분 배경 */
--bg-card: #111111;                 /* 카드 배경 */
--bg-hover: #1F1F1F;                /* 호버 상태 배경 */
--bg-input: #191919;                /* 인풋 배경 */

/* 텍스트 컬러 (다크 테마) */
--text-primary: #FFFFFF;            /* 메인 텍스트 (흰색) */
--text-secondary: #B0B0B0;          /* 부가 정보 텍스트 */
--text-muted: #707070;              /* 비활성 텍스트 */
--text-black: #000000;              /* 브라이트 그린 버튼 위 검은 텍스트 */
--text-green: #86FC4F;              /* 그린 강조 텍스트 */

/* 경계선 (다크 테마) */
--border-light: #2A2A2A;            /* 연한 경계선 */
--border-medium: #3A3A3A;           /* 일반 경계선 */
--border-dark: #4A4A4A;             /* 진한 경계선 */
--border-green: rgba(134, 252, 79, 0.3); /* 그린 경계선 */
```

### Semantic Colors (의미별 색상)
```css
/* 검증/신뢰 관련 (다크 테마) */
--verified-bg: rgba(134, 252, 79, 0.1);     /* 검증된 카드 배경 */
--verified-border: rgba(134, 252, 79, 0.3); /* 검증 배지 테두리 */
--discount-bg: rgba(134, 252, 79, 0.05);    /* 할인 카드 배경 */

/* 상태별 컬러 */
--status-working: #86FC4F;      /* 작동 중인 코드 (브라이트 그린) */
--status-expired: #FF4757;      /* 만료된 코드 */
--status-unknown: #707070;      /* 상태 불명 */

/* 그림자 (다크 테마) */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.5);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.6);
--shadow-green: 0 4px 20px rgba(134, 252, 79, 0.3);
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
/* 제목 크기 (다크 테마 최적화) */
--text-4xl: 42px;              /* 메인 페이지 제목 */
--text-3xl: 32px;              /* 섹션 제목 */
--text-2xl: 26px;              /* 카드 제목 */
--text-xl: 22px;               /* 부제목 */

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

### Buttons (버튼) - 다크 테마 업데이트
```css
/* Primary Button - SimplyCodes 브라이트 그린 */
.search-button {
  background: var(--primary-green);        /* #86FC4F */
  color: var(--text-black);                /* 검은 텍스트 */
  padding: var(--space-5) var(--space-8);  /* 20px 32px */
  border-radius: var(--radius-lg);         /* 14px */
  font-weight: var(--font-bold);
  border: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
}

.search-button:hover {
  background: var(--primary-green-dark);   /* #6BD63A */
  transform: translateY(-2px);
  box-shadow: var(--shadow-green);         /* 브라이트 그린 글로우 */
}

/* Secondary Button - 다크 테마 */
.btn-secondary {
  background: transparent;
  color: var(--text-secondary);
  padding: var(--space-4) var(--space-8);
  border: 2px solid var(--border-medium);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-secondary:hover {
  background: var(--bg-hover);
  border-color: var(--primary-green);
  color: var(--primary-green);
  transform: translateY(-2px);
}

/* Link Button - 결과 페이지 */
.link-button {
  background: var(--primary-green);
  color: var(--text-black);
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  text-transform: uppercase;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
}

.link-button:hover {
  background: var(--primary-green-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(134, 252, 79, 0.4);
}
```

### Cards (카드) - 다크 테마 업데이트
```css
/* 기본 카드 스타일 - 다크 테마 */
.usage-guide, .feature-item, .hotel-info, .link-category {
  background: var(--bg-card);              /* #111111 */
  border: 1px solid var(--border-light);  /* #2A2A2A */
  border-radius: var(--radius-xl);         /* 18px */
  padding: var(--space-8);                 /* 32px */
  box-shadow: var(--shadow-md);            /* 다크 테마 그림자 */
  transition: all 0.3s ease;
}

.feature-item:hover, .link-category:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: var(--border-green);       /* 브라이트 그린 테두리 */
}

/* 링크 아이템 카드 */
.link-item {
  background: var(--bg-hover);             /* #1F1F1F */
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);         /* 14px */
  padding: var(--space-5);                 /* 20px */
  transition: all 0.3s ease;
}

.link-item:hover {
  border-color: var(--primary-green);
  background: var(--bg-input);             /* #191919 */
  transform: translateX(4px);              /* 슬라이드 효과 */
}

/* 사용법 가이드 특별 스타일 */
.usage-steps li {
  background: var(--bg-hover);
  border-left: 3px solid var(--primary-green);
  border-radius: var(--radius-md);
}

.usage-steps li::before {
  background: var(--primary-green);
  color: var(--text-black);              /* 브라이트 그린 위 검은 텍스트 */
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

이 디자인 가이드는 SimplyCodes와 Envato Elements의 신뢰감 있고 모던한 디자인 언어를 차용하되, 아고다 할인 검색이라는 특성에 맞게 조정한 것입니다.

**핵심 특징**:
- **다크 테마**: 모던하고 세련된 느낌의 검은색 계열 배경
- **브라이트 그린**: #86FC4F로 강력한 시각적 포인트 제공
- **글로우 효과**: 그림자와 호버 효과로 상호작용성 강화
- **모바일 최적화**: 반응형 디자인으로 모든 디바이스에서 완벽 동작
- **SimplyCodes 스타일**: 대문자 버튼 텍스트, letter-spacing, 부드러운 애니메이션