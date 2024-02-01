import { ProjectDB } from "../entity";
import { BaseDatabase } from "./baseDatabase";

export class ProjectDatabase extends BaseDatabase {

  public static TABLE_PROJECT = "project";

  public async createProject(
    newProjectDB: ProjectDB
  ): Promise<void> {
    await BaseDatabase
      .connection(ProjectDatabase.TABLE_PROJECT)
      .insert(newProjectDB)
  }

  // public getUserById = async (id: string) => {
  //   const userDB = await BaseDatabase.connection(UserDatabase.TABLE_USER).select().where({ id: id }).first();
  //   return userDB
  // }

  // public checkUserByEmail = async (email: string) => {
  //   const userDB = await BaseDatabase.connection(UserDatabase.TABLE_USER).select().where({ email: email });
  //   return userDB
  // }

  // public loginUser = async (input: LoginUserInputDTO) => {
  //   const login = {
  //     email: input.email,
  //     password: input.password
  //   }

  //   const userDB = await BaseDatabase.connection(UserDatabase.TABLE_USER).select().where(login).first();
  //   return userDB
  // }

  // public editUserById = async (input: UserDB) => {
  //   return await BaseDatabase
  //   .connection(UserDatabase.TABLE_USER)
  //   .update(input)
  //   .where({ id: input.id });
  // }
}