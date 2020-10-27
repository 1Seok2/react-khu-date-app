import { UserObj } from '@/components/util/usertype';

export interface ChatObj {
  senderId: string;
  sender: string;
  receiver: string;
  createdAt: string;
  receiverOk: number;
  receiverSaw: number;
  enable?: boolean;
}

export interface EditProps {
  userObj?: UserObj | null;
  state?: UserObj | null;
  editable?: boolean;
}
