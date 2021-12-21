import { FriendStatus } from '../typings/FriendStatus'

export interface IFriendship {
	id?: string
	friend_one_id: string
	friend_two_id: string
	status: FriendStatus
}