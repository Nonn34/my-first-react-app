export interface PostDTO {
  id: number
  userId: string
  title: string
  body: string
}

export interface CreatePostDTO {
  userId: string | number
  title: string
  body: string
}
