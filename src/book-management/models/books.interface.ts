export interface BooksAddInterface {
    id?: string;
    title: string;
    author: string;
    category: BookCategory | any;
    coverImage: string;
}

export interface BookReadStatusInterface {
    status: "Read" | "Want to read"
}

export interface BookCategory {
    category: "fiction" | "non-fiction" | "biography"
}