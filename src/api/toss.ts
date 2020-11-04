/**
 * @description toss 송금 api
 * @param money 송금 할 돈 입력받음
 */

const Toss_API = (money: number): void => {
  const request = new XMLHttpRequest();

  request.open(
    'POST',
    'https://toss.im/transfer-web/linkgen-api/link',
  );

  request.setRequestHeader(
    'Content-Type',
    'application/json',
  );

  /**
   * 성공시 반환받는 항목들
   */
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      // console.log('Status:', this.status);
      // console.log('Headers:', this.getAllResponseHeaders());
      // console.log('Body:', JSON.parse(this.responseText));
      const response = JSON.parse(this.responseText);

      if (window.confirm('toss 앱이 있나요 ?')) {
        window.open(response.success.scheme);
      } else {
        window.open(response.success.link);
      }
    }
  };

  const body = {
    apiKey: process.env.REACT_APP_TOSS_API,
    bankName: '국민',
    bankAccountNo: '93350200674488',
    amount: money,
    message: '토스입금버튼',
  };

  request.send(JSON.stringify(body));
};

export default Toss_API;
