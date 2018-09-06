import { postFindAll } from './controller/Post/PostFindAll';
import { postFindById } from './controller/Post/PostFindById';
import { postLogin } from "./controller/user/PostLogin";
import { postAddPost } from "./controller/Post/PostAdd";
import { postDel } from "./controller/Post/PostDel";
import { postUpdate } from "./controller/Post/postUpdate";
import { taxonomyAdd } from "./controller/Post/TaxonomyAdd";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/posts",
        method: "get",
        action: postFindAll

    },
    {
        path: "/post/:id",
        method: "get",
        action: postFindById
    },
    {
        path: "/login",
        method: "post",
        action: postLogin
    },
    {
        path: "/newPost",
        method: "post",
        action: postAddPost
    },
    {
        path: "/delPost/:id",
        method: "patch",
        action: postDel
    },
    {
        path: "/updatePost/:id",
        method: "post",
        action: postUpdate
    },
    {
        path: "/newTaxon",
        method: "post",
        action: taxonomyAdd
    }
];
