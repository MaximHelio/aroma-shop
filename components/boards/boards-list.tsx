"use client"
import {usePathname, useRouter} from "next/navigation"
import Link from "next/link"
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel} from "@mui/material"
import SportsScoreIcon from "@mui/icons-material/SportsScore"
import ProductsSearch from "@/components/products/products-search"
import {SearchParams} from "@/types/commonTypes"

interface HeadCell {
  id: string
  label: string
  sort: boolean
}

export const EnhancedTabledHead = ({
  searchParams,
  headCells
}: {
  searchParams: SearchParams
  headCells: HeadCell[]
}) => {
  const router = useRouter()
  const orderDirection = searchParams.orderDirection === "asc" ? "asc" : "desc"
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>
            {headCell.sort ? (
              <TableSortLabel
                active={searchParams.orderColumn === headCell.id}
                direction={searchParams.orderColumn === headCell.id ? orderDirection : "asc"}
                onClick={() => {
                  router.push("?" + new URLSearchParams({
                    ...searchParams,
                    orderColumn: headCell.id,
                    orderDirection: headCell.id && orderDirection === "asc" ? "desc" : "asc"
                  }))
                }}
              >{headCell.label}</TableSortLabel>
            ) : (
              <span>{headCell.label}</span>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export const EnhancedTablePagination = ({
  total_rows,
  searchParams
}: {
  total_rows: number
  searchParams: SearchParams
}) => {
  const router = useRouter()
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={total_rows}
      rowsPerPage={searchParams.rowsPerPage}
      page={searchParams.page}
      onPageChange={(_event, page) => {
        router.push("?" + new URLSearchParams({
          ...searchParams,
          page: String(page)
        }))
      }}
      onRowsPerPageChange={(event) => {
        router.push("?" + new URLSearchParams({
          ...searchParams,
          page: "0",
          rowsPerPage: event.target.value
        }))
      }}
    />
  )
}


const BoardsList = ({
  total_rows,
  searchParams
}: {
  total_rows: number
  searchParams: SearchParams
}) => {
  const pathname = usePathname()
  return (
    <div className="mx-4">
      <Paper className="hidden md:block">
        <TableContainer>
          <Table>
            <EnhancedTabledHead
              searchParams={searchParams}
              headCells={[
                {id: "board_pk", label: "No", sort: true},
                {id: "title", label: "제목", sort: true},
                {id: "created_at", label: "작성시간", sort: true},
                {id: "visited_count", label: "조회수", sort: true}
              ]}
            />
            <TableBody>
              <TableRow className="bg-gray-100">
                <TableCell><SportsScoreIcon /></TableCell>
                <TableCell>
                  <Link href={`${pathname}/detail/1`}>홈페이지 오픈 기념 후기 작성 이벤트</Link>
                </TableCell>
                <TableCell>2023-11-23</TableCell>
                <TableCell>500</TableCell>
              </TableRow>
              <TableRow className="bg-gray-100">
                <TableCell><SportsScoreIcon /></TableCell>
                <TableCell>PC 버전 카카오톡 친구 추가 방법.</TableCell>
                <TableCell>2023-11-23</TableCell>
                <TableCell>400</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>홈페이지 바탕화면 아이콘으로 빼내기 (ver. 아이폰)</TableCell>
                <TableCell>2023-11-23</TableCell>
                <TableCell>300</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>안녕하세요. 블링클라우드 입니다.</TableCell>
                <TableCell>2023-11-23</TableCell>
                <TableCell>200</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="hidden">
            <EnhancedTablePagination total_rows={total_rows} searchParams={searchParams} />
          </div>
        </TableContainer>
      </Paper>
      <Paper className="md:hidden">
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow className="bg-gray-100">
                <TableCell>
                  <div>
                    <Link href={`${pathname}/detail/1`}><SportsScoreIcon />홈페이지 오픈 기념 후기 작성 이벤트</Link>
                  </div>
                  <small className="text-xs text-gray-400">2023-11-23 조회수: 500</small>
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-100">
                <TableCell>
                  <div><SportsScoreIcon />PC 버전 카카오톡 친구 추가 방법.</div>
                  <small className="text-xs text-gray-400">2023-11-23 조회수: 400</small>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div>홈페이지 바탕화면 아이콘으로 빼내기 (ver. 아이폰)</div>
                  <small className="text-xs text-gray-400">2023-11-23 조회수: 300</small>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div>안녕하세요. 블링클라우드 입니다.</div>
                  <small className="text-xs text-gray-400">2023-11-23 조회수: 200</small>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div className="mt-4">
        <ProductsSearch />
      </div>
    </div>
  )
}

export default BoardsList
