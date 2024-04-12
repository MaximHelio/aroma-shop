"use client"
import {useState} from "react"
import {Button, Box, Tabs, Tab, TextField} from "@mui/material"
import {Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material"

const Users = () => {
  const [open, setOpen] = useState(false)
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <div className="mr-4 text-base cursor-pointer">
      <span onClick={() => setOpen(true)}>로그인</span>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <Box sx={{borderBottom: 1, borderColor: "divider"}}>
            <Tabs value={tabIndex} onChange={(_, index) => setTabIndex(index)}>
              <Tab label="로그인" />
              <Tab label="회원가입" />
              <Tab label="비밀번호 변경" />
            </Tabs>
          </Box>
        </DialogTitle>
        <DialogContent>
          {tabIndex === 0 ? (
            <UsersLogin />
          ) : tabIndex === 1 ? (
            <UsersSingIn />
          ): (
            <UsersPassword />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>취소</Button>
          <Button
            className="!bg-[#1976d2] hover:!bg-[#1565c0]"
            onClick={() => setOpen(false)}
            variant="contained"
          >확인</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const UsersLogin = () => {
  return (
    <div className="p-4">
      <TextField
        autoFocus
        label="아이디"
        fullWidth
        variant="standard"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        className="!mt-8"
        label="패스워드"
        type="password"
        fullWidth
        variant="standard"
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  )
}

const UsersSingIn = () => {
  return (
    <div className="p-4">
      <TextField
        autoFocus
        label="아이디"
        fullWidth
        variant="standard"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        className="!mt-4"
        label="닉네임"
        fullWidth
        variant="standard"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        className="!mt-4"
        label="패스워드"
        type="password"
        fullWidth
        variant="standard"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        className="!mt-4"
        label="패스워드 확인"
        type="password"
        fullWidth
        variant="standard"
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  )
}

const UsersPassword = () => {
  return (
    <div className="p-4">
      <TextField
        autoFocus
        label="아이디"
        fullWidth
        variant="standard"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        className="!mt-4"
        label="이전 패스워드"
        type="password"
        fullWidth
        variant="standard"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        className="!mt-4"
        label="새로운 패스워드"
        type="password"
        fullWidth
        variant="standard"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        className="!mt-4"
        label="새로운 패스워드 확인"
        type="password"
        fullWidth
        variant="standard"
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  )
}

export default Users
