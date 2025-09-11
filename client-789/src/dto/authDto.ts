export interface registerDto {
  username: string;
  password: string;
  withdrawPassword: string;
  phone: string;
  captchaText?: string;
  captchaKey?: string;
  email: string;
  gate: string;
  referral: string;
}

export interface loginDto {
  username: string;
  password: string;
  captchaText: string;
  captchaKey: string;
  gate: string;
  referral: string;
}
