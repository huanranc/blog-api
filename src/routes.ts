import { postFindAll } from './controller/Post/PostFindAll';
import { postFindById } from './controller/Post/PostFindById';
import { postLogin } from "./controller/User/PostLogin";
import { postAddPost } from "./controller/Post/PostAdd";
import { postDel } from "./controller/Post/PostDel";
import { postUpdate } from "./controller/Post/PostUpdate";
import { taxonomyAdd } from "./controller/Post/TaxonomyAdd";
import { termFindById } from "./controller/Post/TermsTaxon";

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
    },
    {
        path: '/term',
        method: 'post',
        action: termFindById
    }
];
