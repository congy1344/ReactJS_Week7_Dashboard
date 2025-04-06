import React, { useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
import avatar1 from "../../assets/images/Avatar (1).png";
import avatar2 from "../../assets/images/Avatar (2).png";
import avatar3 from "../../assets/images/Avatar (3).png";
import avatar4 from "../../assets/images/Avatar (4).png";
import avatar5 from "../../assets/images/Avatar (5).png";
import avatar6 from "../../assets/images/Avatar 313.png";

const avatarMap = {
  "../../assets/images/Avatar (1).png": avatar1,
  "../../assets/images/Avatar (2).png": avatar2,
  "../../assets/images/Avatar (3).png": avatar3,
  "../../assets/images/Avatar (4).png": avatar4,
  "../../assets/images/Avatar (5).png": avatar5,
  "../../assets/images/Avatar 313.png": avatar6,
};

const DetailedReport = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3001/orders");
        if (!response.ok) {
          throw new Error("Không thể lấy dữ liệu");
        }
        const data = await response.json();
        // Map the avatar paths to imported images
        const ordersWithAvatars = data.map((order) => ({
          ...order,
          avatar: avatarMap[order.avatar],
        }));
        setOrders(ordersWithAvatars);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <div className="detailed-report">
      <div className="report-header">
        <h2>Detailed report</h2>
        <div className="report-actions">
          <button className="import-btn">Import</button>
          <button className="export-btn">Export</button>
        </div>
      </div>

      <table className="table-container">
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
          {orders.map((order) => (
            <tr key={order.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td className="customer-info">
                <img
                  src={order.avatar}
                  alt={order.customerName}
                  className="customer-avatar"
                />
                <span>{order.customerName}</span>
              </td>
              <td>{order.company}</td>
              <td>{order.orderValue}</td>
              <td>{order.orderDate}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td>
                <button className="edit-btn">
                  <FiEdit2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button className="prev-btn">←</button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">4</button>
        <span>...</span>
        <button className="page-btn">10</button>
        <button className="page-btn">11</button>
        <button className="next-btn">→</button>
      </div>
    </div>
  );
};

export default DetailedReport;
