// ===== A/B 테스트 헤드라인 데이터베이스 =====
const HEADLINE_VARIANTS = [
    {
        id: 'emotional',
        headline: "똑같은 호텔, 왜 비싸게 예약해요?",
        subtitle: "링크만 붙여넣으면 끝, 숨겨진 할인까지 자동으로 찾아드려요"
    },
    {
        id: 'personal',
        headline: "당신의 아고다 링크가 더 <span class='text-highlight'>싸질 수 있어요</span>",
        subtitle: "링크만 붙여넣으면 끝, 숨겨진 할인까지 자동으로 찾아드려요"
    },
    {
        id: 'time_benefit',
        headline: "<span class='text-highlight'>10초만에</span> 아고다 숨겨진 할인 찾기",
        subtitle: "링크만 붙여넣으면 끝, 카드사별 최저가까지 자동 비교"
    }
];

// ===== CID 데이터베이스 =====
const CID_DATABASE = {
    // 카드사별 CID (가장 저렴한 가격을 제공하는 CID 우선 선택)
    cards: {
        'bc': { name: 'BC카드', cid: '1748498' }, // 줍줍/스캐너 동일
        'kb': { name: '국민카드', cid: '1563295' }, // 줍줍/스캐너 동일
        'mastercard': { name: '마스터카드', cid: '1889572' }, // 줍줍/스캐너 동일
        'visa': { name: '비자카드', cid: '1889319' }, // 줍줍/스캐너 동일
        'shinhan_master': { name: '신한(마스터)카드', cid: '1917257' }, // 줍줍/스캐너 동일
        'shinhan': { name: '신한카드', cid: '1760133' }, // 줍줍/스캐너 동일
        'toss': { name: '토스', cid: '1917334' }, // 줍줍/스캐너 동일
        'hyundai': { name: '현대카드', cid: '1895693', tag: 'A100692912' }, // 줍줍/스캐너 동일
        'hana': { name: '하나카드', cid: '1729471' }, // 줍줍/스캐너 동일
        'woori_master': { name: '우리(마스터)카드', cid: '1932810' }, // 줍줍/스캐너 동일
        'woori': { name: '우리카드', cid: '1654104' }, // 줍줍/스캐너 동일
        'unionpay': { name: '유니온페이', cid: '1937712', tag: 'A100692912' }, // 줍줍/스캐너 동일
        'kakaopay': { name: '카카오페이', cid: '1942636', tag: 'A100692912' } // 스캐너 버전 사용 (더 최신)
    },

    // 검색 경로별 CID (아고다 스캐너 우선 - 더 저렴한 가격 확인됨)
    search: {
        'google_search_a': { name: '구글검색 A', cid: '1908612' },
        'google_search_b': { name: '구글검색 B', cid: '1922868' },
        'google_search_c': { name: '구글검색 C', cid: '1776688' }, // 스캐너 버전 사용
        'google_map_a': { name: '구글지도 A', cid: '1833981' },
        'google_map_b': { name: '구글지도 B', cid: '1917614' },
        'google_map_c': { name: '구글지도 C', cid: '1829968' },
        'naver_search': { name: '네이버 검색', cid: '1729890' } // 스캐너 버전 사용 (더 저렴함 확인)
    },

    // 항공사 제휴 CID
    airlines: {
        'kal': { name: '대한항공', cid: '1904827' },
        'aar': { name: '아시아나항공', cid: '1806212' },
        'air_seoul': { name: '에어서울', cid: '1800120' }
    },

    // 프로모션 페이지 링크 (개별 호텔이 아닌 프로모션 페이지)
    promotions: {
        'bc_promo': { name: 'BC카드 프로모션', url: 'https://www.agoda.com/ko-kr/bccard' },
        'kb_promo': { name: '국민카드 프로모션', url: 'https://www.agoda.com/ko-kr/kbcard' },
        'kal_promo': { name: '대한항공 프로모션', url: 'https://www.agoda.com/ko-kr/koreanair' },
        'mastercard_promo': { name: '마스터카드 프로모션', url: 'https://www.agoda.com/ko-kr/krmastercard' },
        'visa_promo': { name: '비자카드 프로모션', url: 'https://www.agoda.com/ko-kr/visakorea' },
        'shinhan_promo': { name: '신한카드 프로모션', url: 'https://www.agoda.com/ko-kr/shinhancard' },
        'shinhan_master_promo': { name: '신한마스터카드 프로모션', url: 'https://www.agoda.com/ko-kr/shinhanmaster' },
        'unionpay_promo': { name: '유니온페이 프로모션', url: 'https://www.agoda.com/ko-kr/unionpayKR' },
        'woori_promo': { name: '우리카드 프로모션', url: 'https://www.agoda.com/ko-kr/wooricard' },
        'kakaopay_promo': { name: '카카오페이 프로모션', url: 'https://www.agoda.com/ko-kr/kakaopaypromo' },
        'toss_promo': { name: '토스 프로모션', url: 'https://www.agoda.com/ko-kr/tossbank' },
        'hana_promo': { name: '하나카드 프로모션', url: 'https://www.agoda.com/ko-kr/hanacard' },
        'hyundai_promo': { name: '현대카드 프로모션', url: 'https://www.agoda.com/ko-kr/hyundaipromo' }
    }
};

