/**
 * @description auth에 관한 type은 여기에 ...
 */

export interface UserAuthObj {
  nickname: string;
}

export interface AuthPresenterProps {
  inputList: Record<string, string>[];
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
  onSubmit?: (e: any) => Promise<void>;
  userInfo?: UserAuthObj;
  setInfo?: any;
  error: string;
  SNSLogin?: (e: React.FormEvent<HTMLFormElement>) => void;
}
