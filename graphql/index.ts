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
    query getProducts($category: String, $endCursor: String) {
        productSearch(first: 8, after: $endCursor, filter: {category: {eq: $category}}){
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
                price
                discount
                createdBy {
                    email
                    name
                }
            }
        }
    }
`

export const updateProductMutation = `
    mutation UpdateProduct($id: ID!, $input: ProductUpdateInput!) {
        productUpdate(by: {id: $id}, input: $input) {
            product {
                id
                title
                description
                price
                discount
                createdBy {
                    email
                    name
                }
            }
        }
    }
`


export const deleteProductMutation = `
    mutation DeleteProduct($id: ID!) {
        productDelete(by: {id: $id}) {
            deletedId
        }
    }

`