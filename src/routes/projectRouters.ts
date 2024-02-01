import express from 'express'
import { ProjectController } from '../controller';
import { ProjectBusiness } from '../business';
import { ProjectDatabase } from '../database/project-database';
import { IdGenerator, TokenManager } from '../services';

export const projectRouter = express.Router();

//Injenção de dependências
const projectBusiness = new ProjectBusiness(
    new ProjectDatabase(),
    new IdGenerator()
)
const projectController = new ProjectController(
    projectBusiness
);

//Implementação das rotas
// userRouter.post('/', userController.createUser)
projectRouter.post('/', projectController.createProject)