import React, { useState } from 'react';
import EditPresenter from './EditPresenter';
import { UserObj } from '@/components/util/usertype';
import { FirebaseRDB } from '@/config/firebase.config';
import { EditProps } from '../type';

const EditContainer = ({
  userObj,
  ...props
}: EditProps): JSX.Element => {
  const [state, setState] = useState<any>(userObj);
  const [prevState, setPrev] = useState(userObj);

  const [editable, setEditable] = useState<boolean>(false);

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

  return (
    <EditPresenter
      state={state}
      editable={editable}
      editMyInfo={editMyInfo}
      cancelEdit={cancelEdit}
      makeEdit={makeEdit}
      onChange={onChange}
    />
  );
};

export default EditContainer;
