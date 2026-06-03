import type { Conversation } from '@entities/conversation'

import { http } from './http'

interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

interface AskRequest {
  question: string
}

export interface AskResult {
  answer: string
  relatedNoticeIds: number[]
}

type ChatHistoryItem = Omit<Conversation, 'answerPreview'>

export const askQuestion = async (question: string): Promise<AskResult> => {
  const res = await http.post<ApiResponse<AskResult>>('/api/chat/ask', {
    question,
  } satisfies AskRequest)
  return res.data.data
}

export const getChatHistories = async (): Promise<Conversation[]> => {
  const res = await http.get<ApiResponse<ChatHistoryItem[]>>('/api/chat/histories')
  return res.data.data.map((item) => ({
    ...item,
    answerPreview: item.answer.length > 60 ? `${item.answer.slice(0, 60)}...` : item.answer,
  }))
}

export const deleteChatHistory = async (id: number): Promise<void> => {
  await http.delete(`/api/chat/histories/${id}`)
}
