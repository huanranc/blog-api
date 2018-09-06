import {Context} from "koa";
import {getManager} from "typeorm";
import {Taxonomy} from "../../entity/Taxonomy";

// AddPost
export async function taxonomyAdd(context: Context) {

  const addTaxonomy = getManager().getRepository(Taxonomy);

  const taxonmy = addTaxonomy.create(context.request.body);

  await addTaxonomy.save(taxonmy)


  context.type = "application/json";
  context.body = {
    status: "200",
    taxonmy
  };
}
