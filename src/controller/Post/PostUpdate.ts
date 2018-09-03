import {Context} from "koa";
import {getManager} from "typeorm";
import {Post} from "../../entity/Post";

export async function postUpdate(context: Context) {
  
  const posts = getManager().getRepository(Post);

  const updateResult = await posts.create(context.request.body);

  let updatePost = await posts.findOne((context as any).params.id);

  if(!updatePost) {
    context.body = {
      status: "404"
    }
    return;
  } else {
      updatePost.status = true,
      updatePost.author = updatePost.author,
      updatePost.title = updateResult.title?updateResult.title:updatePost.title,
      updatePost.excerpt = updateResult.excerpt?updateResult.excerpt:updatePost.excerpt,
      updatePost.content = updateResult.content?updateResult.content:updatePost.content,
      updatePost.date = updatePost.date,
      updatePost.date_gmt = updatePost.date_gmt,
      updatePost.modified = Math.round(new Date().getTime() / 1000).toString(),
      updatePost.modified_gmt = Math.round(new Date().getTime() / 1000).toString()
    await posts.save(updatePost);
    context.body = {
      status: "200",
      updatePost
    };
  }
}
