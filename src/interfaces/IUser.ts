import { RoleEnum } from '../enums/RoleEnum'

export interface IUser {
	id: string,
	username: string,
	email: string,
	avatarUrl: string,
	roles?: RoleEnum[]
}
