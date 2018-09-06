import {Context} from "koa";
import {getManager} from "typeorm";
import {Post} from "../../entity/Post";

/**
 * Loads all posts from the database.
 */
export async function postFindAll(context: Context) {
  
    const postRepository = getManager().getRepository(Post);
    const posts = await postRepository.find();
    context.type = "application/json";
    context.body = {
      status: 200,
      posts
    };
}
