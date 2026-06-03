import type { Bookmark } from '@entities/bookmark'
import type { Conversation } from '@entities/conversation'
import type { Notice } from '@entities/notice'

export const MOCK_NOTICES: Notice[] = [
  {
    id: 'n-1',
    category: '학사',
    title: '2026학년도 1학기 수강신청 정정 기간 안내',
    source: '학사지원팀',
    publishedAt: '2026-03-02',
    summary: '정정 기간 동안 수강 과목 추가/취소가 가능하며, 종료 후에는 변경이 불가합니다.',
    href: 'https://example.com/notice/1',
  },
  {
    id: 'n-2',
    category: '장학',
    title: '2026-1학기 교내장학금 신청 마감 D-3',
    source: '장학팀',
    publishedAt: '2026-03-01',
    summary: '교내 우수장학금 신청 마감이 3일 남았습니다. 학생지원시스템에서 신청하세요.',
  },
  {
    id: 'n-3',
    category: '취업',
    title: '졸업작품 발표회 일정 공지',
    source: '취업지원처',
    publishedAt: '2026-02-28',
  },
]

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: 'c-1',
    question: '장학금 신청 어떻게 해?',
    createdAt: '2026-03-02 14:21',
    answerPreview: '교내 장학금은 학생지원시스템 > 장학 메뉴에서 신청할 수 있습니다.',
  },
  {
    id: 'c-2',
    question: '수강신청 정정 기간이 언제야?',
    createdAt: '2026-03-01 09:10',
    answerPreview: '2026학년도 1학기 정정 기간은 3월 4일부터 3월 6일까지입니다.',
  },
  {
    id: 'c-3',
    question: '졸업작품 양식 어디서 받아?',
    createdAt: '2026-02-28 17:42',
  },
]

export const MOCK_BOOKMARKS: Bookmark[] = [
  {
    id: 'b-1',
    title: '2026-1학기 교내장학금 신청 마감 D-3',
    source: '장학팀',
    publishedAt: '2026-03-01',
  },
  {
    id: 'b-2',
    title: '졸업작품 발표회 일정 공지',
    source: '취업지원처',
    publishedAt: '2026-02-28',
  },
]

export const MOCK_QUICK_QUESTIONS = ['장학금 공지', '수강신청 정정', '졸업작품']
