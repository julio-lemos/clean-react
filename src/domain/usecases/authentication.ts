import { AccountModel } from './../models/account-model'

type AuthenticationParams = {
  email: string
  password: string
}

/** Abstração do método de Autenticação */
export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
