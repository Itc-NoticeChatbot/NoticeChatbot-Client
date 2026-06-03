import { useCallback, useEffect, useState } from 'react'

import type { Bookmark } from '@entities/bookmark'
import {
  createBookmark as apiCreateBookmark,
  deleteBookmark as apiDeleteBookmark,
  getBookmarks,
} from '@shared/api'

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])

  useEffect(() => {
    getBookmarks()
      .then(setBookmarks)
      .catch(() => {})
  }, [])

  const addBookmark = useCallback(async (noticeId: number, question: string) => {
    try {
      const newBookmark = await apiCreateBookmark(noticeId, question)
      setBookmarks((prev) => [...prev, newBookmark])
    } catch {
      // 북마크 추가 실패는 사일런트 처리
    }
  }, [])

  const removeBookmark = useCallback(async (id: number) => {
    try {
      await apiDeleteBookmark(id)
      setBookmarks((prev) => prev.filter((b) => b.id !== id))
    } catch {
      // 북마크 삭제 실패는 사일런트 처리
    }
  }, [])

  const isBookmarked = useCallback(
    (noticeId: number) => bookmarks.some((b) => b.noticeId === noticeId),
    [bookmarks],
  )

  return { bookmarks, addBookmark, removeBookmark, isBookmarked }
}
