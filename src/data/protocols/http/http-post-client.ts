import { HttpResponse } from './http-response'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

/**
 * Abstração de Produção responsável pelo Post do HttpClient
 * Respeita o padrão do Interface Segregation Principle
 */
export interface HttpPostClient<T, R> {
  post: (params: HttpPostParams<T>) => Promise<HttpResponse<R>>
}
