import { Project, NavLink } from "./types";

// 샘플 프로젝트 데이터
export const projects: Project[] = [
  {
    id: 1,
    title: "Steam Game Recommendation Application",
    description:
      "2025년 6월까지의 게임들을 바탕으로 해당 게임들의 태그들을 조합해 자신에게 딱 맞는 최적의 게임 리스트를 추천해주는 스팀 게임 추천 웹 애플리케이션입니다!",
    tech: ["Spring Boot", "JPA", "H2", "Redis"],
    image: "/projects/SteamGame.png",
    github: "https://github.com/tember8003/SteamGame_Recommend",
    demo: "",
    date: "2025-07",
    type: "personal",
    period: "2025.03 - 2025.07",
    features: [
      "태그 동시 출현 빈도를 통한 추천 알고리즘",
      "GEMINI API를 연동한 AI 기반 추천",
      "Steam API를 연동한 내 스팀 프로필",
      "Redis 캐싱을 통한 성능 최적화",
    ],
  },
  {
    id: 2,
    title: "MSG CTF 대회",
    description:
      "건국대(seKUrity) · 세종대(SSG) · 명지대(MJSEC)이 함께 주관한 CTF 대회 사이트 개발 + 운영을 위한 티켓 봇 개발 + 대회 문제 등록",
    tech: ["Spring Boot", "Redis", "MySQL", "JPA"],
    image: "/projects/MSG_CTF.png",
    github: "https://github.com/MJSEC-MJU/MSG_CTF_BACK",
    date: "2025-04",
    type: "team",
    period: "2024.12 - 2025.03",
    features: [
      "JWT를 통한 회원 권한 검증",
      "SMTP를 활용한 대학교 인증",
      "대회를 위한 티켓 봇 제작",
      "CSRF 문제 제작",
    ],
  },
  {
    id: 3,
    title: "MSG CTF Renewal",
    description:
      "상명대(CodeCure) · 명지대(MJSEC) · 건국대(seKUrity) · 순천향대(SecurityFirst) · 중앙대(SECURIOUS)가 함께 만드는 오프라인 CTF 대회",
    tech: ["Spring Boot", "MySQL", "Redis", "JPA"],
    image: "/projects/MSG_CTF_LOGO.jpg",
    github: "https://github.com/MJSEC-MJU/MSG_CTF_BACK/tree/dev",
    demo: "https://msgctf.kr",
    date: "2025-11",
    type: "team",
    period: "2025.07 - 2025.11",
    features: [
      "비관적 락을 사용한 문제 동시성 해결",
      "문제 마일리지 시스템",
      "문제 기능 개발",
      "Spring Security를 활용한 보안 시스템",
    ],
  },
  {
    id: 4,
    title: "MJSEC LMS",
    description:
      "MJSEC 동아리 회원들을 위한 자체 Learning Management System용 사이트",
    tech: ["Spring Boot", "MySQL", "Redis", "JPA"],
    image: "/projects/MJSEC_LMS.png",
    github: "https://github.com/MJSEC-MJU/MJSEC_LMS_BACK/tree/dev",
    demo: "https://mjsec.kr/lms",
    date: "현재 진행중",
    type: "team",
    period: "2025.07 - 현재 진행중",
    features: [
      "SMTP를 활용한 자동 알람 시스템",
      "Spring Security를 활용한 보안 시스템",
      "과제, 출석, 유저, 알람, 스터디 기능 개발",
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
