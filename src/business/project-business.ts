import { ProjectDatabase } from "../database/project-database"
import { CreateProjectInputDTO, CreateProjectOutputDTO } from "../dtos"
import { Project } from "../entity"
import { BadRequestError, NotFoundError } from "../errors"
import { IdGenerator, TokenDecode, TokenManager, TokenPayload } from "../services"
import * as jwt from 'jsonwebtoken';

export class ProjectBusiness {

    constructor(
        private projectDatabase: ProjectDatabase,
        private idGenerator: IdGenerator
    ) { }

    // public loginUser = async (input: LoginUserInputDTO) => {
    //     const userDb: UserDB = await this.userDatabase.loginUser(input)
    //     if (!userDb) {
    //         throw new NotFoundError('Usuário não encontrado')
    //     }

    //     const tokenPayload: TokenPayload = {
    //         id: userDb.id,
    //         name: userDb.name
    //     }

    //     const token = this.tokenManager.createToken(tokenPayload)

    //     const output: LoginUserOutputDTO = {
    //         message: 'Login realizado com sucesso!',
    //         token: token
    //     }

    //     return output
    // }

    public createProject = async (input: CreateProjectInputDTO) => {
        const { name, type, github, link } = input

        const id = this.idGenerator.generate()

        const newProject = new Project(
            id,
            name,
            type,
            github,
            link
        )

        const newProjectDb = newProject.createDBModel()
        await this.projectDatabase.createProject(newProjectDb)

        const output: CreateProjectOutputDTO = {
            message: 'Usuário Criado com sucesso!',
            id: newProject.getId(),
        }

        return output
    }

    // public getUserById = async (input: GetUserByIdInputDTO) => {
    //     const { id, token } = input

    //     const payload = this.tokenManager.getPayload(token)

    //     if (payload === null) {
    //         throw new BadRequestError("token inválido")
    //     }

    //     const userDb: UserDB = await this.userDatabase.getUserById(id)

    //     if (!userDb) {
    //         throw new NotFoundError('Usuário não encontrado')
    //     }

    //     const output: GetUserByIdOutputDTO = {
    //         id: userDb.id,
    //         name: userDb.name,
    //         email: userDb.email
    //     }
    //     return output
    // }

    // public editUserById = async (input: EditUserByIdInputDTO) => {
    //     const { id, token } = input

    //     const payload = this.tokenManager.getPayload(token)

    //     if (payload === null) {
    //         throw new BadRequestError("token inválido")
    //     }

    //     const decodedToken = jwt.decode(token) as TokenDecode;

    //     const userDb: UserDB = await this.userDatabase.getUserById(id)
    //     if (!userDb) {
    //         throw new NotFoundError('Usuário não encontrado')
    //     }

    //     if(userDb.id !== decodedToken.id){
    //         throw new BadRequestError("Usuário não permitido")
    //     }

    //     const updateUser = new User(
    //         userDb.id,
    //         userDb.name,
    //         userDb.email,
    //         userDb.password,
    //         userDb.created_at
    //     )
        
    //     const teste = updateUser.editDBModel(input)
    //     await this.userDatabase.editUserById(teste)


    //     const output: EditUserByIdOutputDTO = {
    //         id: userDb.id,
    //         message: `O usuário ${input.name} foi editado com sucesso`,
    //     }
    //     return output
    // }
}