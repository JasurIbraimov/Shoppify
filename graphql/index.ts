export const getUserQuery = `
    query GetUser($email: String!)  {
        user(by: {email: $email}) {
            id
            name 
            avatarUrl
            description
        }
    }
`

export const createUserMutation = `
    mutation CreateUser($input: UserCreateInput!) {
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

export const createProductMutation = `
    mutation CreateProduct($input: ProductCreateInput!) {
        productCreate(input: $input) {
            product {
                id
                title
                description
                createdBy {
                    email
                    name
                }
            }
        }
    }
`

export const updateProductMutation = `
    mutation CreateProduct($input: ProductCreateInput!) {
        productCreate(input: $input) {
            product {
                id
                title
                description
                createdBy {
                    email
                    name
                }
            }
        }
    }
`