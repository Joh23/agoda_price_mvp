# 호텔픽 MVP 개발 계획

## 🎯 프로젝트 개요

**프로젝트**: 호텔픽(HotelPick) MVP - 아고다 CID 변환 서비스
**브랜딩**: 호텔픽은 가제명, 최종 서비스명 미정
**로고**: 현재 미적용 (이모지 🏨 임시 사용), 브랜드 아이덴티티 개발 필요
**파비콘**: 미적용, 브라우저 탭 아이콘 개발 필요
**목표**: 아고다 링크를 카드사/제휴사 할인 링크로 변환하는 웹 서비스 (엔바토 스타일 + A/B 테스트 적용)
**기간**: 2-3주 (MVP)
**예상 투입**: 1명 (직접 개발)
**비용**: ₩0 (GitHub Pages 무료 호스팅)

---

## 📅 개발 일정

### 1주차: 기존 서비스 분석 및 기본 구조
**목표**: 경쟁사 분석 완료 + 기본 HTML/CSS 구조 구축

#### Day 1-2: 경쟁사 분석 및 CID 데이터 수집
- [ ] 아고다줍줄 서비스 상세 분석
- [ ] 아고다스캐너 기능 및 UI 분석
- [ ] 모든 CID 값 수집 및 정리
- [ ] 카드사별, 제휴사별 CID 매핑 데이터 구축

#### Day 3-5: 기본 UI 구조 개발
- [x] HTML 마크업 구조 설계 (완료)
- [x] 커스텀 CSS 스타일링 (SimplyCodesAI 테마 적용)
- [x] 반응형 디자인 기본 구조 (완료)
- [x] 엔바토 스타일 2열 레이아웃 구현 (완료)

#### Day 6-7: 디자인 시스템 구축
- [x] 컬러 스킴 적용 (다크 테마 완료)
- [x] 타이포그래피 설정 (Noto Sans KR 완료)
- [x] 버튼, 인풋 등 UI 컴포넌트 스타일링 (완료)
- [x] 모바일 최적화 디자인 (완료)
- [x] 인터랙티브 hover 효과 구현 (완료)

### 2주차: 핵심 기능 구현
**목표**: CID 변환 로직 완성 + 결과 표시 기능

#### Day 8-10: JavaScript 핵심 로직
- [x] 아고다 URL 검증 함수 구현 (완료)
- [x] ds 파라미터 CID 변환 로직 구현 (완료)
- [x] URL 파라미터 조작 함수 (완료)
- [x] 에러 처리 로직 (완료)
- [x] A/B 테스트 시스템 구현 (완료)

#### Day 11-12: 결과 표시 시스템
- [x] 카테고리별 결과 정리 함수 (완료)
- [x] 동적 HTML 생성 로직 (완료)
- [x] 새창에서 열기 기능 (완료)
- [ ] 복사 기능 구현 (미구현)
- [x] 동적 섹션 재배치 기능 (검색 후 UI 플로우 개선)

#### Day 13-14: 사용자 경험 개선
- [x] 로딩 상태 표시 (완료)
- [x] 에러 메시지 개선 (완료)
- [x] 엔바토 스타일 혜택 설명 섹션 (사용법 가이드 대체)
- [x] 기본 기능 테스트 (완료)

### 3주차: 테스트, 최적화 및 배포
**목표**: 완전한 서비스 테스트 + GitHub Pages 배포

#### Day 15-17: 테스트 및 버그 수정
- [ ] 다양한 아고다 URL 패턴 테스트
- [ ] 모바일 디바이스 테스트
- [ ] 브라우저 호환성 테스트 (Chrome, Safari, Firefox, Edge)
- [ ] 버그 수정 및 안정성 개선

#### Day 18-19: 최적화 및 SEO
- [ ] 코드 최적화 및 압축
- [ ] 이미지 최적화
- [ ] 메타 태그 SEO 최적화
- [ ] Google Analytics 연동

#### Day 20-21: 배포 및 모니터링
- [ ] GitHub Pages 배포 설정
- [ ] 도메인 연결 (선택사항)
- [ ] 배포 테스트 및 검증
- [ ] 런칭 후 모니터링

---

## 🛠️ 기술 스택 (초간단)

### Frontend (정적 사이트)
```
HTML5 + CSS3 + JavaScript (ES6+)
├── CSS: 커스텀 CSS (SimplyCodesAI 다크 테마)
├── 폰트: Google Fonts (Noto Sans KR)
├── Build Tool: 없음 (순수 HTML)
├── A/B 테스트: localStorage 기반
├── 인터랙션: Envato 스타일 hover 효과
├── Hosting: GitHub Pages (무료)
└── Domain: [username].github.io (무료)
```

