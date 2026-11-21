import { Pagination as AntPagination } from "antd";

/** Round pagination ‹ 1 2 3 › — navy active page. */
export default function Pagination(props) {
  return <AntPagination showSizeChanger={false} {...props} />;
}