// 카테고리별 이름 매핑
const CATEGORY_CONFIG = {
    cards: {
        name: '카드사 할인',
        description: '카드사별 특별 할인 혜택'
    },
    search: {
        name: '검색경로 할인',
        description: '검색 플랫폼별 할인 혜택'
    },
    airlines: {
        name: '항공사 제휴',
        description: '항공사 마일리지 및 제휴 혜택'
    },
    promotions: {
        name: '프로모션 페이지',
        description: '카드사/제휴사별 프로모션 페이지'
    }
};

// ===== DOM 요소들 =====
const elements = {
    agodaUrl: document.getElementById('agoda-url'),
    convertBtn: document.getElementById('convert-btn'),
    resetBtn: document.getElementById('reset-btn'),
    errorMessage: document.getElementById('error-message'),
    resultsSection: document.getElementById('results-section'),
    hotelInfo: document.getElementById('hotel-info'),
    linksContainer: document.getElementById('links-container'),
    loadingOverlay: document.getElementById('loading-overlay'),
    heroTitle: document.getElementById('hero-title'),
    heroSubtitle: document.getElementById('hero-subtitle'),
    searchHistoryContainer: document.getElementById('search-history-container'),
    searchHistoryList: document.getElementById('search-history-list')
};

// ===== A/B 테스트 관리 =====
let currentVariant = null;

// ===== 분석 추적 시스템 =====
const Analytics = {
    // 사용자 세션 추적
    sessionData: {
        startTime: Date.now(),
        pageViews: 1,
        searches: 0,
        clickedLinks: 0,
        historyUsage: 0,
        errors: 0
    },

    // 이벤트 추적
    track(eventName, properties = {}) {
        const event = {
            name: eventName,
            timestamp: Date.now(),
            sessionId: this.getSessionId(),
            abTestVariant: currentVariant?.id || 'unknown',
            ...properties
        };

        // 개발 모드에서만 콘솔 출력
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('📊 Analytics:', event);
        }

        // Google Analytics 연동
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: properties.category || 'engagement',
                event_label: properties.label || '',
                value: properties.value || 1,
                custom_parameter_1: event.sessionId,
                custom_parameter_2: event.abTestVariant
            });
        }

        // 로컬 저장소에 세션 데이터 업데이트
        this.updateSessionData(eventName);
    },

    // 세션 ID 생성/조회
    getSessionId() {
        let sessionId = localStorage.getItem('sessionId');
        if (!sessionId) {
            sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('sessionId', sessionId);
        }
        return sessionId;
    },

    // 세션 데이터 업데이트
    updateSessionData(eventName) {
        switch (eventName) {
            case 'search_success':
                this.sessionData.searches++;
                break;
            case 'link_clicked':
                this.sessionData.clickedLinks++;
                break;
            case 'history_used':
                this.sessionData.historyUsage++;
                break;
            case 'search_error':
                this.sessionData.errors++;
                break;
        }

        // 주기적으로 세션 데이터 저장
        localStorage.setItem('currentSession', JSON.stringify(this.sessionData));
    },

    // 사용자 여정 추적
    trackUserJourney(step, data = {}) {
        this.track('user_journey', {
            category: 'user_flow',
            label: step,
            ...data
        });
    }
};

