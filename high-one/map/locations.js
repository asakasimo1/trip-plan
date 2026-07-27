// 하이원리조트 2박3일 가족여행 장소 데이터 (2026-07-29~31)
const TRIP_INFO = {
  title: "하이원리조트 2박3일 가족여행",
  startDate: "2026-07-29",
  members: ["아빠(현석)", "엄마(하영)", "수아(7세)"],
};

const DAY_COLORS = {
  1: { color: "#15803d", label: "DAY 1 · 7/29 (수)" },
  2: { color: "#0369a1", label: "DAY 2 · 7/30 (목)" },
  3: { color: "#b45309", label: "DAY 3 · 7/31 (금)" },
};

const CATEGORY = {
  FOOD:      { icon: "🍽️", label: "맛집" },
  CAFE:      { icon: "☕", label: "카페" },
  SPOT:      { icon: "📍", label: "관광지" },
  HOTEL:     { icon: "🏨", label: "숙소" },
  TRANSPORT: { icon: "🚗", label: "이동" },
  ACTIVITY:  { icon: "🎡", label: "액티비티" },
  WATER:     { icon: "💦", label: "물놀이" },
  SHOPPING:  { icon: "🛍️", label: "쇼핑" },
};

const LOCATIONS = [

  // ═══════════════════════════════════════
  // DAY 1 · 7/29 (수) — 부천 출발 → 하이원 체크인
  // ═══════════════════════════════════════
  {
    id: "bucheon_depart",
    name: "부천 출발",
    nameJp: "경기도 부천시",
    category: "TRANSPORT",
    lat: 37.5037, lng: 126.7660,
    day: 1, order: 1,
    desc: "07:00 부천 출발. 영동고속도로 → 제천IC 방향. 약 2시간 30분 소요.",
    tip: "더운 날씨이므로 차량 에어컨 미리 켜두고, 아이 멀미약 챙기기.",
    webUrl: "",
  },
  {
    id: "jecheon_hongigalbi",
    name: "홍이갈비 (점심)",
    nameJp: "충북 제천 홍이갈비",
    category: "FOOD",
    lat: 37.1318, lng: 128.2108,
    day: 1, order: 2,
    desc: "제천 인근 인기 갈비 맛집. 숯불갈비 + 냉면 구성. 더운 여름 시원한 냉면과 함께.",
    tip: "제천IC에서 10분 거리. 11:30 전 도착하면 웨이팅 없이 입장 가능.",
    webUrl: "",
  },
  {
    id: "yeongwol_coal_museum",
    name: "영월 탄광문화촌",
    nameJp: "강원 영월 탄광문화촌",
    category: "SPOT",
    lat: 37.1828, lng: 128.4693,
    day: 1, order: 3,
    desc: "실내 전시관 위주로 관람 가능! 탄광 역사 + 광부 생활 체험. 더위 피하기 딱 좋음.",
    tip: "실내 에어컨 완비. 수아가 광부 헬멧 체험 사진 찍기 좋아요. 1시간 내외로 관람.",
    webUrl: "https://www.yeongwol.go.kr/",
  },
  {
    id: "cheongnyeongpo",
    name: "청령포",
    nameJp: "강원 영월 청령포",
    category: "SPOT",
    lat: 37.1790, lng: 128.4496,
    day: 1, order: 4,
    desc: "단종 유배지. 나룻배 타고 강 건너가는 특별한 체험! 수아 나룻배 탑승 강추.",
    tip: "나룻배 왕복 3,000원/인. 탁 트인 강변이라 더위 식히기 좋음. 30~40분 코스.",
    webUrl: "https://www.yeongwol.go.kr/cheongnyeongpo",
  },
  {
    id: "highone_convention_hotel",
    name: "하이원 컨벤션 호텔 (체크인)",
    nameJp: "강원 정선 하이원리조트",
    category: "HOTEL",
    lat: 37.2172, lng: 128.7859,
    day: 1, order: 5,
    desc: "하이원 메인 숙소. 15:00 체크인. 리조트 내 수영장·편의시설 이용 가능.",
    tip: "체크인 후 리조트 내 편의점에서 간식 구비. 저녁은 리조트 식당 or 고한읍 외식.",
    webUrl: "https://www.high1.com/",
  },
  {
    id: "gohan_dinner",
    name: "고한읍 저녁 식사",
    nameJp: "강원 정선 고한읍",
    category: "FOOD",
    lat: 37.2192, lng: 128.7850,
    day: 1, order: 6,
    desc: "하이원 인근 고한읍 식당가. 산채비빔밥·황태해장국·돼지갈비 등 선택.",
    tip: "리조트에서 걸어서 5~10분. 저녁 일찍 먹고 리조트 수영장 야간 이용 가능.",
    webUrl: "",
  },

  // ═══════════════════════════════════════
  // DAY 2 · 7/30 (목) — 하이원 워터월드 하루종일
  // ═══════════════════════════════════════
  {
    id: "highone_breakfast",
    name: "하이원 조식 뷔페",
    nameJp: "하이원 컨벤션 호텔 조식",
    category: "FOOD",
    lat: 37.2172, lng: 128.7859,
    day: 2, order: 1,
    desc: "호텔 조식 뷔페. 든든하게 먹고 워터월드 대비. 09:00 이전 일찍 먹기 권장.",
    tip: "워터월드 오픈 10:00 → 일찍 입장할수록 인파 적음. 선크림 미리 발라두기.",
    webUrl: "https://www.high1.com/",
  },
  {
    id: "highone_waterworld",
    name: "하이원 워터월드 (하루종일)",
    nameJp: "하이원 워터월드",
    category: "WATER",
    lat: 37.2205, lng: 128.7820,
    day: 2, order: 2,
    desc: "해발 800m 고지대 워터파크! 파도풀·슬라이드·유수풀. 기온이 아래보다 5~7도 낮아 쾌적.",
    tip: "수아 키 110cm 이상 슬라이드 탑승 가능. 아쿠아슈즈 필수. 선크림 2시간마다 재도포.",
    webUrl: "https://www.high1.com/water",
  },
  {
    id: "waterworld_lunch",
    name: "워터월드 내 식당 (점심)",
    nameJp: "워터월드 구내식당",
    category: "FOOD",
    lat: 37.2200, lng: 128.7825,
    day: 2, order: 3,
    desc: "워터월드 구내 식당. 비빔밥·라면·튀김류. 짐 보관 후 수영복 차림으로 식사.",
    tip: "피크타임(12:00~13:00)은 줄이 길어요. 11:30 또는 13:30에 먹는 게 편함.",
    webUrl: "",
  },
  {
    id: "resort_dinner",
    name: "리조트 저녁 & 휴식",
    nameJp: "하이원 리조트",
    category: "FOOD",
    lat: 37.2172, lng: 128.7859,
    day: 2, order: 4,
    desc: "워터월드 후 리조트 내 식당 또는 룸서비스. 몸이 지쳐있으니 이동 최소화.",
    tip: "수아 일찍 재우고 어른은 리조트 야외 데크에서 맥주 한 캔 여유 타임!",
    webUrl: "https://www.high1.com/",
  },

  // ═══════════════════════════════════════
  // DAY 3 · 7/31 (금) — 정선 나들이 → 귀가
  // ═══════════════════════════════════════
  {
    id: "highone_checkout",
    name: "체크아웃 후 정선 이동",
    nameJp: "하이원 → 정선",
    category: "TRANSPORT",
    lat: 37.2172, lng: 128.7859,
    day: 3, order: 1,
    desc: "11:00 체크아웃. 짐 챙겨서 정선 시내 방향으로 이동. 약 30분 소요.",
    tip: "체크아웃 전 짐 먼저 차에 싣고 마지막 조식 뷔페 이용 가능.",
    webUrl: "",
  },
  {
    id: "jeongseon_cafe",
    name: "정선 카페 (오전 커피)",
    nameJp: "정선 감성 카페",
    category: "CAFE",
    lat: 37.3740, lng: 128.6600,
    day: 3, order: 2,
    desc: "정선 시내 감성 카페. 강원도 산간 뷰 즐기며 커피 한 잔. 엄마 사진 포인트.",
    tip: "정선읍 카페거리에 최근 감성 카페들 오픈. 수아 딸기에이드 주문 가능.",
    webUrl: "",
  },
  {
    id: "jeongseon_arari_market",
    name: "정선 아리리 5일장 (장날 시)",
    nameJp: "정선 아라리장",
    category: "SPOT",
    lat: 37.3736, lng: 128.6572,
    day: 3, order: 3,
    desc: "정선 대표 5일장 (2·7일 개장). 메밀전·옥수수·감자 등 강원도 특산물 가득.",
    tip: "7/31이 장날이면 꼭 방문! 수아가 메밀전병 먹으면서 구경하기 좋아요.",
    webUrl: "https://www.ararimarket.com/",
  },
  {
    id: "kotdeungchi_noodle",
    name: "콧등치기 국수 (점심)",
    nameJp: "정선 콧등치기 국수",
    category: "FOOD",
    lat: 37.3743, lng: 128.6606,
    day: 3, order: 4,
    desc: "정선 향토 명물! 굵고 쫄깃한 메밀면. 시원한 국물이 여름에 딱. 국수+전 세트 추천.",
    tip: "정선읍 중심 식당가 내 위치. 가성비 좋고 양 푸짐. 주차 시내 공영 주차장 이용.",
    webUrl: "",
  },
  {
    id: "bucheon_return",
    name: "정선 → 부천 귀가",
    nameJp: "귀가",
    category: "TRANSPORT",
    lat: 37.5037, lng: 126.7660,
    day: 3, order: 5,
    desc: "13:30~14:00 정선 출발. 영동고속도로 → 부천. 약 2시간 30분. 저녁 전 귀가.",
    tip: "귀가길 휴게소(횡성·여주 추천)에서 1회 쉬어가기. 수아 차 안에서 낮잠 타임!",
    webUrl: "",
  },

];
