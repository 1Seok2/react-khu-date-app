/**
 * @description realtime db에 정보 저장하는 함수
 * @param path 저장 root, ex) khu-app/user/${userId}
 * @param form path에 저장할 정보(객체)
 */

import { FirebaseRDB } from '@/config/firebase.config';

export const fbsetWithPathAndFormApi = (path, form) =>
  FirebaseRDB.ref(path).set({
    ...form,
  });
