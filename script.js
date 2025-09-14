// ===== CID 데이터베이스 =====
const CID_DATABASE = {
    // 카드사별 CID (실제 CID 값들 - 아고다줍줍/스캐너에서 수집)
    cards: {
        'bc': { name: 'BC카드', cid: '1423688' },
        'kb': { name: '국민카드', cid: '1390466' },
        'shinhan': { name: '신한카드', cid: '1378149' },
        'shinhan_master': { name: '신한(마스터)', cid: '1584788' },
        'hyundai': { name: '현대카드', cid: '1390467' },
        'hana': { name: '하나카드', cid: '1378150' },
        'woori': { name: '우리카드', cid: '1390468' },
        'woori_master': { name: '우리(마스터)', cid: '1584789' },
        'toss': { name: '토스', cid: '1849435' },
        'mastercard': { name: '마스터카드', cid: '1390469' },
        'visa': { name: '비자카드', cid: '1390470' },
        'unionpay': { name: '유니온페이', cid: '1584790' },
        'kakaopay': { name: '카카오페이', cid: '1849436' }
    },

    // 검색 경로별 CID
    search: {
        'google_map_1': { name: '구글지도1', cid: '1390471' },
        'google_map_2': { name: '구글지도2', cid: '1390472' },
        'google_map_3': { name: '구글지도3', cid: '1390473' },
        'google_search_1': { name: '구글검색1', cid: '1390474' },
        'google_search_2': { name: '구글검색2', cid: '1390475' },
        'google_search_3': { name: '구글검색3', cid: '1390476' },
        'naver_search_1': { name: '네이버검색1', cid: '1390477' },
        'facebook': { name: '페이스북', cid: '1390478' },
        'instagram': { name: '인스타그램', cid: '1390479' }
    },

    // 항공사 제휴 CID
    airlines: {
        'kal': { name: '대한항공', cid: '1390480' },
        'aar': { name: '아시아나항공', cid: '1390481' },
        'air_seoul': { name: '에어서울', cid: '1390482' },
        'jeju_air': { name: '제주항공', cid: '1390483' },
        'jin_air': { name: '진에어', cid: '1390484' },
        'air_busan': { name: '에어부산', cid: '1390485' }
    }
};

