const MOCK_NOTICE_LIST = [
  '2026-1학기 장학금 신청 안내',
  '캡스톤디자인 중간 점검 일정',
  '기말고사 기간 도서관 운영 시간 변경',
]

export function NoticeList() {
  return (
    <ul className="notice-list">
      {MOCK_NOTICE_LIST.map((notice) => (
        <li key={notice}>{notice}</li>
      ))}
    </ul>
  )
}
