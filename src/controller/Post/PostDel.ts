import {Context} from "koa";
import {getManager} from "typeorm";
import {Post} from "../../entity/Post";

export async function postDel(context: Context) {
  
  const posts = getManager().getRepository(Post);

  let updatePost = await posts.findOne((context as any).params.id);

  if(!updatePost) {
    context.body = {
      status: "404"
    }
    return;
  } else {
    updatePost.status = false;
    await posts.save(updatePost);
    context.type = "application/json";
    context.body = updatePost;
  }
}