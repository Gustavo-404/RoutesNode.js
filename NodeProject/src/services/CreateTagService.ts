import { getCustomRepository, NamingStrategyNotFoundError } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';


class CreateTagService {
    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories) //chama a repository para utilizar os metodos
        if (!name) { //Verifica se tem nome na requisição
            throw new Error("Incorrect name!")
        }
        //SELECT * FROM TAGS WHERE NAME = 'name'
        const tagAlreadyExists = await tagsRepositories.findOne({ name }) // se tiver algum dado com o nome 'name' sera colocado na const
        if (tagAlreadyExists) { // se a const tiver valor existe tag com mesmo nome e lança excessao 
            throw new Error("Tag already exists!");
        }

        const tag = tagsRepositories.create({ // se passar nas validações chama a repository e cria o objeto
            name
        });

        await tagsRepositories.save(tag); // chama a repository e salva o dado

        return tag;
    }

}

export { CreateTagService }