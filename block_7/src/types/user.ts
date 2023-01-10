export type GithubUser = {
    login: string;
    id: number;
    avatar_url: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    bio: string,
    twitter_username: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: number;
}

export type UserError = {
    message: string;
    documentation_url: string;
}

export type LocalGithubUser = {
    login: string;
    id: number;
    avatar: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    bio: string,
    twitter: string;
    repos: number;
    followers: number;
    following: number;
    created: number;
}

