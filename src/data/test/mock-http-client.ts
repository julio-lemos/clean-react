import { HttpPostClient } from 'data/protocols/http/http-post-client'

/** Classe utilitária para mock do HttpPostClient */
export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (url: string): Promise<void> {
    this.url = url
  }
}
