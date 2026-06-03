import type { Bookmark } from '@entities/bookmark'

import { http } from './http'

interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

interface BookmarkApiItem {
  id: number
  noticeId: number
  noticeTitle: string
  question?: string
  createdAt: string
}

interface CreateBookmarkRequest {
  noticeId: number
  question: string
}

const convertBookmark = (item: BookmarkApiItem): Bookmark => ({
  id: item.id,
  noticeId: item.noticeId,
  question: item.question,
  title: item.noticeTitle,
  source: '',
  publishedAt: item.createdAt.split('T')[0],
})

export const getBookmarks = async (): Promise<Bookmark[]> => {
  const res = await http.get<ApiResponse<BookmarkApiItem[]>>('/api/bookmarks')
  return res.data.data.map(convertBookmark)
}

export const createBookmark = async (noticeId: number, question: string): Promise<Bookmark> => {
  const res = await http.post<ApiResponse<BookmarkApiItem>>('/api/bookmarks', {
    noticeId,
    question,
  } satisfies CreateBookmarkRequest)
  return convertBookmark(res.data.data)
}

export const deleteBookmark = async (id: number): Promise<void> => {
  await http.delete(`/api/bookmarks/${id}`)
}
