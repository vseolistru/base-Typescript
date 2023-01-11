import {GithubUser} from "../types";

export const isGithunUser = (user:any): user is GithubUser => {
    return 'id' in user
}