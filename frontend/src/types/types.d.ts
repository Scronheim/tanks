export interface Tank {
    _id: string
    name: string
    level: number
    type: number
    country: Country
    image: string
    cost: number
    unlockExp: number
    description: string
}

export interface Country {
    name: string
    icon: string
}

export interface UserTank {
    _id: string
    count: number
}