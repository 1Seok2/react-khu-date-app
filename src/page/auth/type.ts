/**
 * @description auth에 관한 type은 여기에 ...
 */

export interface UserAuthObj {
  nickname: string;
}

export interface AuthPresenterProps {
  SNSLogin?: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: boolean;
  setError?: React.Dispatch<React.SetStateAction<boolean>>;
  show?: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}