// 카테고리별 아이콘 및 이름 매핑
const CATEGORY_CONFIG = {
    cards: {
        icon: '💳',
        name: '카드사 할인 링크',
        description: '카드사별 특별 할인 혜택'
    },
    search: {
        icon: '🔍',
        name: '검색 경로별 링크',
        description: '검색 플랫폼별 할인 혜택'
    },
    airlines: {
        icon: '✈️',
        name: '항공사 제휴 링크',
        description: '항공사 마일리지 및 제휴 혜택'
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
    loadingOverlay: document.getElementById('loading-overlay')
};

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

        // 호텔명 추출 시도
        let hotelName = '호텔';

        // 방법 1: pathname에서 호텔명 추출
        const pathMatch = pathname.match(/\/hotel\/([^\/]+)/);
        if (pathMatch) {
            hotelName = pathMatch[1]
                .replace(/-/g, ' ')
                .replace(/_/g, ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        // 방법 2: .html 파일명에서 추출
        const htmlMatch = pathname.match(/\/([^\/]+)\.html/);
        if (htmlMatch && hotelName === '호텔') {
            hotelName = htmlMatch[1]
                .replace(/-/g, ' ')
                .replace(/_/g, ' ')
                .split(' ')
                .slice(0, 3) // 처음 3단어만
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        // 체크인/체크아웃 날짜 추출
        const checkin = searchParams.get('checkin') || searchParams.get('checkIn') || '날짜 미지정';
        const checkout = searchParams.get('checkout') || searchParams.get('checkOut') || '날짜 미지정';

        // 날짜 형식 변환
        const formatDate = (dateStr) => {
            if (dateStr === '날짜 미지정') return dateStr;
            try {
                const date = new Date(dateStr);
                if (isNaN(date.getTime())) return '날짜 미지정';
                return date.toLocaleDateString('ko-KR', {
                    month: 'long',
                    day: 'numeric'
                });
            } catch {
                return dateStr;
            }
        };

        return {
            name: hotelName,
            checkin: formatDate(checkin),
            checkout: formatDate(checkout),
            originalUrl: url
        };
    } catch (error) {
        console.error('호텔 정보 추출 실패:', error);
        return {
            name: '호텔',
            checkin: '날짜 미지정',
            checkout: '날짜 미지정',
            originalUrl: url
        };
    }
}

/**
 * CID가 적용된 URL 생성
 */
function addCidToUrl(originalUrl, cidValue) {
    try {
        const url = new URL(originalUrl);

        // 기존 CID 제거 후 새로운 CID 추가
        url.searchParams.delete('cid');
        url.searchParams.set('cid', cidValue);

        return url.toString();
    } catch (error) {
        console.error('CID URL 생성 실패:', error);
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

    // 각 카테고리별 링크 생성
    Object.keys(CID_DATABASE).forEach(category => {
        results.links[category] = [];

        Object.entries(CID_DATABASE[category]).forEach(([key, data]) => {
            const convertedUrl = addCidToUrl(originalUrl, data.cid);
            if (convertedUrl) {
                results.links[category].push({
                    name: data.name,
                    url: convertedUrl,
                    key: key,
                    cid: data.cid
                });
            }
        });
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
        elements.convertBtn.textContent = '변환 중...';
    } else {
        elements.loadingOverlay.classList.add('hidden');
        elements.convertBtn.disabled = false;
        elements.convertBtn.textContent = '변환하기';
    }
}

/**
 * 호텔 정보 렌더링
 */
function renderHotelInfo(hotelData) {
    const dateText = hotelData.checkin !== '날짜 미지정' && hotelData.checkout !== '날짜 미지정'
        ? `${hotelData.checkin} ~ ${hotelData.checkout}`
        : '날짜 정보 없음';

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
               onclick="trackLinkClick('${category}', '${link.key}')">
                새창에서 열기
            </a>
        </div>
    `).join('');

    return `
        <div class="link-category">
            <h3 class="category-title">
                <span class="category-icon">${config.icon}</span>
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

    // 링크 카테고리들 렌더링
    const categoriesHtml = Object.keys(data.links)
        .map(category => renderLinkCategory(category, data.links[category]))
        .filter(html => html !== '')
        .join('');

    elements.linksContainer.innerHTML = categoriesHtml;

    // 결과 섹션 표시
    elements.resultsSection.classList.remove('hidden');

    // 결과 섹션으로 스크롤
    elements.resultsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

/**
 * 링크 클릭 추적 (분석용)
 */
function trackLinkClick(category, linkKey) {
    console.log(`링크 클릭 추적: ${category} - ${linkKey}`);

    // Google Analytics 연동 시 사용
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click_converted_link', {
            'event_category': 'conversion',
            'event_label': `${category}_${linkKey}`,
            'value': 1
        });
    }
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

        // 결과 렌더링
        renderResults(results);

        // 성공 추적
        console.log('변환 성공:', results.hotel.name);
        if (typeof gtag !== 'undefined') {
            gtag('event', 'convert_success', {
                'event_category': 'engagement',
                'event_label': 'agoda_to_cid'
            });
        }

    } catch (error) {
        console.error('변환 중 오류 발생:', error);
        showError('변환 중 오류가 발생했습니다. 다시 시도해주세요.');

        if (typeof gtag !== 'undefined') {
            gtag('event', 'convert_error', {
                'event_category': 'error',
                'event_label': error.message
            });
        }
    } finally {
        toggleLoading(false);
    }
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

    // 입력 중 에러 메시지 숨기기
    elements.agodaUrl.addEventListener('input', () => {
        if (!elements.errorMessage.classList.contains('hidden')) {
            hideError();
        }
    });

    // 페이지 로드 시 입력창에 포커스
    elements.agodaUrl.focus();
}

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('호텔픽 CID 변환기가 시작되었습니다.');

    // 이벤트 리스너 설정
    setupEventListeners();

    // 개발 모드에서 테스트 URL 자동 입력 (배포 시 제거)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('개발 모드: 테스트 URL 사용 가능');
        // elements.agodaUrl.value = 'https://www.agoda.com/grand-hyatt-seoul/hotel/seoul-kr.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1844104&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-12-25&checkOut=2024-12-26';
    }
});

// ===== 전역 함수 (디버깅용) =====
window.HotelPickDebug = {
    validateUrl: validateAgodaUrl,
    extractInfo: extractHotelInfo,
    generateLinks: generateAllLinks,
    cidDatabase: CID_DATABASE
};

console.log('호텔픽 CID 변환기 스크립트가 로드되었습니다.');