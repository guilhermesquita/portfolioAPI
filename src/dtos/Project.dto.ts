import { z } from "zod";
import { EnumTypeProject } from "../entity/enums/typeProject";

//CREATE
export interface CreateProjectInputDTO {
    name: string;
    type: string
    github: string;
    link?: string 
}

export interface CreateProjectOutputDTO {
    message: string;
    id: string;
    // token: string
}

export const CreateProjectUserSchema = z.object({
    name: z.string().min(2),
    type: z.string().min(2),
    github: z.string(),
    link: z.string().min(1).optional()
})


//EDIT
export interface EditProjectByIdInputDTO {
    id: string;
    name: string;
    type: EnumTypeProject
    github: string;
    link?: string;
}

export interface EditProjectByIdOutputDTO {
    id: string;
    message: string;
}

export const EditProjectByIdSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(2).optional(),
    type: z.string().min(2).optional(),
    github: z.string().optional(),
    link: z.string().min(1).optional()
  }).transform(data => data as EditProjectByIdInputDTO)