export interface Discord {
  readonly id: string;

  readonly username: string;

  readonly discriminator: string;

  // Img Base Url: https://cdn.discordapp.com/avatars/*user_id*/*user_avatar*.png?size=*desired_size*
  readonly avatar: string;
}

export interface DiscordWithTokens extends Discord {
  access: string;
  refresh: string;
}
