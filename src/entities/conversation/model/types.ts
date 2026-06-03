export interface Conversation {
  id: number
  question: string
  answer: string
  relatedNoticeIds: number[]
  createdAt: string
  answerPreview?: string
}
