import { UserObj } from '@/components/util/usertype';

export interface ListProps {
  userObj: UserObj | null;
  opponent?: Array<UserObj>;
  isLoading?: boolean;
  imgList?: Array<string>;
}

export interface DetailProps {
  isLoading: boolean;
  person: UserObj;
  sendInterest: () => void;
  enable: boolean;
  url?: Array<string>;
  status: number;
  changeStatus: (type: string) => void;
  isRead: boolean;
  success?: boolean;
  setSuccess?: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setStatus: React.Dispatch<React.SetStateAction<number>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  response: any;
}
