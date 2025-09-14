# 🏨 호텔픽 (HotelPick)

> 아고다 호텔 링크를 카드사 할인 링크로 변환하는 무료 서비스

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-green)](https://hyunsukcho.github.io/hotelpick-mvp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🎯 서비스 개요

**호텔픽**은 아고다 호텔 예약 링크를 다양한 카드사 및 제휴사 할인이 적용된 링크로 자동 변환해주는 웹 서비스입니다.
기존 아고다줍줍/스캐너와 동일한 기능을 더 나은 UI/UX로 제공합니다.

### ✨ 주요 기능

- **🔗 링크 변환**: 아고다 링크를 다양한 CID 할인 링크로 변환
- **💳 카드사 할인**: 13개 주요 카드사 할인 링크 생성
- **🔍 검색경로 할인**: 9개 검색 플랫폼별 할인 링크
- **✈️ 항공사 제휴**: 6개 항공사 제휴 할인 혜택
- **📱 모바일 최적화**: 완전한 반응형 디자인
- **⚡ 실시간 변환**: 즉시 결과 표시

## 🚀 라이브 데모

**👉 [hotelpick-mvp.vercel.app](https://hotelpick-mvp.vercel.app) 에서 바로 사용해보세요!**

## 💡 사용 방법

1. **아고다에서 호텔 링크 복사**
   - 원하는 호텔의 상세 페이지 URL 복사

2. **링크 붙여넣기**
   - 입력창에 복사한 링크 붙여넣기

3. **변환하기 클릭**
   - 모든 할인 링크가 자동으로 생성됩니다

4. **할인 링크 선택**
   - 원하는 카드사/제휴사 링크를 클릭해서 예약

## 🎨 디자인

SimplyCodes 스타일을 기반으로 한 깔끔하고 신뢰감 있는 디자인:

- **주요 컬러**: Orange (#FF6B35) - 긴급함과 절약 강조
- **타이포그래피**: Noto Sans KR - 한국어 최적화
- **레이아웃**: 모바일 퍼스트 반응형 디자인
- **UX**: 직관적이고 사용하기 쉬운 인터페이스

## 🛠️ 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **CSS3** - CSS Variables, Flexbox, Grid
- **Vanilla JavaScript** - ES6+, 모듈 패턴

### 배포
- **GitHub Pages** - 무료 정적 사이트 호스팅
- **Git** - 버전 관리

### 특징
- **서버리스**: 백엔드 없이 클라이언트 사이드에서 모든 처리
- **무료**: 완전 무료 서비스 (호스팅비 ₩0)
- **보안**: 개인정보 수집 안 함

## 📊 지원 할인 옵션

### 💳 카드사 (13개)
- BC카드, 국민카드, 신한카드, 신한(마스터)
- 현대카드, 하나카드, 우리카드, 우리(마스터)
- 토스, 마스터카드, 비자카드, 유니온페이, 카카오페이

### 🔍 검색 경로 (9개)
- 구글지도 1/2/3, 구글검색 1/2/3
- 네이버검색, 페이스북, 인스타그램

### ✈️ 항공사 (6개)
- 대한항공, 아시아나항공, 에어서울
- 제주항공, 진에어, 에어부산

## 📁 프로젝트 구조

```
hotelpick-mvp/
├── index.html          # 메인 페이지
├── styles.css          # SimplyCodes 스타일 시트
├── script.js           # CID 변환 로직
├── README.md           # 프로젝트 문서
├── PRD.md              # 제품 요구사항 문서
├── plan.md             # 개발 계획서
└── design-guide.md     # 디자인 가이드
```

## 🔧 로컬 개발

```bash
# 저장소 클론
git clone https://github.com/hyunsukcho/hotelpick-mvp.git

# 디렉토리 이동
cd hotelpick-mvp

# 로컬 서버 실행 (Python 3)
python -m http.server 8000

# 브라우저에서 접속
open http://localhost:8000
```

## 📈 성능

- **페이지 로딩**: < 2초
- **변환 처리**: < 0.5초
- **모바일 성능**: Lighthouse 95점 이상
- **SEO 최적화**: 메타 태그 및 시맨틱 HTML

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## ⚠️ 면책 조항

- 호텔픽은 아고다와는 별개의 독립적인 서비스입니다.
- 할인 혜택은 각 카드사/제휴사 정책에 따라 달라질 수 있습니다.
- 개인정보를 수집하지 않으며 모든 처리는 브라우저에서 이루어집니다.

## 📞 문의

- **개발자**: hyunsukcho
- **이슈 제보**: [GitHub Issues](https://github.com/hyunsukcho/hotelpick-mvp/issues)

---

**⭐ 이 프로젝트가 유용하다면 Star를 눌러주세요!**