/**
 * A/B 테스트 헤드라인 선택 및 적용
 */
function initializeABTest() {
    // DOM 요소 존재 확인
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');

    if (!heroTitle || !heroSubtitle) {
        console.error('A/B 테스트 DOM 요소를 찾을 수 없습니다');
        return;
    }

    // 로컬스토리지에서 기존 테스트 확인
    let storedVariant = localStorage.getItem('ab_test_variant');

    if (!storedVariant) {
        // 새 방문자: 랜덤하게 배정
        const randomIndex = Math.floor(Math.random() * HEADLINE_VARIANTS.length);
        currentVariant = HEADLINE_VARIANTS[randomIndex];
        localStorage.setItem('ab_test_variant', currentVariant.id);

        // 개발 모드에서만 로그
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('A/B 테스트 배정:', currentVariant.id);
        }
    } else {
        // 기존 방문자: 저장된 버전 사용
        currentVariant = HEADLINE_VARIANTS.find(v => v.id === storedVariant) || HEADLINE_VARIANTS[0];
    }

    // 폴백 확인
    if (!currentVariant) {
        console.error('A/B 테스트 variant를 찾을 수 없습니다. 기본값 사용');
        currentVariant = HEADLINE_VARIANTS[0];
    }

    // 헤드라인 적용
    heroTitle.innerHTML = currentVariant.headline || '아고다 최저가를 찾아보세요';
    heroSubtitle.textContent = currentVariant.subtitle || '다양한 할인 옵션을 한번에 확인하고 가장 저렴한 가격으로 예약하세요';

    // 추적을 위한 데이터 속성 추가
    heroTitle.setAttribute('data-variant', currentVariant.id);

    // 개발 모드에서만 적용된 헤드라인 로그
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('A/B 테스트 헤드라인 적용됨:', currentVariant.headline);
    }
}

// ===== 유틸리티 함수들 =====

/**
 * 아고다 URL 유효성 검증
 */
function validateAgodaUrl(url) {
    if (!url || url.trim() === '') {
        return { isValid: false, message: '링크를 입력해주세요.' };
    }

    // URL 정규화 - 프로토콜이 없으면 https:// 추가
    let normalizedUrl = url.trim();
    if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
        normalizedUrl = 'https://' + normalizedUrl;
    }

    // 기본 URL 형식 검증
    try {
        new URL(normalizedUrl);
    } catch {
        return { isValid: false, message: '올바른 URL 형식이 아닙니다.' };
    }

    // 아고다 도메인 검증 (정규화된 URL로 검증)
    const agodaPattern = /^https?:\/\/(www\.|m\.)?agoda\.com/i;
    if (!agodaPattern.test(normalizedUrl)) {
        return { isValid: false, message: '아고다 링크가 아닌 것 같습니다.' };
    }

    // 호텔 링크 검증 (상세 페이지인지)
    if (!normalizedUrl.includes('/hotel/') && !normalizedUrl.includes('.html')) {
        return { isValid: false, message: '호텔 상세 페이지 링크를 입력해주세요.' };
    }

    return { isValid: true, message: '', normalizedUrl: normalizedUrl };
}

/**
 * 호텔 정보 추출
 */
