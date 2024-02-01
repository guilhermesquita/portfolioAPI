import { Request, Response } from 'express'
import { ProjectBusiness } from '../business'
import { BaseError } from '../errors'
import { CreateProjectUserSchema } from '../dtos'
import { ZodError } from 'zod'

export class ProjectController {
    constructor(
        private projectBusiness: ProjectBusiness
    ) { }

    // public loginUser = async (req: Request, res: Response) => {
    //     try {
    //         const input = {
    //             email: req.body.email as string,
    //             password: req.body.password as string
    //         }

    //         const output = await this.userBusiness.loginUser(input)

    //         res.status(200).send(output)

    //     } catch (error) {
    //         if (error instanceof BaseError) {
    //             res.status(error.statusCode).send(error.message)
    //         } else {
    //             res.status(500).send('unexpected error')
    //         }
    //     }
    // }

    // public getUserById = async (req: Request, res: Response) => {
    //     try {
    //         const input = GetUserByIdSchema.parse({
    //             id: req.params.id,
    //             token: req.headers.authorization
    //         })

    //         const output = await this.userBusiness.getUserById(input)

    //         res.status(200).send(output)

    //     } catch (error) {
    //         if (error instanceof BaseError) {
    //             res.status(error.statusCode).send(error.message)
    //         } else {
    //             res.status(500).send('unexpected error')
    //         }
    //     }
    // }

    public createProject = async (req: Request, res: Response) => {
        try {
            const input = CreateProjectUserSchema.parse({
                name: req.body.name,
                type: req.body.type,
                github: req.body.github,
                link: req.body.link
            })

            const output = await this.projectBusiness.createProject(input)

            res.status(201).send(output)
        } catch (error) {
            console.log(error)

            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    // public editUser = async (req: Request, res: Response) => {
    //     try {
    //         const input = EditUserByIdSchema.parse({
    //             id: req.params.id,
    //             name: req.body.name,
    //             email: req.body.email,
    //             password: req.body.password,
    //             token: req.headers.authorization
    //         })

    //         const output = await this.userBusiness.editUserById(input)

    //         res.status(201).send(output)
    //     } catch (error) {
    //         if (error instanceof ZodError) {
    //             res.status(400).send(error.issues)
    //         } else if (error instanceof BaseError) {
    //             res.status(error.statusCode).send(error.message)
    //         } else {
    //             res.status(500).send("Erro inesperado")
    //         }
    //     }
    // }
} 
