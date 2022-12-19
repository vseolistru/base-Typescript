namespace someName {

    type User = {
        name: string,
        siteName: string | null
    }

    const assertName = (user:User):asserts user is User & { siteName: string} => {
        if (!user.siteName) {throw new Error('User has no siteName')}
    }

    const logUserBySiteName = (user: User):void => {
        // @ts-ignore
        assertName(user)
        console.log(user.siteName!.toUpperCase())

    }

    const user1: User = {
        name: "Dimok Rogozin",
        siteName: 'Rogozka'
    }
    logUserBySiteName(user1)

}