import reportIcon from "../../assets/images/File text 1.png";
import avatarImage from "../../assets/images/Avatar.png";

const DetailedReport = () => {
  const tableData = [
    {
      id: 1,
      customer: "Elizabeth Lee",
      company: "AvatarSystems",
      orderValue: "$359",
      orderDate: "10/07/2023",
      status: "New",
    },
    {
      id: 2,
      customer: "Carlos Garcia",
      company: "SnoozeShift",
      orderValue: "$747",
      orderDate: "24/07/2023",
      status: "New",
    },
    {
      id: 3,
      customer: "Elizabeth Bailey",
      company: "Prime Time Telecom",
      orderValue: "$564",
      orderDate: "08/08/2023",
      status: "In-progress",
    },
    {
      id: 4,
      customer: "Ryan Brown",
      company: "OmniTech Corporation",
      orderValue: "$541",
      orderDate: "31/08/2023",
      status: "In-progress",
    },
    {
      id: 5,
      customer: "Ryan Young",
      company: "DataStream Inc.",
      orderValue: "$769",
      orderDate: "01/05/2023",
      status: "Completed",
    },
    {
      id: 6,
      customer: "Hailey Adams",
      company: "FlowRush",
      orderValue: "$922",
      orderDate: "10/06/2023",
      status: "Completed",
    },
  ];

  return (
    <section className="detailed-report">
      <div className="section-header">
        <div className="section-title">
          <img src={reportIcon} alt="" className="section-icon" />
          <h2>Detailed report</h2>
        </div>
        <div className="header-buttons">
          <button className="btn-import">
            <span>Import</span>
          </button>
          <button className="btn-export">
            <span>Export</span>
          </button>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>CUSTOMER NAME</th>
              <th>COMPANY</th>
              <th>ORDER VALUE</th>
              <th>ORDER DATE</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div className="customer-info">
                    <img src={avatarImage} alt="" className="customer-avatar" />
                    <span>{row.customer}</span>
                  </div>
                </td>
                <td>{row.company}</td>
                <td>{row.orderValue}</td>
                <td>{row.orderDate}</td>
                <td>
                  <span className={`status-${row.status.toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
                <td>
                  <button className="btn-edit">✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <span>63 results</span>
        <div className="pagination-controls">
          <button className="prev">←</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <span>...</span>
          <button>10</button>
          <button>11</button>
          <button className="next">→</button>
        </div>
      </div>
    </section>
  );
};

export default DetailedReport;
