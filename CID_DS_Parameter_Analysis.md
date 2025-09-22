# 아고다 CID 및 DS 파라미터 분석 보고서

## 📋 문서 개요

**작성일**: 2025년 9월 22일
**목적**: 호텔픽 서비스 개발을 위한 아고다 URL 파라미터 구조 분석
**분석 대상**: 아고다 줍줍, 아고다 스캐너, 직접 검색 결과 비교

---

## 🔍 1. 연구 배경

### 문제 정의
- 기존 아고다 줍줍/스캐너와 동일한 할인 링크 생성 서비스 개발 필요
- CID(Campaign ID) 및 DS 파라미터의 정확한 역할과 사용법 파악 필요
- 어떤 파라미터가 실제 할인에 영향을 주는지 검증 필요

### 연구 방법
1. 동일한 호텔(Grand Hyatt Hong Kong)로 세 가지 서비스 비교
2. 같은 검색 경로(네이버 검색)에 대한 URL 구조 분석
3. DS 파라미터 유무에 따른 가격 차이 테스트

---

## 🧪 2. 실험 데이터

### 테스트 호텔 정보
- **호텔**: Grand Hyatt Hong Kong
- **체크인**: 2025-10-02
- **체크아웃**: 2025-10-03
- **조건**: 성인 2명, 객실 1개

### 네이버 검색 경로 URL 비교

#### 2.1 아고다 줍줍
```
https://www.agoda.com/ko-kr/grand-hyatt-hong-kong/hotel/hong-kong-hk.html?countryId=132&finalPriceView=2&isShowMobileAppPrice=false&cid=1891504&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2025-10-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=KRW&isFreeOccSearch=false&tspTypes=-1&los=1&searchrequestid=e0776be1-f785-44bf-be95-e777f094f067&ds=dCBy0Hp4jLiybNJD
```

**핵심 파라미터:**
- `cid=1891504`
- `ds=dCBy0Hp4jLiybNJD` (고정값 사용)

#### 2.2 아고다 스캐너
```
https://www.agoda.com/ko-kr/grand-hyatt-hong-kong/hotel/hong-kong-hk.html?countryId=132&finalPriceView=2&isShowMobileAppPrice=false&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2025-10-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=KRW&isFreeOccSearch=false&tspTypes=-1&los=1&searchrequestid=e0776be1-f785-44bf-be95-e777f094f067&ds=DfLOEZmkSVZJaJPe&cid=1729890
```

**핵심 파라미터:**
- `cid=1729890`
- `ds=DfLOEZmkSVZJaJPe` (개별 생성값)

#### 2.3 직접 네이버 검색
```
https://www.agoda.com/ko-kr/grand-hyatt-hong-kong/hotel/hong-kong-hk.html?countryId=132&finalPriceView=2&isShowMobileAppPrice=false&cid=1587497&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2025-10-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=KRW&isFreeOccSearch=false&tag=hid5913,pid558d0ad6-f0fb-42f1-8775-1b73c1ecba44&tspTypes=-1&los=1&searchrequestid=a94b0768-22c2-4ac7-affc-50c4877c82c2
```

**핵심 파라미터:**
- `cid=1587497`
- `tag=hid5913,pid558d0ad6-f0fb-42f1-8775-1b73c1ecba44` (DS 대신 TAG 사용)

---

## 🔍 3. CID 파라미터 상세 분석

### 3.1 아고다 줍줍 vs 아고다 스캐너 CID 비교

**제공받은 전체 CID 데이터 분석:**

#### 카드사 할인 링크

| 카드사 | 아고다 줍줍 CID | 아고다 스캐너 CID | 일치 여부 | 비고 |
|--------|----------------|------------------|-----------|------|
| BC카드 | 1748498 | 1748498 | ✅ 동일 | ds 값만 다름 |
| 국민카드 | 1563295 | 1563295 | ✅ 동일 | ds 값만 다름 |
| 마스터카드 | 1889572 | 1889572 | ✅ 동일 | ds 값 다름 |
| 비자카드 | 1889319 | 1889319 | ✅ 동일 | ds 값만 다름 |
| 신한(마스터)카드 | 1917257 | 1917257 | ✅ 동일 | ds 값만 다름 |
| 신한카드 | 1760133 | 1760133 | ✅ 동일 | ds 값 다름 |
| 토스 | 1917334 | 1917334 | ✅ 동일 | ds 값 다름 |
| 현대카드 | 1895693 | 1895693 | ✅ 동일 | tag 파라미터도 동일 |
| 하나카드 | 1729471 | 1729471 | ✅ 동일 | ds 값 다름 |
| 우리(마스터)카드 | 1932810 | 1932810 | ✅ 동일 | ds 값만 다름 |
| 우리카드 | 1654104 | 1654104 | ✅ 동일 | ds 값만 다름 |
| 유니온페이 | 1937712 | 1937712 | ✅ 동일 | tag도 동일, ds만 다름 |
| 카카오페이 | 1845094 | 1942636 | ❌ 다름 | CID 자체가 완전히 다름 |

