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
  history: any;
  isRead: boolean;
}
