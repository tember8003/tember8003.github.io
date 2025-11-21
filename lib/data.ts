import { Project, NavLink } from "./types";

// 샘플 프로젝트 데이터
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce 쇼핑몰",
    description:
      "Spring Boot와 JPA를 활용한 온라인 쇼핑몰 프로젝트입니다. RESTful API 설계와 결제 시스템을 구현했습니다.",
    tech: ["Spring Boot", "JPA", "MySQL", "Redis", "React"],
    image: "/projects/ecommerce.png",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://demo.example.com",
    date: "2024-03",
    type: "team",
    period: "2024.01 - 2024.03",
    features: [
      "JWT 기반 사용자 인증/인가",
      "상품 검색 및 필터링 (ElasticSearch)",
      "장바구니 및 주문 관리",
      "Iamport 결제 연동",
      "Redis 캐싱을 통한 성능 최적화",
    ],
  },
  {
    id: 2,
    title: "실시간 채팅 애플리케이션",
    description:
      "WebSocket을 이용한 실시간 채팅 서비스입니다. 1:1 채팅과 그룹 채팅을 지원합니다.",
    tech: ["Spring Boot", "WebSocket", "MongoDB", "Vue.js"],
    image: "/projects/chat.png",
    github: "https://github.com/yourusername/chat-app",
    date: "2023-12",
    type: "personal",
    period: "2023.11 - 2023.12",
    features: [
      "WebSocket 기반 실시간 메시징",
      "1:1 채팅 및 그룹 채팅 룸",
      "읽음/안읽음 표시",
      "이미지 파일 전송",
      "채팅 내역 검색 기능",
    ],
  },
  {
    id: 3,
    title: "블로그 플랫폼",
    description:
      "마크다운 에디터를 지원하는 개인 블로그 플랫폼입니다. SEO 최적화와 댓글 시스템을 구현했습니다.",
    tech: ["Spring Boot", "PostgreSQL", "Next.js", "Tailwind CSS"],
    image: "/projects/blog.png",
    github: "https://github.com/yourusername/blog",
    demo: "https://blog.example.com",
    date: "2024-01",
    type: "personal",
    period: "2023.12 - 2024.01",
    features: [
      "마크다운 에디터 및 실시간 프리뷰",
      "태그 기반 포스트 분류",
      "댓글 및 대댓글 시스템",
      "조회수 및 좋아요 기능",
      "RSS 피드 제공",
    ],
  },
];

// 네비게이션 링크
export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

// ID로 프로젝트 찾기
export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id);
}

// 프로젝트 전체 개수
export function getProjectCount(): number {
  return projects.length;
}
