This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# KyungHee Date App

## Deploy

- with ...

<br />

## Project Architecture Diagram

<br />

## with Firebase !!

- [인증 (사용자 관리)](https://firebase.google.com/docs/auth/web/manage-users)
- [RealTime DB 쓰기 & 읽기](https://firebase.google.com/docs/database/web/read-and-write)
- [배포 과정](https://firebase.google.com/docs/web/setup#install-cli_deploy)

<br />

## 절대 경로 적용

'src' 디렉토리 하위에 있는 폴더를 기준으로 타고 들어감

- 장점
  - 코드가 깔끔해지고 경로를 알아보기 쉬워짐
  - 파일을 다른 디렉토리로 옮기더라도 import한 파일들의 경로가 깨지지 않음

```javascript
/* 상대 경로 */
import TextInput from '../../components/modules/TextInput';

/* 절대 경로 */
import TextInput from '@/components/modules/TextInput';
```

<br />

## eslint 및 prettier 적용

airbnb를 기준으로 몇 가지 커스텀 작업을 하였음.

설정법 및 Extension 세팅은 [Velopert Blog](https://velog.io/@velopert/eslint-and-prettier-in-react) 참고

> VSCode 사용시 다음 익스텐션 반드시 설치

- [ESLint](https://marketplace.visualstudio.com/itemdetails?itemName=dbaeumer.vscode-eslint)

- [Prettier](https://marketplace.visualstudio.com/itemdetails?itemName=esbenp.prettier-vscode)

  <br />

#### Contributors

- KyungHee Univ. 김한빈
- KyungHee Univ. 최원석
