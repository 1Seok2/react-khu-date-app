/**
 * @description auth에 관한 type은 여기에 ...
 */

export interface UserSignUpObj {
  email: string;
  password: string;
  nickname: string;
  name: string;
  age: string;
  introduce: string;
}

export interface UserSignInObj {
  email: string;
  password: string;
}
