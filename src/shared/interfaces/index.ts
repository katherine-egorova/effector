export interface IUserData {
    name: {
      first: string;
      last: string;
    };
    gender: string;
    email: string;
    login: {
      uuid: string;
    };
    [key: string]: unknown;
  }
  