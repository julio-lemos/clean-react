import { HttpPostClient, HttpPostParams } from 'data/protocols/http/http-post-client'

/** Classe utilitária para mock do HttpPostClient */
export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
  }
}
