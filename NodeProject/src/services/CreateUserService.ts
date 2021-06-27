import { UserRepositories } from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm"
import { hash } from "bcryptjs"
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}
class CreateUserService {
    async execute({ name, email, admin, password }: IUserRequest) {
        const userRepository = getCustomRepository(UserRepositories)
        if (!name) {
            throw new Error(" Name incorrect") //Verifica se o e-mail esta preenchido senão aciona o erro
        }
        if (!email) {
            throw new Error(" Email incorrect") //Verifica se o e-mail esta preenchido senão aciona o erro
        }
        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password, 8) //passa oque vai ser criptografado e o tamanho do tipo da criptografia

        const user = userRepository.create({
            name,
            email,
            admin,
            password: passwordHash //como a variavel que vai ser adcionada no create não tem
            // o mesmo nome da coluna porque vamos passar uma variavel que foi 
            // criptografada utilizamos o : e o nome da variavel que deseja inserir
        });
        await userRepository.save(user);

        return user;
    }
}

export { CreateUserService }