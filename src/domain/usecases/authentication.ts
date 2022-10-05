import { AccountModel } from '~/domain/models/account-model'

export type AuthenticationParams = {
  email: string
  password: string
}

/** Abstração do método de Autenticação */
export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
