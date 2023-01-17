export interface IReduxUserPayload {
  user: {
    user: IUser;
    access_token: string;
  };
}

export interface IUser {
  nickname: string;
  name: string;
  picture: string;
  updated_at: Date;
  email: string;
  email_verified: boolean;
  sub: string;
}
