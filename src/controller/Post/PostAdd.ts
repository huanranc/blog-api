import {Context} from "koa";
import {getManager} from "typeorm";
import {Terms} from "../../entity/Terms";
import {Taxonomy} from "../../entity/Taxonomy";
import {Post} from "../../entity/Post";

// AddPost
export async function postAddPost(context: Context) {

  const addTaxonomy = getManager().getRepository(Taxonomy);

  const addTerms = getManager().getRepository(Terms);

  const addPosts = getManager().getRepository(Post);

  const resultTerms = await addTerms.create(context.request.body);

  const [allcount, termCount] = await addTerms.findAndCount();
  console.log("这里是",termCount)

  const requestPosts = await addPosts.create(context.request.body);

  await addPosts.save({
    title: requestPosts.title,
    excerpt: requestPosts.excerpt,
    content: requestPosts.content,
    status: true,
    date: Math.round(new Date().getTime() / 1000).toString(),
    date_gmt: Math.round(new Date().getTime() / 1000).toString(),
    modified: Math.round(new Date().getTime() / 1000).toString(),
    modified_gmt: Math.round(new Date().getTime() / 1000).toString(),
    author: requestPosts.author?requestPosts.author:'huanranc',
    terms: [resultTerms]
  })

  context.body = {
    status: "200",
    requestPosts,
    resultTerms
  };
}
