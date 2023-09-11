export const getUserQuery = `
    query GetUser($email: String!)  {
        user(by: {email: $email}) {
            id
            name 
            avatarUrl
        }
    }
`

export const getProductByIdQuery = `
    query GetProduct($id: ID!) {
        product(by: {id: $id}) {
            title
            description
            image 
            id
            price
            discount 
            category 
            createdBy {
                id
                email 
                name 
                avatarUrl
            }
        }
    }
`

export const getProductsOfUserQuery = `
    query GetUserProducts($id: ID!, $last: Int = 4) {
        user(by: {id: $id}) {
            id
            name 
            email 
            avatarUrl 
            products(last: $last) {
                edges {
                    node {
                        id 
                        title
                        image
                    }
                }
            }
        }
    }

`

export const productsQuery = `
    query getProducts($category: String, $endcursor: String) {
        productSearch(first: 8, after: $endcursor, filter: {category: {eq: $category}}){
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            edges {
                node {
                    title
                    description
                    image 
                    id
                    price
                    discount 
                    category 
                    createdBy {
                        id
                        email 
                        name 
                        avatarUrl
                    }
                }
            }
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