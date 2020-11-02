import { UserObj } from '@/components/util/usertype';

export interface ChatObj {
  senderId: string;
  sender: string;
  senderNickname: string;
  receiver: string;
  createdAt: string;
  receiverOk: number;
  receiverSaw: number;
  receiverId: string;
  receiverNickname: string;
  enable?: boolean;
  uri?: string;
}

export interface EditProps {
  userObj?: UserObj | null;
  state?: UserObj | null;
  editable?: boolean;
}

export interface DetailProps {
  isLoading: boolean;
  receiveChat: any;
  enable: boolean;
  url?: any;
  status: number;
  changeStatus: (type: string) => void;
  history: any;
  accept: () => void;
  reject: () => void;
  opponent?: any;
  isContact?: boolean;
}
