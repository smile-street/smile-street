import React, { useState } from "react";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";


import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
  DialogTitle,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import PageHeading from "../PageHeading/PageHeading";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#53bd98",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#449f80",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#449f80",
    },

    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#449f80",
    },
    margin: 8,
  },
  paper: {
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "xs",
  },
  form: {
    width: "100%",
  },
  button: {
    backgroundColor: "#53bd98",
    color: "white",
    "&:hover": {
      background: "#449f80",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
}));















const VolEditProfile = () => {
  const usersData = [
    { id: 1, firstName: "Viran", lastName: "Gohil" },
    { id: 2, firstName: "BBB", lastName: "kakikukeko" },
    { id: 3, firstName: "CCC", lastName: "sasisuseso" }
  ];

  // usersの状態
  const [users, setUsers] = useState(usersData);

  // 更新関数を持つ追加メソッド
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  // 更新関数を持つ削除メソッド
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // 編集状態か判断するための状態
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  // 編集中の現在のユーザの状態（編集中ユーザーを知るため）
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // 編集モードをONにスイッチして現在のユーザー情報をセットする関数
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  // 編集後に更新投稿する関数
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  const classes = useStyles();

  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
        <PageHeading heading="Registration" />
        
      
       
          {editing ? (
            <div>
              <h2>Eidt User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        
        
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        
        

          </Container>
      </Paper>
    </Container>


  );
};

export default VolEditProfile;
