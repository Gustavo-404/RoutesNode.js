import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UsersRepositories';
interface IAuthenticateRequest {
    email: string;
    password: string;
}
class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const userRepository = getCustomRepository(UserRepositories)

        //VERIFICAR SE O EMAIL EXISTE
        const user = await userRepository.findOne({ email }) //busca no banco um user com o email
        if (!user) { //se o objeto não existir retorna erro
            throw new Error("Email/Password incorrect");

        }



        //VERIFICAR SE A SENHA ESTA CORRETA
        const passwordMatch = await compare(password, user.password) // compara se a senha que o usuario esta inserindo é igual a salva no banco com hash

        if (!passwordMatch) { // se o bollean que o metodo compare retornar false senha errada envia erro
            throw new Error("Email/Password incorrect");
        }

        //GERAR O TOKEN
        //sign() recurso do jtw que pede um payload/informação que vai no corpo do token e um chave secreta 
        //que geramos um md5 no site, um subject que geralmente se usa o id, e o tempo de expiração do token o expiredIn
        const token = sign({ email: user.email }, "8bec22d658969a806c9764d900954ffe", { subject: user.id, expiresIn: "1d" });

        return token;

    }
}

export { AuthenticateUserService }