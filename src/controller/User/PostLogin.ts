import {Context} from "koa";
import {getManager} from "typeorm";
import {User} from "../../entity/User";

// login
export async function postLogin(context: Context) {

  const postRepository = getManager().getRepository(User);

  const message = postRepository.create(context.request.body);

  const result = await postRepository.find({
    login: `${message.login}`
  });

  if(result.length > 0) {
     if(result[0].pass === message.pass) {
      // context.cookies.set('user_id', result[0].id);
      context.body = {"status": 200, "message": "Success", "result": result[0]} ;
      context.type = "application/json";
     } else {
      context.body = {"status": 201, "message": "Fail"}
    }
  } else {
    context.body = {"status": 404, "message": "None"}
  }
}

