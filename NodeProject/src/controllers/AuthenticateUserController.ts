import { Response } from 'express';
import { Request } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';


class AuthenticateUserController {
    async handler(request: Request, response: Response) { //metodo que ira ouvir a requisição
        const { email, password } = request.body // pega o email e senha que serão enviados via Json no corpo da requisição

        const authenticateService = new AuthenticateUserService(); // cria um instancia da Service

        const token = await authenticateService.execute({ email, password, }) // chama o execute da service passando os parametros

        return response.json(token) // retorna o token gerado na service
    }

}
export { AuthenticateUserController }