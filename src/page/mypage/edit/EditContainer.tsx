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
  const [isCollegeEditing, setCollegeEditing] = useState<
    boolean
  >(false);
  const [isLocationEditing, setLocationEditing] = useState<
    boolean
  >(false);

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

  const saveEditedInfo = (editTargetName: string) => {
    FirebaseRDB.ref(`users/${userObj?.uid}`)
      .update({
        [editTargetName]: state[editTargetName],
      })
      .catch(err => console.error(err))
      .finally((): void => setEditable(false));
  };

  const onChangeSelector = (
    editTargetName: string,
    item: any,
  ) => {
    setState({
      ...state,
      [editTargetName]: item.value,
    });
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

  const onClickEdit = (editTargetName: string) => {
    if (editTargetName === 'college') {
      setCollegeEditing(p => !p);
    } else if (editTargetName === 'location') {
      setLocationEditing(p => !p);
    }
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

    return () => clearInterval(interval);
  }, []);

  return (
    <EditPresenter
      state={state}
      url={url}
      editable={editable}
      isCollegeEditing={isCollegeEditing}
      isLocationEditing={isLocationEditing}
      editMyInfo={editMyInfo}
      saveEditedInfo={saveEditedInfo}
      cancelEdit={cancelEdit}
      onClickEdit={onClickEdit}
      makeEdit={makeEdit}
      onChange={onChange}
      onChangeSelector={onChangeSelector}
    />
  );
};

export default EditContainer;
