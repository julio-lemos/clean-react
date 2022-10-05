import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from '~/data/protocols/http'

/** Classe utilitária para mock do HttpPostClient */
export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body

    return this.response
  }
}
