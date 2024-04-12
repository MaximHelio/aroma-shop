"use client"
import {useRouter} from "next/navigation"
import {Paper, TextField, Button} from "@mui/material"

const Admin = () => {
  const router = useRouter()
  return (
    <div className="p-4 w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">티아라 관리자 페이지</h1>
      <Paper className="mt-8 p-8">
        <TextField
          className="!mt-8"
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
        <div className="mt-8 flex justify-end">
          <Button
            className="!bg-[#1976d2] hover:!bg-[#1565c0]"
            variant="contained"
            onClick={() => router.push("/admin/brands")}
          >확인</Button>
        </div>
      </Paper>
    </div>
  )
}

export default Admin
