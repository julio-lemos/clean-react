import { faker } from '@faker-js/faker'
import { HttpPostClientSpy } from '~/data/test/mock-http-client'
import { mockAuthentication } from '~/domain/test/mock-authentication'

import { RemoteAuthentication } from './remote-authentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

/** Pattern Factory para evitar várias edições no mesmo arquivo */
const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  /** Testa a integração do RemoteAuthentication com o HttpClient */
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { httpPostClientSpy, sut } = makeSut(url)
    await sut.auth(mockAuthentication())

    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const authenticationParams = mockAuthentication()
    const { httpPostClientSpy, sut } = makeSut()
    await sut.auth(authenticationParams)

    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })
})
