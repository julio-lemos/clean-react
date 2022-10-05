import { HttpPostClient } from '~/data/protocols/http/http-post-client'
import { HttpStatusCode } from '~/data/protocols/http/http-response'
import { InvalidCredentialsError } from '~/domain/errors/invalid-credentials-error'
import { AuthenticationParams } from '~/domain/usecases/authentication'

/** Classe de produção responsável por se conectar a API de Authenticação  */
export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpClient.post({ url: this.url, body: params })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        return await Promise.resolve()
    }
  }
}
