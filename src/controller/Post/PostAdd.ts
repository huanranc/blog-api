import { Context } from "koa";
import { getManager } from "typeorm";
import { Terms } from "../../entity/Terms";
import { Taxonomy } from "../../entity/Taxonomy";
import { Post } from "../../entity/Post";

// AddPost
export async function postAddPost(context: Context) {

  const addTaxonomy = getManager().getRepository(Taxonomy);

  const addTerms = getManager().getRepository(Terms);

  const addPosts = getManager().getRepository(Post);

  const resultTerms = await addTerms.create(context.request.body);

  const requestPosts = await addPosts.create(context.request.body);

  const resultTaxonmy = await addTaxonomy.findOne(requestPosts.taxonomyId)

  const newPost = new Post();
  newPost.title = requestPosts.title,
    newPost.excerpt = requestPosts.excerpt,
    newPost.content = requestPosts.content,
    newPost.status = true,
    newPost.date = Math.round(new Date().getTime() / 1000).toString(),
    newPost.date_gmt = Math.round(new Date().getTime() / 1000).toString(),
    newPost.modified = Math.round(new Date().getTime() / 1000).toString(),
    newPost.modified_gmt = Math.round(new Date().getTime() / 1000).toString(),
    newPost.author = requestPosts.author ? requestPosts.author : 'huanranc',
    newPost.terms = [resultTerms],
    newPost.taxonomyId = requestPosts.taxonomyId
  await addPosts.save(newPost)

  context.type = "application/json";
  context.body = {
    status: "200",
    requestPosts,
    resultTerms,
    resultTaxonmy
  };
}
