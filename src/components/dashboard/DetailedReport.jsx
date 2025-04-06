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
  const [showEditModal, setShowEditModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [importData, setImportData] = useState({
    customerName: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "New",
  });

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:3001/orders");
      if (!response.ok) {
        throw new Error("Không thể lấy dữ liệu");
      }
      const data = await response.json();
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

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleEdit = (order) => {
    setSelectedOrder(order);
    setShowEditModal(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/orders/${selectedOrder.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...selectedOrder,
            avatar: Object.keys(avatarMap).find(
              (key) => avatarMap[key] === selectedOrder.avatar
            ),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Cập nhật thất bại");
      }

      setShowEditModal(false);
      fetchOrders();
    } catch (err) {
      console.error("Lỗi khi cập nhật:", err);
    }
  };

  const handleImport = async () => {
    try {
      const response = await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...importData,
          avatar: "../../assets/images/Avatar (1).png",
          id: Date.now(),
        }),
      });

      if (!response.ok) {
        throw new Error("Thêm mới thất bại");
      }

      setShowImportModal(false);
      setImportData({
        customerName: "",
        company: "",
        orderValue: "",
        orderDate: "",
        status: "New",
      });
      fetchOrders();
    } catch (err) {
      console.error("Lỗi khi thêm mới:", err);
    }
  };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <div className="detailed-report">
      <div className="report-header">
        <h2>Detailed report</h2>
        <div className="report-actions">
          <button
            className="import-btn"
            onClick={() => setShowImportModal(true)}
          >
            Import
          </button>
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
                <button className="edit-btn" onClick={() => handleEdit(order)}>
                  <FiEdit2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Order</h3>
            <div className="form-group">
              <label>Customer Name:</label>
              <input
                type="text"
                value={selectedOrder.customerName}
                onChange={(e) =>
                  setSelectedOrder({
                    ...selectedOrder,
                    customerName: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Company:</label>
              <input
                type="text"
                value={selectedOrder.company}
                onChange={(e) =>
                  setSelectedOrder({
                    ...selectedOrder,
                    company: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Order Value:</label>
              <input
                type="text"
                value={selectedOrder.orderValue}
                onChange={(e) =>
                  setSelectedOrder({
                    ...selectedOrder,
                    orderValue: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <select
                value={selectedOrder.status}
                onChange={(e) =>
                  setSelectedOrder({ ...selectedOrder, status: e.target.value })
                }
              >
                <option value="New">New</option>
                <option value="In-progress">In-progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="modal-actions">
              <button onClick={() => setShowEditModal(false)}>Cancel</button>
              <button onClick={handleUpdate}>Save</button>
            </div>
          </div>
        </div>
      )}

      {showImportModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Import Order</h3>
            <div className="form-group">
              <label>Customer Name:</label>
              <input
                type="text"
                value={importData.customerName}
                onChange={(e) =>
                  setImportData({ ...importData, customerName: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Company:</label>
              <input
                type="text"
                value={importData.company}
                onChange={(e) =>
                  setImportData({ ...importData, company: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Order Value:</label>
              <input
                type="text"
                value={importData.orderValue}
                onChange={(e) =>
                  setImportData({ ...importData, orderValue: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Order Date:</label>
              <input
                type="text"
                value={importData.orderDate}
                onChange={(e) =>
                  setImportData({ ...importData, orderDate: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <select
                value={importData.status}
                onChange={(e) =>
                  setImportData({ ...importData, status: e.target.value })
                }
              >
                <option value="New">New</option>
                <option value="In-progress">In-progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="modal-actions">
              <button onClick={() => setShowImportModal(false)}>Cancel</button>
              <button onClick={handleImport}>Save</button>
            </div>
          </div>
        </div>
      )}

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
