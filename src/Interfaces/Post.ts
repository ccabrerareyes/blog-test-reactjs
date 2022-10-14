export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface NewPost {
    title: string;
    body: string;
    userId: number;
}

export interface PostListState {
    posts: Post[]
}