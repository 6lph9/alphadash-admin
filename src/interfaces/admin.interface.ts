import { RolesObject } from './roles-object.interface'
import { Discord } from './discord.interface'
export interface Admin {
  readonly id: string;
  readonly roles: RolesObject[];

  readonly discord: Discord;
  readonly email: string;

  readonly updatedAt: string;
  readonly createdAt: string;
}
