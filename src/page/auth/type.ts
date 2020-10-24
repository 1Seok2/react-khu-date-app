/**
 * @description auth에 관한 type은 여기에 ...
 */

export interface UserAuthObj {
  email: string;
  password: string;
  name?: string;
}

export interface AuthPresenterProps {
  inputList: Record<string, string>[];
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
  onSubmit: (e: any) => Promise<void>;
  userInfo?: UserAuthObj;
  setInfo?: any;
  error: string;
}
