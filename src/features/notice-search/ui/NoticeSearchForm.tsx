import { useState } from 'react'
import type { FormEvent } from 'react'

export function NoticeSearchForm() {
  const [keyword, setKeyword] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        className="search-form__input"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="검색어를 입력하세요"
        aria-label="검색어"
      />
      <button className="search-form__button" type="submit">
        검색
      </button>
    </form>
  )
}