### 개발 도구 (최소화)
```
개발 환경
├── VS Code (에디터)
├── Live Server (로컬 개발)
├── Git + GitHub (버전 관리)
└── Chrome DevTools (디버깅)
```

### 외부 서비스
```
무료 서비스만
├── GitHub Pages (호스팅)
├── Google Analytics (분석)
└── Google Fonts (폰트)
```

---

## 📋 핵심 개발 작업

### 1. CID 데이터 구조 설계
```javascript
const CID_DATABASE = {
  // 카드사별 CID (ds 파라미터 방식)
  cards: {
    'bc': { name: 'BC카드', cid: '2211799', affiliate: '2394660' },
    'kb': { name: '국민카드', cid: '2211799', affiliate: '2463816' },
    'shinhan': { name: '신한카드', cid: '2211799', affiliate: '2211800' },
    'shinhan_master': { name: '신한(마스터)', cid: '2211799', affiliate: '2211800' },
    'hyundai': { name: '현대카드', cid: '2211799', affiliate: '2394660' },
    'hana': { name: '하나카드', cid: '2211799', affiliate: '2463816' },
    'woori': { name: '우리카드', cid: '2211799', affiliate: '2211800' },
    'toss': { name: '토스', cid: '2211799', affiliate: '2394660' },
    'mastercard': { name: '마스터카드', cid: '2211799', affiliate: '2463816' },
    'visa': { name: '비자카드', cid: '2211799', affiliate: '2211800' },
    'unionpay': { name: '유니온페이', cid: '2211799', affiliate: '2394660' },
    'kakaopay': { name: '카카오페이', cid: '2211799', affiliate: '2463816' }
  },

  // 검색 경로별 CID
  search: {
    'google_map_1': { name: '구글지도1', cid: 'actual_cid_value' },
    'google_map_2': { name: '구글지도2', cid: 'actual_cid_value' },
    'google_map_3': { name: '구글지도3', cid: 'actual_cid_value' },
    'google_search_1': { name: '구글검색1', cid: 'actual_cid_value' },
    'google_search_2': { name: '구글검색2', cid: 'actual_cid_value' },
    'google_search_3': { name: '구글검색3', cid: 'actual_cid_value' },
    'naver_search_1': { name: '네이버검색1', cid: 'actual_cid_value' }
  },

  // 항공사 제휴 CID
  airlines: {
    'kal': { name: '대한항공', cid: 'actual_cid_value' },
    'aar': { name: '아시아나항공', cid: 'actual_cid_value' },
    'air_seoul': { name: '에어서울', cid: 'actual_cid_value' }
  }
};
```

### 2. URL 변환 핵심 로직
```javascript
// 아고다 URL 검증
function validateAgodaUrl(url) {
  const agodaPattern = /^https?:\/\/(www\.|m\.)?agoda\.com/;
  return agodaPattern.test(url);
}

// ds 파라미터 추가 함수 (새로운 CID 방식)
function addCidToUrl(originalUrl, cidData) {
  try {
    const url = new URL(originalUrl);
    // ds 파라미터: cid.affiliate.0.0.0 형식
    const dsValue = `${cidData.cid}.${cidData.affiliate}.0.0.0`;
    url.searchParams.set('ds', dsValue);
    return url.toString();
  } catch (error) {
    return null;
  }
}

// 호텔 정보 추출 (기본)
function extractHotelInfo(url) {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;

    // 기본적인 호텔명 추출 시도
    const hotelMatch = pathname.match(/\/([^\/]+)\.html/);
    const hotelName = hotelMatch ? hotelMatch[1].replace(/-/g, ' ') : '호텔';

    return {
      name: hotelName,
      checkin: urlObj.searchParams.get('checkin') || '날짜 미지정',
      checkout: urlObj.searchParams.get('checkout') || '날짜 미지정'
    };
  } catch {
    return { name: '호텔', checkin: '날짜 미지정', checkout: '날짜 미지정' };
  }
}

// 전체 변환 함수
function convertAllLinks(originalUrl) {
  if (!validateAgodaUrl(originalUrl)) {
    throw new Error('올바른 아고다 링크가 아닙니다.');
  }

  const results = {
    hotel: extractHotelInfo(originalUrl),
    links: {}
  };

  // 각 카테고리별 링크 생성
  Object.keys(CID_DATABASE).forEach(category => {
    results.links[category] = [];

    Object.entries(CID_DATABASE[category]).forEach(([key, data]) => {
      const convertedUrl = addCidToUrl(originalUrl, data.cid);
      if (convertedUrl) {
        results.links[category].push({
          name: data.name,
          url: convertedUrl,
          key: key
        });
      }
    });
  });

  return results;
}
```

