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
