export interface ICredentials {
  name?: string;
  phone?: string;
  birthday?: string;
  password?: string;
  email?: string;
  skype?: string;
}

export interface IAuth {
  message: string;
  dataUser: {
    name: string,
    email: string,
    token: string,
    birthday: string,
    phone: string,
    avatarURL: string,
    skype: string,
  };
}
