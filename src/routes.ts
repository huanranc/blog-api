import {postGetAllAction} from "./controller/PostGetAllAction";
import {postGetByIdAction} from "./controller/PostGetByIdAction";
import {postSaveAction} from "./controller/PostSaveAction";

import {postLogin} from "./controller/user/PostLogin";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/posts",
        method: "get",
        action: postGetAllAction
    },
    {
        path: "/posts/:id",
        method: "get",
        action: postGetByIdAction
    },
    {
        path: "/posts",
        method: "post",
        action: postSaveAction
    },
    {
        path: "/login",
        method: "post",
        action: postLogin
    }
];
