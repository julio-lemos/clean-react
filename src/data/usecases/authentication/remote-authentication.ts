import { HttpPostClient } from 'data/protocols/http/http-post-client'

/** Classe de produção responsável por se conectar a API de Authenticação  */
export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpPostClient
  ) {}

  async auth (): Promise<void> {
    await this.httpClient.post(this.url)
  }
}
