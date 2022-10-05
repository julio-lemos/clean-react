/**
 * Abstração de Produção responsável pelo Post do HttpClient
 * Respeita o padrão do Interface Segregation Principle
 */
export interface HttpPostClient {
  post: (url: string) => Promise<void>
}
