import {postLogin} from "./controller/user/PostLogin";
import {postAddPost} from "./controller/Post/PostAdd";
import {postDel} from "./controller/Post/PostDel";
import {postUpdate} from "./controller/Post/postUpdate";

/**
 * All application routes.
 */
export const AppRoutes = [
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
        method: "get",
        action: postDel
    },
    {
        path: "/updatePost/:id",
        method: "post",
        action: postUpdate
    }
];
