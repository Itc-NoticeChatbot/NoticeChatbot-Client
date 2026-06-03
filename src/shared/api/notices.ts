import type { Notice } from '@entities/notice'

import { http } from './http'

interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

interface NoticeApiItem {
  id: number
  sourceSite: string
  sourceUrl: string
  title: string
  category: string | null
  content: string
  publishedAt: string
  crawledAt: string
}

const convertNotice = (item: NoticeApiItem): Notice => ({
  id: item.id,
  category: item.category ?? '',
  title: item.title,
  source: item.sourceSite,
  publishedAt: item.publishedAt.split('T')[0],
  summary: item.content.length > 100 ? `${item.content.slice(0, 100)}...` : item.content,
  href: item.sourceUrl,
})

export const getNotices = async (): Promise<Notice[]> => {
  const res = await http.get<ApiResponse<NoticeApiItem[]>>('/api/notices')
  return res.data.data.map(convertNotice)
}

export const getNotice = async (id: number): Promise<Notice> => {
  const res = await http.get<ApiResponse<NoticeApiItem>>(`/api/notices/${id}`)
  return convertNotice(res.data.data)
}
