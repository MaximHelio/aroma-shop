import BoardsList from "@/components/boards/boards-list"
import {SearchParams} from "@/types/commonTypes"

const Notice = (props: {searchParams: SearchParams}) => {
  const searchParams = {
    rowsPerPage: Number(props.searchParams.rowsPerPage) || 10,
    page: Number(props.searchParams.page) || 0,
    orderColumn: props.searchParams.orderColumn || "board_pk",
    orderDirection: props.searchParams.orderDirection || "desc",
    query: props.searchParams.query || ""
  } as SearchParams
  return (
    <BoardsList
      total_rows={100}
      searchParams={searchParams}
    />
  )
}

export default Notice
