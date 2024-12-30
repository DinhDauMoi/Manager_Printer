"use client";
import useSWR from "swr";
import "bootstrap/dist/css/bootstrap.min.css";
import { supabase } from "../bases/printer";

const fetcher = async (key: string) => {
  const { data, error } = await supabase.from(key).select("*");
  if (error) throw new Error(error.message);
  return data;
};

const Trang_chu = () => {
  // Truy vấn bảng "Printer" bằng useSWR
  //   const { data, error, isLoading } = useSWR("Printer", fetcher);

  //   if (isLoading) return <div>Đang tải dữ liệu...</div>;
  //   if (error) return <div>Lỗi: {error.message}</div>;
  const {
    data: printers,
    error: printerError,
    isLoading: isPrinterLoading,
  } = useSWR("Printer", fetcher);
  const {
    data: inks,
    error: inkError,
    isLoading: isInkLoading,
  } = useSWR("PrintingInk", fetcher);

  if (isPrinterLoading || isInkLoading) return <div>Đang tải dữ liệu...</div>;
  if (printerError || inkError)
    return <div>Lỗi: {printerError?.message || inkError?.message}</div>;

  const today = new Date();
  const formattedDate = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;
  return (
    <>
      <div className="container mt-4">
        <h3>Danh sách máy in sửa hôm nay</h3>
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

        {/* <h3>Danh sách mực in sửa hôm nay</h3>
        <table
          className="table"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Mực in</th>
              <th scope="col">Kho</th>
              <th scope="col">Ngày bơm mực</th>
              <th scope="col">Drum</th>
              <th scope="col">Chú thích</th>
            </tr>
          </thead>
          <tbody>
            {inks && inks.length > 0 ? (
              inks.map((printing: any) => (
                <tr key={printing.id}>
                  <th scope="row">{printing.id}</th>
                  <td>{printing.So_muc}</td>
                  <td>{printing.Kho}</td>
                  <td>{printing.Bom_muc}</td>
                  <td>{printing.Drum}</td>
                  <td>{printing.Note}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td scope="row" colSpan={3}>
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default Trang_chu;
