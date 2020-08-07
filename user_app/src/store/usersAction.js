export const addUser = (user) => {
  // this is to get users from fire store
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .add({
        ...user,
        timestamp: getFirestore().FieldValue.serverTimestamp(),
      })
      .then((doc) => {});
  };
};

export const deleteUser = (user_id) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore().collection("users").doc(user_id).delete().then();
  };
};

export const editUser = (user_id, updated_Info) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore().collection("users").doc(user_id).set(updated_Info) .then(() =>{ console.log('Success') }) .catch(() =>{console.log('Error')});
  };
};

export const getAllUsers = () => {
  //this is to get users from firebase
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) => {
        let users = [];
        snapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id }); //this  is to  delete data
        });
        dispatch({
          type: "GET_USERS",
          payload: users,
        });
      });
    // (err) => {};
  };
};
