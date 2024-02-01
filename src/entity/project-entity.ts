import { EditProjectByIdInputDTO } from "../dtos";

export interface ProjectDB {
    id: string;
    name: string;
    type: string,
    github: string;
    link?: string
}

export class Project {
    constructor(
        private id: string,
        private name: string,
        private type: string,
        private github: string,
        private link?: string
    ) { }

    public getId(){
        return this.id
    }

    public createDBModel(): ProjectDB{
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            github: this.github,
            link: this.link
        }
    }

    public editDBModel(input: EditProjectByIdInputDTO): EditProjectByIdInputDTO{
        return {
            id: this.id,
            name: input.name || this.name,
            type: input.type || this.type,
            github: input.github || this.github,
            link: input.link || this.link,
        }
    }

}