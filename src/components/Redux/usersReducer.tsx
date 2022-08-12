const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }

}

type FollowActionType = {
    type: "FOLLOW"
    userId: number
}

type UnfollowActionType = {
    type: "UNFOLLOW"
    userId: number
}

type SetUsersActionType = {
    type: "SET_USERS"
    users: any
}

type ActionsTypes = FollowActionType | UnfollowActionType | SetUsersActionType

export type InitialStateUsersType = typeof initialState

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Dmitry",
            status: "I am a boss",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            followed: true,
            fullName: "Sasha",
            status: "I am a boss too",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 3,
            followed: false,
            fullName: "Andrew",
            status: "I am a boss too",
            location: {city: "Kiev", country: "Ukraine"}
        }
    ] as Array<UserType>
}

export const usersReducer = (state: InitialStateUsersType = initialState, action: ActionsTypes): InitialStateUsersType => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}

export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: any): SetUsersActionType => ({type: SET_USERS, users})