### 3. HTML 구조 (최종 버전)
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>호텔픽 - 아고다 최저가 찾기</title>
  <meta name="description" content="아고다 호텔 링크를 카드사 할인 링크로 변환하는 무료 서비스">
  <meta name="keywords" content="아고다, 할인, 카드사, 호텔, 최저가">

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">

  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>

  <style>
    body { font-family: 'Noto Sans KR', sans-serif; }
  </style>
</head>
<body class="bg-gray-50 min-h-screen">
  <!-- 헤더 -->
  <header class="bg-white shadow-sm border-b">
    <div class="container mx-auto px-4 py-6">
      <div class="text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          🏨 호텔픽
        </h1>
        <p class="text-gray-600 text-lg">
          아고다 최저가 찾기 서비스
        </p>
      </div>
    </div>
  </header>

  <!-- 메인 콘텐츠 -->
  <main class="container mx-auto px-4 py-8">
    <!-- 입력 섹션 -->
    <section class="max-w-2xl mx-auto mb-12">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4">아고다 링크를 입력하세요</h2>

        <div class="flex flex-col sm:flex-row gap-3 mb-4">
          <input type="url"
                 id="agoda-url"
                 placeholder="https://www.agoda.com/..."
                 class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                 autocomplete="off">
          <button id="convert-btn"
                  class="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors">
            변환하기
          </button>
        </div>

        <div id="error-message" class="hidden text-red-600 text-sm mt-2"></div>
      </div>

      <!-- 사용법 가이드 -->
      <div class="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 class="font-semibold text-blue-900 mb-3">💡 사용방법</h3>
        <ol class="text-blue-800 space-y-1">
          <li>1. 아고다에서 원하는 호텔의 링크를 복사하세요</li>
          <li>2. 위 입력창에 링크를 붙여넣으세요</li>
          <li>3. '변환하기' 버튼을 클릭하세요</li>
          <li>4. 생성된 할인 링크 중 원하는 것을 클릭하세요</li>
        </ol>
      </div>
    </section>

    <!-- 결과 섹션 -->
    <section id="results-section" class="hidden max-w-4xl mx-auto">
      <!-- 호텔 정보 -->
      <div id="hotel-info" class="bg-white rounded-lg shadow-md p-6 mb-6">
        <!-- 동적으로 생성됩니다 -->
      </div>

      <!-- 할인 링크 목록 -->
      <div id="links-container" class="space-y-6">
        <!-- 동적으로 생성됩니다 -->
      </div>

      <!-- 다시 검색 버튼 -->
      <div class="text-center mt-8">
        <button id="reset-btn"
                class="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors">
          🔄 다시 검색하기
        </button>
      </div>
    </section>
  </main>

  <!-- 푸터 -->
  <footer class="bg-white border-t mt-16">
    <div class="container mx-auto px-4 py-6">
      <div class="text-center text-gray-600 text-sm">
        <p>&copy; 2025 호텔픽. 아고다와는 별개의 독립적인 서비스입니다.</p>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 디자인 가이드라인

### 컬러 스킴 (SimplyCodesAI 다크 테마)
```css
:root {
  --primary: #86FC4F;           /* 밝은 네온 그린 - 주요 액션 */
  --background: #0F0F0F;        /* 다크 블랙 - 메인 배경 */
  --secondary-bg: #1A1A1A;      /* 카드, 패널 배경 */
  --border: rgba(134, 252, 79, 0.2); /* 그린 테두리 */
  --text-primary: #FFFFFF;      /* 화이트 - 메인 텍스트 */
  --text-secondary: #B0B0B0;    /* 보조 텍스트 */
  --hover-bg: #1A1A1A;          /* 호버 상태 배경 */
}

/* 인터랙티브 효과 */
.benefit-row:hover {
  background: var(--hover-bg);
  border: 1px solid var(--border);
  transform: translateY(-4px);
}

.benefits-section:hover .benefit-row:not(:hover) {
  opacity: 0.4;
  transform: scale(0.98);
}
```

### 카테고리별 아이콘
```javascript
const CATEGORY_ICONS = {
  cards: '💳',
  search: '🔍',
  airlines: '✈️'
};

const CATEGORY_NAMES = {
  cards: '카드사 할인 링크',
  search: '검색 경로별 링크',
  airlines: '항공사 제휴 링크'
};
```

---

## 📊 예상 성과 지표

### 1단계 MVP 목표
- **사용자 수**: 월 1,000명 (런칭 후 3개월)
- **변환 성공률**: 95% 이상
- **페이지 로딩 속도**: 2초 이내
- **모바일 사용률**: 70% 이상