#### 검색 경로별 링크

| 검색 경로 | 아고다 줍줍 CID | 아고다 스캐너 CID | 일치 여부 | 비고 |
|-----------|----------------|------------------|-----------|------|
| 구글검색 A | 1908612 | 1908612 | ✅ 동일 | ds 값만 다름 |
| 구글검색 B | 1922868 | 1922868 | ✅ 동일 | ds 값만 다름 |
| 구글검색 C | 1922887 | 1776688 | ❌ 다름 | CID 완전히 다름 |
| 구글지도 A | 1833981 | 1833981 | ✅ 동일 | ds 값만 다름 |
| 구글지도 B | 1917614 | 1917614 | ✅ 동일 | ds 값만 다름 |
| 구글지도 C | 1829968 | 1829968 | ✅ 동일 | ds 값만 다름 |
| 네이버 검색 | 1891504 | 1729890 | ❌ 다름 | CID 완전히 다름 |

#### 항공사 제휴 링크

| 항공사 | 아고다 줍줍 | 아고다 스캐너 | 일치 여부 | 비고 |
|--------|------------|--------------|-----------|------|
| 대한항공 | N/A (개별호텔 링크 없음) | 1904827 | - | 줍줍은 개별 호텔 링크 미제공 |
| 아시아나항공 | N/A (개별호텔 링크 없음) | 1806212 | - | 줍줍은 개별 호텔 링크 미제공 |
| 에어서울 | N/A (개별호텔 링크 없음) | 1800120 | - | 줍줍은 개별 호텔 링크 미제공 |

### 3.2 CID 일치/불일치 패턴 분석

#### 3.2.1 CID 동일한 경우 (대부분)
**특징:**
- 카드사 할인: 13개 중 12개 동일 (92%)
- 검색 경로: 7개 중 5개 동일 (71%)
- DS 값은 모두 다름

**의미:**
- 같은 제휴사/검색경로에 대해 아고다에서 공식 CID 부여
- 두 서비스 모두 정식 제휴 관계로 동일한 CID 사용
- DS는 각 서비스별 고유 추적 코드

#### 3.2.2 CID 다른 경우 (소수)
**카카오페이:**
- 줍줍: `1845094`, 스캐너: `1942636`
- 가능한 이유: 다른 시점의 제휴 계약, 다른 조건의 CID

**네이버 검색:**
- 줍줍: `1891504`, 스캐너: `1729890`
- 가능한 이유: 네이버 검색 조건이 세분화되어 있을 수 있음

**구글검색 C:**
- 줍줍: `1922887`, 스캐너: `1776688`
- 가능한 이유: 모바일/웹/앱 등 다른 조건

### 3.3 직접 검색 CID와의 비교

#### 네이버 경유 직접 검색
**우리 직접 검색**: `cid=1587497`
**아고다 줍줍**: `cid=1891504`
**아고다 스캐너**: `cid=1729890`

**모두 다른 CID 사용**
- 각기 다른 제휴 조건 또는 세분화된 추적 체계
- 가격은 모두 동일하게 할인 적용됨

#### 구글지도 경유 직접 검색
**우리 직접 검색**: `cid=1918349`
**아고다 스캐너 구글지도 A**: `cid=1833981`

**역시 다른 CID이지만 할인 효과 동일**

---

## 🔬 4. DS 파라미터 심화 분석

### 3.1 링크프라이스 어필리에이트 테스트

**같은 CID, 다른 페이지 생성:**

**페이지 1:**
```
https://www.agoda.com/ko-kr/affiliate?pcs=1&cid=1729890&tag=293087153HBXnR68d0ee2ce1&checkIn=2025-10-02&checkOut=2025-10-03&adults=2&rooms=1&pslc=1&ds=zhrYmPSanGIA3q6K
```

