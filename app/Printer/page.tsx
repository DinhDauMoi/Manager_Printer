"use client";
import useSWR from "swr";
import "bootstrap/dist/css/bootstrap.min.css";
import { supabase } from "@/bases/printer";

const fetcher = async (key: string) => {
  const { data, error } = await supabase.from(key).select("*");
  if (error) throw new Error(error.message);
  return data;
};

const Printer = () => {
  // Truy vấn bảng "Printer" bằng useSWR
  //   const { data, error, isLoading } = useSWR("Printer", fetcher);

  //   if (isLoading) return <div>Đang tải dữ liệu...</div>;
  //   if (error) return <div>Lỗi: {error.message}</div>;
  const {
    data: printers,
    error: printerError,
    isLoading: isPrinterLoading,
  } = useSWR("Printer", fetcher);

  if (isPrinterLoading) return <div>Đang tải dữ liệu...</div>;
  if (printerError) return <div>Lỗi: {printerError?.message}</div>;

//   const today = new Date();
//   const formattedDate = `${today.getDate()}/${
//     today.getMonth() + 1
//   }/${today.getFullYear()}`;
  return (
    <>
      <div className="container">
        <h3>Danh sách máy in</h3>
        <table
          className="table"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên máy in</th>
              <th scope="col">Kho</th>
              <th scope="col">Bao lụa</th>
              <th scope="col">Rulo</th>
              <th scope="col">Ngày báo kẹt giấy</th>
              <th scope="col">Chú thích</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {printers && printers.length > 0 ? (
              printers.map((printer: any) => (
                <tr key={printer.id}>
                  <th scope="row">{printer.id}</th>
                  <td>{printer.Kho}</td>
                  <td>{printer.So_may}</td>
                  <td>{printer.Bao_lua}</td>
                  <td>{printer.Rulo}</td>
                  <td>{printer.Date_test}</td>
                  <td>{printer.Note}</td>
                  <td>
                    <button className="btn btn-success">
                      <a>Chi tiết</a>
                    </button>
                  </td>
                  {/* <td>{new Date(printer.created_at).toLocaleString()}</td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td scope="col" colSpan={3}>
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Printer;
