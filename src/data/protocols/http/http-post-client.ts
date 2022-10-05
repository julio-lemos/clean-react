export type HttpPostParams = {
  url: string
}

/**
 * Abstração de Produção responsável pelo Post do HttpClient
 * Respeita o padrão do Interface Segregation Principle
 */
export interface HttpPostClient {
  post: (params: HttpPostParams) => Promise<void>
}
