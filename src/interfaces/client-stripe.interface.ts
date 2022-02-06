/* eslint-disable camelcase */
export interface ClientStripe {
  readonly publishable_key: string;
  readonly secret_key?: string;
  readonly refresh_key?: string;
  readonly account?: string;
}

export interface AdminClientStripe extends ClientStripe {
  readonly secret_key: string;
  readonly refresh_key: string;
  readonly account: string;
}
