import {Context} from "koa";
import {getManager} from "typeorm";
import {Terms} from "../../entity/Terms";
import {Taxonomy} from "../../entity/Taxonomy";

export async function termFindById(context: Context) {

  const term = getManager().getRepository(Terms);
  const taxonomys = getManager().getRepository(Taxonomy);

  const taxonmy = await taxonomys.findOne(context.request.body);
  const terms = await term.findOne(context.request.body);

  context.type = "application/json";
  context.body =  {
    message: {
      id: terms.id,
      term: terms.name,
      nameTaxo: taxonmy.nameTaxon,
      taxonmyDes: taxonmy.description
    }
  };
}