function extractHotelInfo(url) {
    try {
        const urlObj = new URL(url);
        const pathname = urlObj.pathname;
        const searchParams = urlObj.searchParams;

        // 호텔명 추출 시도 (ko-kr 뒤에서 /hotel/ 앞까지)
        let hotelName = '호텔';

        // 방법 1: ko-kr 뒤에서 호텔명 추출
        // 예: /ko-kr/hilton-garden-inn-bali-ngurah-rai-airport/hotel/bali-id.html
        const koKrMatch = pathname.match(/\/ko-kr\/([^\/]+)\/hotel\//);
        if (koKrMatch) {
            hotelName = koKrMatch[1]
                .replace(/-/g, ' ')
                .replace(/_/g, ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        // 방법 2: .html 파일명에서 추출 (fallback)
        const htmlMatch = pathname.match(/\/([^\/]+)\.html/);
        if (htmlMatch && hotelName === '호텔') {
            hotelName = htmlMatch[1]
                .replace(/-/g, ' ')
                .replace(/_/g, ' ')
                .split(' ')
                .slice(0, 4) // 처음 4단어로 늘림
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        // 체크인/체크아웃 날짜 추출
        const checkinRaw = searchParams.get('checkin') || searchParams.get('checkIn');
        const checkoutRaw = searchParams.get('checkout') || searchParams.get('checkOut');
        const los = parseInt(searchParams.get('los')) || 1; // Length of Stay

        // 날짜 형식 변환
        const formatDate = (dateStr) => {
            if (!dateStr) return '날짜 미지정';
            try {
                const date = new Date(dateStr);
                if (isNaN(date.getTime())) return '날짜 미지정';
                return date.toLocaleDateString('ko-KR', {
                    month: 'long',
                    day: 'numeric'
                });
            } catch {
                return '날짜 미지정';
            }
        };

        // 체크아웃 날짜 계산 (los 사용)
        let checkout = checkoutRaw;
        if (checkinRaw && !checkoutRaw) {
            try {
                const checkinDate = new Date(checkinRaw);
                if (!isNaN(checkinDate.getTime())) {
                    checkinDate.setDate(checkinDate.getDate() + los);
                    checkout = checkinDate.toISOString().split('T')[0]; // YYYY-MM-DD 형식
                }
            } catch (error) {
                console.log('체크아웃 날짜 계산 실패:', error);
            }
        }

        const checkinFormatted = formatDate(checkinRaw);
        const checkoutFormatted = formatDate(checkout);

        // 박수 계산
        let nights = los;
        if (checkinRaw && checkout && checkinRaw !== '날짜 미지정' && checkout !== '날짜 미지정') {
            try {
                const checkinDate = new Date(checkinRaw);
                const checkoutDate = new Date(checkout);
                const diffTime = Math.abs(checkoutDate - checkinDate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                nights = diffDays;
            } catch (error) {
                console.log('박수 계산 실패:', error);
            }
        }

        return {
            name: hotelName,
            checkin: checkinFormatted,
            checkout: checkoutFormatted,
            nights: nights,
            originalUrl: url
        };
    } catch (error) {
        console.error('호텔 정보 추출 실패:', error);
        return {
            name: '호텔',
            checkin: '날짜 미지정',
            checkout: '날짜 미지정',
            nights: 1,
            originalUrl: url
        };
    }
}

/**
 * CID가 적용된 URL 생성 (개별 호텔 링크용)
 */
function addCidToUrl(originalUrl, cidData) {
    try {
        const url = new URL(originalUrl);

        // 개발 모드에서만 디버깅 로그
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('원본 URL:', originalUrl);
            console.log('추가할 CID 데이터:', cidData);
        }

        // CID 설정
        if (cidData.cid) {
            url.searchParams.set('cid', cidData.cid);
        }

        // TAG 파라미터 설정 (현대, 유니온페이, 카카오페이만 필요)
        if (cidData.tag) {
            url.searchParams.set('tag', cidData.tag);
        }

        // DS 파라미터는 제거 (분석 결과: 할인에 영향 없음, 추적용이므로 불필요)
        url.searchParams.delete('ds');

        const newUrl = url.toString();

        // 개발 모드에서만 결과 로그
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('생성된 URL:', newUrl);
        }

        return newUrl;
    } catch (error) {
        console.error('CID URL 생성 실패:', error);
        return null;
    }
}

/**
 * 프로모션 페이지 링크 생성
 */
function createPromotionLink(promoData) {
    try {
        const url = new URL(promoData.url);

        // CID가 있는 경우 설정 (카카오페이, 현대카드)
        if (promoData.cid) {
            url.searchParams.set('cid', promoData.cid);
        }

        // TAG가 있는 경우 설정 (카카오페이, 현대카드)
        if (promoData.tag) {
            url.searchParams.set('tag', promoData.tag);
        }

        return url.toString();
    } catch (error) {
        console.error('프로모션 링크 생성 실패:', error);
        return null;
    }
}


/**
 * 모든 카테고리의 링크 생성
 */
function generateAllLinks(originalUrl) {
    const results = {
        hotel: extractHotelInfo(originalUrl),
        links: {}
    };

    // 개별 호텔 링크 생성 (cards, search, airlines)
    ['cards', 'search', 'airlines'].forEach(category => {
        results.links[category] = [];

        Object.entries(CID_DATABASE[category]).forEach(([key, data]) => {
            const convertedUrl = addCidToUrl(originalUrl, data);
            if (convertedUrl) {
                results.links[category].push({
                    name: data.name,
                    url: convertedUrl,
                    key: key,
                    cid: data.cid,
                    clicked: false // 클릭 상태 추적용
                });
            }
        });
    });

    // 프로모션 페이지 링크 생성 (별도 처리)
    results.links.promotions = [];
    Object.entries(CID_DATABASE.promotions).forEach(([key, data]) => {
        const promoUrl = createPromotionLink(data);
        if (promoUrl) {
            results.links.promotions.push({
                name: data.name,
                url: promoUrl,
                key: key,
                clicked: false,
                isPromotion: true // 프로모션 페이지 구분
            });
        }
    });

    return results;
}

/**
 * 에러 메시지 표시
 */
function showError(message) {
    elements.errorMessage.textContent = message;
    elements.errorMessage.classList.remove('hidden');
    elements.resultsSection.classList.add('hidden');
}

/**
 * 에러 메시지 숨기기
 */
function hideError() {
    elements.errorMessage.classList.add('hidden');
}

/**
 * 로딩 상태 표시/숨기기
 */
function toggleLoading(show = true) {
    if (show) {
        elements.loadingOverlay.classList.remove('hidden');
        elements.convertBtn.disabled = true;
        elements.convertBtn.textContent = '찾는 중...';
    } else {
        elements.loadingOverlay.classList.add('hidden');
        elements.convertBtn.disabled = false;
        elements.convertBtn.textContent = '찾기';
    }
}

/**
 * 호텔 정보 렌더링
 */
function renderHotelInfo(hotelData) {
    let dateText = '날짜 정보 없음';

    if (hotelData.checkin !== '날짜 미지정' && hotelData.checkout !== '날짜 미지정') {
        const nightsText = hotelData.nights ? ` (${hotelData.nights}박)` : '';
        dateText = `${hotelData.checkin} ~ ${hotelData.checkout}${nightsText}`;
    } else if (hotelData.checkin !== '날짜 미지정') {
        const nightsText = hotelData.nights ? ` (${hotelData.nights}박)` : '';
        dateText = `${hotelData.checkin} 부터${nightsText}`;
    }

    elements.hotelInfo.innerHTML = `
        <h2 class="hotel-name">${hotelData.name}</h2>
        <p class="hotel-dates">${dateText}</p>
    `;
}

/**
 * 링크 카테고리 렌더링
 */
function renderLinkCategory(category, links) {
    const config = CATEGORY_CONFIG[category];
    if (!config || links.length === 0) return '';

    const linkItems = links.map(link => `
        <div class="link-item">
            <span class="link-name">${link.name}</span>
            <a href="${link.url}"
               target="_blank"
               rel="noopener noreferrer"
               class="link-button"
               id="link-${link.key}"
               onclick="trackLinkClick('${category}', '${link.key}', this)"
               aria-label="${link.name} 할인 가격 확인하기">
                <span class="button-text">가격보기</span>
            </a>
        </div>
    `).join('');

    return `
        <div class="link-category">
            <h3 class="category-title">
                ${config.name}
            </h3>
            <div class="link-grid">
                ${linkItems}
            </div>
        </div>
    `;
}

/**
 * 모든 결과 렌더링
 */
function renderResults(data) {
    // 호텔 정보 렌더링
    renderHotelInfo(data.hotel);

    // 검색 히스토리에 저장
    saveToSearchHistory(data.hotel);

    // 링크 카테고리들 렌더링
    const categoriesHtml = Object.keys(data.links)
        .map(category => renderLinkCategory(category, data.links[category]))
        .filter(html => html !== '')
        .join('');

    elements.linksContainer.innerHTML = categoriesHtml;

    // 결과 섹션 표시
    elements.resultsSection.classList.remove('hidden');

    // 저장된 클릭 상태 복원
    setTimeout(() => {
        restoreClickStates();
    }, 100);

    // 혜택섹션을 결과 아래로 이동
    moveBenefitsSectionAfterResults();

    // 결과 섹션으로 스크롤
    elements.resultsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

/**
 * 검색 후 혜택섹션을 결과 아래로 이동
 */
function moveBenefitsSectionAfterResults() {
    const benefitsSection = document.querySelector('.benefits-section');
    const resultsSection = document.getElementById('results-section');

    if (benefitsSection && resultsSection) {
        // 혜택섹션을 results 섹션 다음에 이동
        resultsSection.parentNode.insertBefore(benefitsSection, resultsSection.nextSibling);

        // 개발 모드에서만 로그
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('혜택섹션을 결과 아래로 이동 완료');
        }
    }
}

/**
 * 링크 클릭 추적 및 시각적 피드백 (성능 최적화)
 */
function trackLinkClick(category, linkKey, buttonElement) {
    // 이미 클릭된 버튼이면 중복 처리 방지
    if (buttonElement.classList.contains('clicked')) {
        return;
    }

    console.log(`링크 클릭 추적: ${category} - ${linkKey}`);

    // localStorage에 클릭 상태 저장 (배치 처리를 위해 개선)
    const clickKey = `clicked_${linkKey}`;
    try {
        localStorage.setItem(clickKey, 'true');
    } catch (error) {
        console.warn('클릭 상태 저장 실패:', error);
    }

    // 버튼 시각적 변경
    updateLinkClickState(buttonElement);

    // 향상된 분석 추적
    Analytics.track('link_clicked', {
        category: 'conversion',
        label: `${category}_${linkKey}`,
        linkCategory: category,
        linkKey: linkKey,
        value: 1
    });

    // 사용자 피드백 개선 - 클릭 애니메이션
    buttonElement.style.transform = 'scale(0.95)';
    setTimeout(() => {
        buttonElement.style.transform = '';
    }, 150);
}

/**
 * 링크 클릭 상태 시각적 업데이트
 */
function updateLinkClickState(buttonElement) {
    // 버튼 텍스트 변경
    const buttonText = buttonElement.querySelector('.button-text');
    if (buttonText) {
        buttonText.textContent = '✓ 확인완료';
    }

    // 버튼 스타일 변경
    buttonElement.classList.add('clicked');

    // 부모 링크 아이템도 클릭됨 표시
    const linkItem = buttonElement.closest('.link-item');
    if (linkItem) {
        linkItem.classList.add('clicked');
    }
}

/**
 * 저장된 클릭 상태 복원
 */
function restoreClickStates() {
    // 모든 링크 버튼을 확인하여 클릭 상태 복원
    document.querySelectorAll('.link-button').forEach(button => {
        const linkKey = button.id.replace('link-', '');
        const clickKey = `clicked_${linkKey}`;

        if (localStorage.getItem(clickKey) === 'true') {
            updateLinkClickState(button);
        }
    });
}

/**
 * 검색 히스토리 저장 (성능 최적화)
 */
function saveToSearchHistory(hotelData) {
    try {
        let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');

        // 중복 제거 (같은 호텔명과 URL)
        history = history.filter(item =>
            item.name !== hotelData.name && item.url !== hotelData.originalUrl
        );

        // 새 검색 추가 (맨 앞에)
        const newItem = {
            name: hotelData.name,
            checkin: hotelData.checkin,
            checkout: hotelData.checkout,
            nights: hotelData.nights,
            url: hotelData.originalUrl,
            timestamp: Date.now()
        };

        history.unshift(newItem);

        // 최대 5개까지만 저장
        if (history.length > 5) {
            history = history.slice(0, 5);
        }

        localStorage.setItem('searchHistory', JSON.stringify(history));
        displaySearchHistory();

    } catch (error) {
        console.warn('검색 히스토리 저장 실패:', error);
        // 저장에 실패해도 앱은 계속 동작
    }
}

/**
 * 검색 히스토리 표시
 */
function displaySearchHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');

    if (history.length === 0) {
        elements.searchHistoryContainer.classList.add('hidden');
        return;
    }

    const historyHtml = history.map(item => {
        let dateText = '날짜 정보 없음';
        if (item.checkin !== '날짜 미지정' && item.checkout !== '날짜 미지정') {
            const nightsText = item.nights ? ` (${item.nights}박)` : '';
            dateText = `${item.checkin} ~ ${item.checkout}${nightsText}`;
        } else if (item.checkin !== '날짜 미지정') {
            const nightsText = item.nights ? ` (${item.nights}박)` : '';
            dateText = `${item.checkin} 부터${nightsText}`;
        }

        return `
            <div class="history-item"
                 onclick="loadFromHistory('${encodeURIComponent(item.url)}')"
                 role="button"
                 tabindex="0"
                 onkeydown="if(event.key==='Enter'||event.key===' ')loadFromHistory('${encodeURIComponent(item.url)}')"
                 aria-label="${item.name} 검색 결과 다시 보기">
                <div class="history-hotel-name">${item.name}</div>
                <div class="history-dates">${dateText}</div>
            </div>
        `;
    }).join('');

    elements.searchHistoryList.innerHTML = historyHtml;
    elements.searchHistoryContainer.classList.remove('hidden');
}

/**
 * 히스토리에서 호텔 불러오기 (개선된 사용성)
 */
function loadFromHistory(encodedUrl) {
    try {
        const url = decodeURIComponent(encodedUrl);
        elements.agodaUrl.value = url;

        // 검색 실행
        convertAgodaUrl();

        // 히스토리 사용 추적
        Analytics.track('history_used', {
            category: 'engagement',
            label: 'search_history_click'
        });

        // 사용자 피드백 - 히스토리 아이템 임시 하이라이트
        const historyItem = event.target.closest('.history-item');
        if (historyItem) {
            historyItem.style.backgroundColor = 'var(--bg-hover)';
            setTimeout(() => {
                historyItem.style.backgroundColor = '';
            }, 500);
        }

    } catch (error) {
        console.error('히스토리 로드 실패:', error);
        showError('히스토리 로드 중 오류가 발생했습니다.');
    }
}

/**
 * 검색 히스토리 초기화
 */
function clearSearchHistory() {
    localStorage.removeItem('searchHistory');
    elements.searchHistoryContainer.classList.add('hidden');
}

/**
 * 검색 결과 초기화
 */
function resetResults() {
    elements.resultsSection.classList.add('hidden');
    elements.hotelInfo.innerHTML = '';
    elements.linksContainer.innerHTML = '';
    elements.agodaUrl.value = '';
    elements.agodaUrl.focus();
    hideError();

    // 혜택섹션을 원래 위치로 되돌리기
    restoreBenefitsSectionPosition();
}

/**
 * 혜택섹션을 원래 위치(검색창 아래)로 되돌리기
 */
function restoreBenefitsSectionPosition() {
    const benefitsSection = document.querySelector('.benefits-section');
    const searchContainer = document.querySelector('.search-container');

    if (benefitsSection && searchContainer) {
        // 혜택섹션을 search-container 다음에 이동
        searchContainer.parentNode.insertBefore(benefitsSection, searchContainer.nextSibling);

        // 개발 모드에서만 로그
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('혜택섹션을 원래 위치로 복원 완료');
        }
    }
}

// ===== 메인 변환 함수 =====
async function convertAgodaUrl() {
    const url = elements.agodaUrl.value.trim();

    // URL 유효성 검증
    const validation = validateAgodaUrl(url);
    if (!validation.isValid) {
        showError(validation.message);
        return;
    }

    hideError();
    toggleLoading(true);

    try {
        // 실제 변환은 즉시 실행되지만 UX를 위해 약간의 지연
        await new Promise(resolve => setTimeout(resolve, 500));

        // 정규화된 URL 사용
        const normalizedUrl = validation.normalizedUrl || url;

        // 모든 링크 생성
        const results = generateAllLinks(normalizedUrl);

        // 디버깅 (개발 모드에서만)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('생성된 링크 결과:', results);
        }

        // 결과 렌더링
        renderResults(results);

        // 향상된 성공 추적
        console.log('변환 성공:', results.hotel.name);
        Analytics.track('search_success', {
            category: 'engagement',
            label: 'agoda_to_cid_conversion',
            hotelName: results.hotel.name,
            totalLinks: Object.values(results.links).reduce((sum, links) => sum + links.length, 0),
            hasDateInfo: results.hotel.checkin !== '날짜 미지정'
        });

        // 개발 모드에서만 A/B 테스트 변환 로그
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('A/B 테스트 변환:', currentVariant ? currentVariant.id : 'unknown');
        }

    } catch (error) {
        console.error('변환 중 오류 발생:', error);
        showError('변환 중 오류가 발생했습니다. 다시 시도해주세요.');

        // 에러 추적
        Analytics.track('search_error', {
            category: 'error',
            label: error.message,
            errorType: error.name || 'UnknownError'
        });
    } finally {
        toggleLoading(false);
    }
}

