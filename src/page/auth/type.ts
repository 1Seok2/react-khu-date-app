/**
 * @description auth에 관한 type은 여기에 ...
 */

export interface UserSignUpObj {
  email: string;
  password: string;
  nickname: string;
  name: string;
  gender: string;
  age: string;
  introduce: string;
}

export interface UserSignInObj {
  email: string;
  password: string;
}

export interface AuthPresenterProps {
  inputList: Record<string, string>[];
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
  onSubmit: (e: any) => Promise<void>;
  userInfo?: UserSignUpObj;
  setInfo?: any;
}