### 추적할 지표
```javascript
// Google Analytics 이벤트
gtag('event', 'convert_link', {
  'event_category': 'engagement',
  'event_label': 'agoda_to_cid'
});

gtag('event', 'click_converted_link', {
  'event_category': 'conversion',
  'event_label': cid_type // 'cards', 'search', 'airlines'
});
```

---

## ⚠️ 주요 고려사항

### 1. CID 값 수집 및 검증
**도전 과제**:
- 정확한 CID 값 확보 (아고다줍줍/스캐너 분석)
- CID 값의 유효성 및 지속성 확인
- 새로운 CID 발견 시 업데이트 필요

**대응 방안**:
- 경쟁사 심화 분석
- 사용자 피드백을 통한 검증
- 정기적인 CID 데이터 업데이트

### 2. 사용자 경험
**핵심 원칙**:
- 기존 서비스보다 간단하고 직관적
- 모바일 우선 디자인
- 즉시 결과 표시 (로딩 최소화)

### 3. 법적/윤리적 고려사항
**준수사항**:
- 아고다 브랜드 무단 사용 금지
- 사용자에게 독립 서비스임을 명시
- 할인 혜택 보장 불가 고지

---

## 🚀 단계별 체크리스트

### 1주차 완료 기준
- [x] 경쟁사 분석 보고서 완성
- [x] 주요 CID 데이터 수집 및 정리 (ds 파라미터 방식)
- [x] HTML/CSS 기본 구조 완성
- [x] 반응형 디자인 적용 (완료)
- [x] 로컬 개발 환경 구축
- [x] 엔바토 스타일 디자인 적용 (추가 달성)

### 2주차 완료 기준
- [x] URL 검증 기능 구현 완료
- [x] ds 파라미터 CID 변환 로직 100% 동작
- [x] 결과 표시 시스템 완성
- [x] 에러 처리 로직 구현
- [x] 기본 기능 테스트 완료
- [x] A/B 테스트 시스템 구축 (추가 달성)
- [x] 인터랙티브 UX 개선 (추가 달성)

### 3주차 완료 기준 (최종)
- [ ] 모든 브라우저에서 정상 동작
- [ ] 모바일 최적화 완료
- [ ] GitHub Pages 배포 완료
- [ ] Google Analytics 연동
- [ ] SEO 최적화 완료
- [ ] 성능 점수 목표치 달성

---

## 💰 비용 계획 (1단계)

### 개발 비용
- **개발자 인건비**: ₩0 (직접 개발)
- **도구 및 소프트웨어**: ₩0 (무료 도구만 사용)
- **총 개발비**: ₩0

### 운영 비용
- **호스팅**: ₩0 (GitHub Pages)
- **도메인**: ₩0 (github.io) 또는 ₩20,000/년 (커스텀 도메인)
- **분석 도구**: ₩0 (Google Analytics)
- **총 운영비**: ₩0-₩20,000/년

### 마케팅 비용 (선택)
- **초기 홍보**: ₩100,000-₩500,000 (블로그, 카페 홍보)
- **SEO 최적화**: ₩0 (직접)
- **소셜미디어**: ₩0 (직접 운영)

### 총 초기 투자
**최소**: ₩0
**권장**: ₩200,000 (도메인 + 초기 마케팅)

---

## 📈 확장 계획 (2단계 준비)

### 2단계 고도화 (추후 3개월)
**새로운 기능**:
- 실시간 가격 비교
- 더 많은 CID 옵션 (20-30개)
- 호텔 정보 자동 추출
- 사용자 계정 및 히스토리

**기술 스택 업그레이드**:
- React + TypeScript
- Node.js 백엔드
- 데이터베이스 추가
- API 서버 구축

**예상 투자**:
- 개발비: ₩10,000,000-₩15,000,000
- 월 운영비: ₩200,000-₩500,000

---

## 🔍 성공 지표 및 KPI

### 서비스 성공 지표
1. **사용자 증가율**: 월 30% 이상
2. **재방문율**: 40% 이상
3. **변환 성공률**: 95% 이상
4. **평균 세션 시간**: 2분 이상

### 기술 성능 지표
1. **페이지 로딩 속도**: 2초 이내
2. **변환 처리 속도**: 0.5초 이내
3. **모바일 사용성**: Lighthouse 95점 이상
4. **에러율**: 1% 이하

### 사용자 피드백 지표
1. **사용 만족도**: 4.0/5.0 이상
2. **추천 의향**: 70% 이상
3. **기능 요청**: 월 10건 이상 접수
4. **버그 제보**: 주 1건 이하

---

*본 계획서는 호텔픽 MVP의 실제적이고 실행 가능한 개발 로드맵을 제시합니다.*
*최종 업데이트: 2025년 9월 13일*