**페이지 2:**
```
https://www.agoda.com/ko-kr/affiliate?pcs=1&cid=1729890&tag=2930871655Zo6q68d0ee83a0&checkIn=2025-10-02&checkOut=2025-10-03&adults=2&rooms=1&pslc=1&ds=fyCs2i7JxXVo195J
```

**발견:** 같은 CID라도 페이지 생성 시점에 따라 DS 값이 다름

### 3.2 아고다 공식 딥링크 생성기 테스트

**링크 1:**
```
https://www.agoda.com/ko-kr/affiliate?pcs=1&cid=1812242&checkIn=2025-10-02&checkOut=2025-10-03&adults=2&rooms=1&pslc=1&ds=RPF6b358FOv9GeXs
```

**링크 2:**
```
https://www.agoda.com/ko-kr/affiliate?pcs=1&cid=1808627&checkIn=2025-10-02&checkOut=2025-10-03&adults=2&rooms=1&pslc=1&ds=kEM79oit236XxmkY
```

**발견:** 아고다 공식 도구에서도 매번 다른 DS 값 생성

---

## 💡 4. DS 파라미터 정체 규명

### 4.1 가설 수립
1. **사용자 추적 코드**: 특정 사용자/서비스를 식별 (❌ 기각)
2. **Dynamic Session ID**: 각 링크 생성 시점의 고유 세션 (✅ 채택)
3. **Data Signature**: 링크 유효성 검증용 서명

### 4.2 결론
**DS = Dynamic Session ID**
- 각 링크 생성 시점에 동적으로 생성되는 세션 식별자
- 사용자/서비스 추적이 아닌, 요청별 고유 ID
- 할인 적용에는 영향 없음, 아고다 내부 분석용

---

## 🧪 5. DS 파라미터 제거 테스트

### 5.1 테스트 목적
DS 파라미터가 실제 할인 금액에 영향을 주는지 검증

### 5.2 테스트 URL

**아고다 줍줍 (DS 제거):**
```
https://www.agoda.com/ko-kr/grand-hyatt-hong-kong/hotel/hong-kong-hk.html?countryId=132&finalPriceView=2&isShowMobileAppPrice=false&cid=1891504&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2025-10-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=KRW&isFreeOccSearch=false&tspTypes=-1&los=1&searchrequestid=e0776be1-f785-44bf-be95-e777f094f067
```

**아고다 스캐너 (DS 제거):**
```
https://www.agoda.com/ko-kr/grand-hyatt-hong-kong/hotel/hong-kong-hk.html?countryId=132&finalPriceView=2&isShowMobileAppPrice=false&cid=1729890&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2025-10-2&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=KRW&isFreeOccSearch=false&tspTypes=-1&los=1&searchrequestid=e0776be1-f785-44bf-be95-e777f094f067
```

### 5.3 테스트 결과
**✅ 두 URL 모두 원본과 동일한 가격 표시**
- DS 파라미터는 할인 금액에 영향 없음 확인
- CID 파라미터만으로 할인 적용 가능

---

## 🎯 6. 최종 결론 및 호텔픽 전략

### 6.1 CID 선택 전략

#### 6.1.1 CID 동일한 경우 → 아무거나 사용 가능
**카드사 대부분 (BC, 국민, 마스터카드 등):**
- 줍줍/스캐너 동일한 CID 사용
- 둘 중 아무거나 선택해도 무방
- **선택**: 아고다 줍줍 기준 (더 간단한 DS 구조)

#### 6.1.2 CID 다른 경우 → 검증 후 선택
**카카오페이:**
- 줍줍: `1845094` vs 스캐너: `1942636`
- **선택**: 스캐너 CID (더 최신으로 추정)

**네이버 검색:**
- 줍줍: `1891504` vs 스캐너: `1729890`
- **선택**: 줍줍 CID (더 높은 숫자 = 더 최신)

**구글검색 C:**
- 줍줍: `1922887` vs 스캐너: `1776688`
- **선택**: 줍줍 CID (더 높은 숫자 = 더 최신)

