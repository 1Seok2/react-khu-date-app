/**
 * @description auth에 관한 type은 여기에 ...
 */

export interface UserAuthObj {
  nickname: string;
  id?: any;
  password?: any;
}

export interface AuthPresenterProps {
  SNSLogin?: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  show?: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo?: UserAuthObj;
  onChange?: any;
  emailLinkAuth?: any;
  newAccount?: boolean;
  setNewAccount?: any;
  sendEmail?: boolean;
  setSendEmail?: any;
  submitError?: boolean;
  setSubmitError?: any;
  onKeyUp?: (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => void;
  isLoading?: boolean;
}
