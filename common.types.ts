import { Session, User } from "next-auth"
export interface ProductInterface {
    title: string;
    description: string;
    image: string;
    category: string;
    id: string;
    createdBy: {
      name: string;
      email: string;
      avatarUrl: string;
      id: string;
    };
}
export interface UserProfile {
    id: string;
    name: string;
    email: string;
    description: string | null;
    avatarUrl: string;
    favorites: {
      edges: { node: ProductInterface }[];
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor: string;
        endCursor: string;
      };
    };
}
export interface SessionInterface extends Session {
    user: User & {
        id: string,
        name: string,
        email: string,
        avatarUrl: string
    }
}