### 6.2 최종 CID 데이터베이스 구조
```javascript
// 각 검색 경로별 고유 CID만 사용 (DS 제거)
const CID_DATABASE = {
  cards: {
    'bc': { name: 'BC카드', cid: '1748498' },
    'kb': { name: '국민카드', cid: '1563295' },
    'mastercard': { name: '마스터카드', cid: '1889572' },
    'visa': { name: '비자카드', cid: '1889319' },
    'shinhan_master': { name: '신한(마스터)카드', cid: '1917257' },
    'shinhan': { name: '신한카드', cid: '1760133' },
    'toss': { name: '토스', cid: '1917334' },
    'hyundai': { name: '현대카드', cid: '1895693', tag: 'A100692912' },
    'hana': { name: '하나카드', cid: '1729471' },
    'woori_master': { name: '우리(마스터)카드', cid: '1932810' },
    'woori': { name: '우리카드', cid: '1654104' },
    'unionpay': { name: '유니온페이', cid: '1937712', tag: 'A100692912' },
    'kakaopay': { name: '카카오페이', cid: '1942636', tag: 'A100692912' } // 스캐너 선택
  },
  search: {
    'google_search_a': { name: '구글검색 A', cid: '1908612' },
    'google_search_b': { name: '구글검색 B', cid: '1922868' },
    'google_search_c': { name: '구글검색 C', cid: '1922887' }, // 줍줍 선택
    'google_map_a': { name: '구글지도 A', cid: '1833981' },
    'google_map_b': { name: '구글지도 B', cid: '1917614' },
    'google_map_c': { name: '구글지도 C', cid: '1829968' },
    'naver_search': { name: '네이버 검색', cid: '1891504' } // 줍줍 선택
  },
  airlines: {
    'kal': { name: '대한항공', cid: '1904827' },
    'aar': { name: '아시아나항공', cid: '1806212' },
    'air_seoul': { name: '에어서울', cid: '1800120' }
  }
};
```

### 6.2 URL 생성 함수
```javascript
function addCidToUrl(originalUrl, cidData) {
  try {
    const url = new URL(originalUrl);

    // CID 파라미터만 추가
    if (cidData.cid) {
      url.searchParams.set('cid', cidData.cid);
    }

    // TAG 파라미터 (일부 카드사에만 필요)
    if (cidData.tag) {
      url.searchParams.set('tag', cidData.tag);
    }

    return url.toString();
  } catch (error) {
    return null;
  }
}
```

### 6.3 DS 파라미터 전략 선택지

#### 선택지 1: DS 파라미터 완전 제거 ⭐ (채택)
**장점:**
- 코드 단순화
- 만료 위험 없음
- 할인 효과 동일
- 유지보수 용이

**단점:**
- 아고다 내부 분석 데이터 부족 가능성

#### 선택지 2: 고정 DS 값 사용
**장점:**
- 아고다 줍줍 방식과 동일 (`ds=dCBy0Hp4jLiybNJD`)
- 검증된 안정성

**단점:**
- 하드코딩된 값의 만료 위험
- 동적 생성의 의미 상실

#### 선택지 3: 동적 DS 생성
**장점:**
- 원래 의도에 가장 부합

**단점:**
- 구현 복잡성
- 검증되지 않은 위험성

### 6.4 최종 결정: DS 파라미터 제거

**근거:**
1. **테스트 결과**: DS 없어도 할인 동일 적용
2. **안정성**: 만료/변경 위험 제거
3. **단순성**: 코드 복잡도 감소
4. **검증됨**: 직접 네이버 검색에서도 DS 없이 정상 작동

---

## 📊 7. 구현 권장사항

### 7.1 핵심 파라미터만 사용
```
✅ cid (필수) - 할인 적용의 핵심
✅ tag (선택) - 일부 카드사 필요 (현대, 유니온페이, 카카오페이)
❌ ds (제거) - 할인과 무관한 세션 추적용
```

### 7.2 프로모션 페이지 별도 처리
```javascript
// 개별 호텔 링크 vs 프로모션 페이지 링크 구분
promotions: {
  'bc_promo': {
    name: 'BC카드 프로모션',
    url: 'https://www.agoda.com/ko-kr/bccard',
    // 프로모션 페이지는 고정 URL 사용
  }
}
```

### 7.3 태그 파라미터 조건부 적용
```javascript
// 현대, 유니온페이, 카카오페이만 tag 파라미터 필요
'hyundai': { name: '현대카드', cid: '1895693', tag: 'A100692912' }
```

---

## 🔚 8. 문서 업데이트 이력

- **2025-09-22**: 초기 분석 및 DS 파라미터 테스트 완료
- **향후**: CID 값 추가 발견 시 업데이트 예정

---

*본 문서는 호텔픽 서비스 개발을 위한 기술 분석 자료입니다.*