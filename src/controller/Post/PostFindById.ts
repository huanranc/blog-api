import {Context} from "koa";
import {getManager} from "typeorm";
import {Post} from "../../entity/Post";
import {Terms} from "../../entity/Terms";

export async function postFindById(context: Context) {

    const postRepository = getManager().getRepository(Post);
    const termRepository = getManager().getRepository(Terms);

    const post = await postRepository.findOne((context as any).params.id);
    const terms = await termRepository.findOne((context as any).params.id);

    if (!post) {
        context.status = 404;
        return;
    }

    context.type = "application/json";
    context.body =  {
      post,
      terms
    };
}
