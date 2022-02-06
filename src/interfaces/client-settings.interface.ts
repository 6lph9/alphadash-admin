/* eslint-disable camelcase */

export interface GeneralSettings {
  readonly support_email: string | null;
  readonly website: string | null;
  readonly twitter: string | null;
}

export interface BrandingSettings {
  readonly logo: string | null;
  readonly background: string | null;
  readonly color: string | null;
}

export interface PaymentSettings {
  readonly require_login: boolean;
  readonly require_billing_address: boolean;
  readonly require_phone: boolean;
}

export interface DownloadSettings {
  readonly download_url: string | null;
  readonly active: boolean;
}

export interface DiscordSettings {
  webhook_url: string | null;
}

export interface ClientSettings {
  readonly general: GeneralSettings;
  readonly branding: BrandingSettings;
  readonly payment: PaymentSettings;
  readonly download: DownloadSettings;
  readonly discord: DiscordSettings;
}
