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
        path: "api/posts",
        method: "get",
        action: postFindAll

    },
    {
        path: "api/post/:id",
        method: "get",
        action: postFindById
    },
    {
        path: "api/login",
        method: "post",
        action: postLogin
    },
    {
        path: "api/newPost",
        method: "post",
        action: postAddPost
    },
    {
        path: "api/delPost/:id",
        method: "patch",
        action: postDel
    },
    {
        path: "api/updatePost/:id",
        method: "post",
        action: postUpdate
    },
    {
        path: "api/newTaxon",
        method: "post",
        action: taxonomyAdd
    },
    {
        path: 'api/term',
        method: 'post',
        action: termFindById
    }
];
