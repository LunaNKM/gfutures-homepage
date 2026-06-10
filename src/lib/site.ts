export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Service",
    href: "/service",
    children: [
      { label: "USA", href: "/service" },
      { label: "JAPAN", href: "/japan" },
      { label: "GLOBAL", href: "/service" },
    ],
  },
  { label: "Work", href: "/#work" },
  { label: "Blog", href: "/#blog" },
  { label: "PR", href: "/#pr" },
];

export const company = {
  nameKo: "지퓨처스",
  nameEn: "Gfutures",
  email: "admin@gfutures.co",
  address: "서울특별시 마포구 독막로 18, 팍스타빌딩 5층",
  bizNo: "사업자 등록번호 696-88-01813",
  copyright: "Copyright © 2025 지퓨처스 All rights reserved",
  footerCopy:
    "GFS is a company preparing for the global future, continuously pursuing diverse and creative challenges. Becoming the world's No.1 partner - that is GFS's dream and ultimate goal.",
};

export const stats = [
  { value: "7+", label: "Countries" },
  { value: "100+", label: "Clients" },
  { value: "10B+", label: "Gross" },
  { value: "10K+", label: "Influencers" },
];

export const howWeDoSteps = [
  "고객 필요 사항 청취",
  "글로벌 전략 방안 제안",
  "캠페인 목표 및 예산 확정",
  "전담 운영팀 구성",
  "채널별 실행 플랜 설계",
  "콘텐츠 제작 및 광고 집행",
  "성과 데이터 분석 리포트",
  "후속 성장 전략 제안",
];

export const whatWeDo = [
  {
    title: "Branding",
    desc: "브랜드 전략 수립부터 아이덴티티 설계까지, 시장에 각인되는 브랜드를 만듭니다.",
  },
  {
    title: "Commerce",
    desc: "단발성 대행이 아닌 브랜딩, 마케팅, 커머스가 종합된 LOOP 전략을 제안 드립니다.",
  },
  {
    title: "Stragegy",
    desc: "데이터와 현지 인사이트를 바탕으로 글로벌 진출 전략을 설계합니다.",
  },
  {
    title: "Marketing",
    desc: "인플루언서, 퍼포먼스, 콘텐츠를 아우르는 통합 마케팅을 실행합니다.",
  },
];

export const services = [
  {
    slug: "account-management",
    en: "Account Management",
    ko: "계정 운영 대행",
    desc: "공식 계정은 브랜드의 첫인상을 전달하는 핵심 접점입니다.",
  },
  {
    slug: "influencer-marketing",
    en: "Influencer Marketing",
    ko: "인플루언서 전략 제안",
    desc: "브랜드 이미지와 목적에 맞는 인플루언서 전략을 제안합니다.",
  },
  {
    slug: "performance-marketing",
    en: "Performance Marketing",
    ko: "퍼포먼스 마케팅",
    desc: "크리에이티브 제작부터 광고 운영, 데이터 분석까지 연결합니다.",
  },
  {
    slug: "more",
    en: "& More",
    ko: "글로벌 확장 솔루션",
    desc: "현지 네트워크를 바탕으로 목표 달성에 필요한 과정을 함께합니다.",
  },
];

export const japanStats = [
  { value: "$29.6B", label: "대일 수출액 규모" },
  { value: "250~260조", label: "일본 EC 시장 규모" },
  { value: "KOR", label: "일본 화장품 수입국 1위" },
];

// Service (JAPAN) — 좌측 메뉴 + 탭별 상세. 첨부 기획안 4.Service(JAPAN) 기준.
export const japanServices = [
  {
    key: "account",
    en: "Account Management",
    ko: "계정 운영 대행",
    desc: "공식 계정은 단순히 브랜드의 톤앤매너를 보여주는 공간이 아닌, 현지 소비자에게 안심과 신뢰를 전달하는 매개체입니다.",
    badges: ["Instagram", "X", "LIPS", "@cosme", "Qoo10", "Amazon"],
  },
  {
    key: "influencer",
    en: "Influencer Marketing",
    ko: "인플루언서 전략 제안",
    desc: "브랜드 이미지, 프로모션 목적, 활용 계획 등에 따라 매체·티어 구분 없는 최적화 된 인플루언서 전략을 제안 드립니다. 또한 일본 셀럽 PR, 앰버서더 계약, 전용 광고 상품까지 지원하고 있습니다.",
    groups: [
      "❶ 마이크로~메가 인플루언서 PR",
      "❷ 셀럽 섭외 및 앰버서더 제안",
      "❸ 세일즈 콜라보 — glo: HANNA, EGA, Tennchimu",
    ],
  },
  {
    key: "performance",
    en: "Performance Marketing",
    ko: "퍼포먼스 마케팅",
    desc: "크리에이티브 제작부터 광고 운영, 데이터 분석까지 운영의 전 과정을 설계하고 메타, X, LINE, Google 등 일본 내 주 사용 채널 중심의 광고 집행을 도와 드립니다.",
    dash: "GFU-DASH",
  },
  {
    key: "more",
    en: "& More",
    ko: "일본 현지 네트워킹 바탕 전략 수립",
    desc: "일본 현지 강력한 네트워킹을 바탕으로 고객의 목표 달성에 필요한 전 과정을 함께 하겠습니다.",
    categories: [
      { label: "POP UP", items: "앳코스메 · JKCS" },
      { label: "Offline", items: "돈키호테 · 마츠모토 키요시 · LOFT" },
      { label: "IP·Media", items: "캐릭터 IP · 미디어(잡지)사" },
      { label: "OOH", items: "사이버트럭 · 오모테산도 옥외광고" },
    ],
  },
] as const;
