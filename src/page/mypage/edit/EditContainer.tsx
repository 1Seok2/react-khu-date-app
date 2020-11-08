import React, { useState, useEffect } from 'react';
import EditPresenter from './EditPresenter';
import { UserObj } from '@/components/util/usertype';
import {
  FirebaseRDB,
  FirebaseStorage,
} from '@/config/firebase.config';
import { EditProps } from '../type';

const EditContainer = ({
  userObj,
  ...props
}: EditProps): JSX.Element => {
  const [state, setState] = useState<any>(userObj);
  const [prevState, setPrev] = useState(userObj);

  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const [editable, setEditable] = useState<boolean>(false);
  const [url, setUrl] = useState<any>();

  /**
   * 수정 활성화 버튼 클릭시
   */
  const makeEdit = () => setEditable(true);

  const cancelEdit = () => {
    setState(prevState);
    setEditable(false);
  };

  /**
   * 수정한 정보 저장
   */
  const editMyInfo = () => {
    FirebaseRDB.ref(`users/${userObj?.uid}`)
      .update({
        ...state,
      })
      .catch(err => console.error(err))
      .finally((): void => setEditable(false));
  };

  const onChange = (e: any) => {
    const {
      target: { name, value },
    } = e;

    setState({
      ...state,
      [name]: value,
    });
  };

  const getImage = async () => {
    let uris: any = [];
    console.log(userObj);
    const imgCnt = userObj?.img || 0;
    for (let i = 0; i < imgCnt; i++) {
      const uri = await FirebaseStorage.ref(
        `hands/${userObj?.email}/${i}.jpg`,
      ).getDownloadURL();

      uris = [...uris, uri];
    }
    return uris;
  };

  useEffect(() => {
    // let uri_list: Array<string> = [];
    let interval: any;
    let ok = false;

    getImage().then(uris => {
      setUrl(uris);
      ok = true;
    });
    // .then(() => {
    //   setLoading(false);
    //   // interval = setInterval(() => {
    //   //   setStatus(prev => (prev + 1) % userObj.img);
    //   // }, 2500);
    // });

    return () => clearInterval(interval);
  }, []);

  return (
    <EditPresenter
      state={state}
      url={url}
      editable={editable}
      editMyInfo={editMyInfo}
      cancelEdit={cancelEdit}
      makeEdit={makeEdit}
      onChange={onChange}
    />
  );
};

export default EditContainer;