// ===== 디바운스 최적화 =====
let searchDebounceTimer = null;

function debouncedValidation() {
    if (searchDebounceTimer) {
        clearTimeout(searchDebounceTimer);
    }

    searchDebounceTimer = setTimeout(() => {
        const url = elements.agodaUrl.value.trim();
        if (url && url.length > 10) {
            // 입력이 충분히 길면 미리 유효성 검사만 수행
            const validation = validateAgodaUrl(url);
            if (validation.isValid) {
                hideError();
                elements.convertBtn.classList.add('ready');
            } else {
                elements.convertBtn.classList.remove('ready');
            }
        } else {
            elements.convertBtn.classList.remove('ready');
        }
    }, 300);
}

// ===== 이벤트 리스너 설정 =====
function setupEventListeners() {
    // 변환 버튼 클릭
    elements.convertBtn.addEventListener('click', convertAgodaUrl);

    // 초기화 버튼 클릭
    elements.resetBtn.addEventListener('click', resetResults);

    // Enter 키로 변환
    elements.agodaUrl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            convertAgodaUrl();
        }
    });

    // 입력 중 에러 메시지 숨기기 + 디바운스 유효성 검사
    elements.agodaUrl.addEventListener('input', () => {
        if (!elements.errorMessage.classList.contains('hidden')) {
            hideError();
        }
        debouncedValidation();
    });

    // 붙여넣기 시 자동 처리
    elements.agodaUrl.addEventListener('paste', (e) => {
        setTimeout(() => {
            debouncedValidation();
        }, 100);
    });

    // 페이지 로드 시 입력창에 포커스
    elements.agodaUrl.focus();

    // 키보드 접근성 개선
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K로 검색창 포커스
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            elements.agodaUrl.focus();
            elements.agodaUrl.select();
        }

        // ESC로 검색 결과 숨기기
        if (e.key === 'Escape') {
            if (!elements.resultsSection.classList.contains('hidden')) {
                resetResults();
            }
        }
    });
}

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('호텔픽 CID 변환기가 시작되었습니다.');

    // Analytics 초기화 및 페이지 로드 추적
    Analytics.track('page_loaded', {
        category: 'engagement',
        label: 'initial_page_load',
        userAgent: navigator.userAgent.substring(0, 100),
        screenResolution: `${screen.width}x${screen.height}`,
        referrer: document.referrer || 'direct'
    });

    // A/B 테스트 초기화
    initializeABTest();

    // 이벤트 리스너 설정
    setupEventListeners();

    // 검색 히스토리 표시
    displaySearchHistory();

    // 사용자 여정 시작 추적
    Analytics.trackUserJourney('page_entry', {
        hasHistory: JSON.parse(localStorage.getItem('searchHistory') || '[]').length > 0
    });

    // 개발 모드에서 테스트 URL 자동 입력 (배포 시 제거)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('개발 모드: 테스트 URL 사용 가능');
        console.log('현재 적용된 헤드라인:', document.getElementById('hero-title')?.innerHTML);
        console.log('현재 적용된 서브타이틀:', document.getElementById('hero-subtitle')?.textContent);
        // elements.agodaUrl.value = 'https://www.agoda.com/grand-hyatt-seoul/hotel/seoul-kr.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1844104&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-12-25&checkOut=2024-12-26';
    }
});

// ===== 전역 함수 (디버깅용) =====
window.HotelPickDebug = {
    validateUrl: validateAgodaUrl,
    extractInfo: extractHotelInfo,
    generateLinks: generateAllLinks,
    cidDatabase: CID_DATABASE,
    analytics: Analytics,
    sessionData: () => Analytics.sessionData
};

console.log('호텔픽 CID 변환기 스크립트가 로드되었습니다.');