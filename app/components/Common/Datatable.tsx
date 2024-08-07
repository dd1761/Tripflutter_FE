import style from "./datatable.module.css";

const Datatable: React.FC = () => {
  return (
    <div className={style.table_container}>
      <table className={style.styled_table}>
        <thead>
          <tr>
            <th>구분</th>
            <th>예약 이름</th>
            <th>예약자명</th>
            <th>예약일</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>호텔</td>
            <td>TOYOKO INN HOTEL SHINJUKU...</td>
            <td>김여행</td>
            <td>2024.07.14</td>
            <td id={style.link_td}>예약 자세히 보기 &gt;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
