import { FriendStatus } from '../typings/FriendStatus'

export interface IFriendshipDTO {
	friendId: string
	friendFriendOneId: string
	friendFriendTwoId: string
	friendStatus: FriendStatus
	friendUpdatedAt: string
	friendCreatedAt: string
	userId: string
	userUsername: string
	userEmail: string
	userAvatarUrl: string
	userHeroUrl: string
}
