/**
 * @description path에 따른 ref 반환
 * @param path 저장 root, ex) khu-app/user/${userId}
 */

import { FirebaseRDB } from '@/config/firebase.config';

export const fbRef = path => FirebaseRDB.ref(path);
