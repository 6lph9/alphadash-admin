import { ClientSettings } from './client-settings.interface'
import { AdminClientStripe, ClientStripe } from './client-stripe.interface'

export interface Client {
  readonly id: string;
  readonly name: string;
  readonly domain: string;
  readonly guild: string;

  readonly stripe?: ClientStripe;

  readonly settings: ClientSettings;

  readonly active: boolean;
  readonly acitve: boolean;
  readonly new: boolean;
  readonly updatedAt?: string;
  readonly createdAt?: string;
}

export interface AdminClient extends Client {
  readonly stripe: AdminClientStripe
}
