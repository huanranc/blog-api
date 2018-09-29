import {Context} from "koa";
import {getManager} from "typeorm";
import {Terms} from "../../entity/Terms";
import {Taxonomy} from "../../entity/Taxonomy";

export async function termFindById(context: Context) {

  const term = getManager().getRepository(Terms);
  const taxonomys = getManager().getRepository(Taxonomy);

  const taxonmy = taxonomys.create(context.request.body);
  const terms = await term.findOne(context.request.body);

  context.type = "application/json";
  context.body =  {
    term: terms,
    taxonmy
  };
}
