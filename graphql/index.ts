export const getUserQuery = `
    query GetUser($email: String!)  {
        user(by: {email: $email}) {
            id
            name 
            avatarUrl
            description 
            favorites
        }
    }
`

export const createUserMutation = `
    mutation CreateUser($input: UserCreateInput) {
        userCreate(input: $input) {
            user {
                name
                email 
                avatarUrl
                description 
                id
            }
        }
    }
`