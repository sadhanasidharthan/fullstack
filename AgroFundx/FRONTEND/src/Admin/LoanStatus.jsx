import React, { useState } from 'react';
import { Table, Button, Space, Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './LoanStatus.css'
import { Header } from 'rsuite';
import NavBar1 from '../NavBar1';


const LoanManagementTable = () => {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      customerEmail:'agri@gmail.com',
      customerNumber:'9555222263',
      totalAmount: 89600,
      customerPurpose:'Agricultural Loan'
    },
    {
      id: 2,
      customerName: 'Jane',
      customerEmail:'pkani@gmail.com',
      customerNumber:'90806652263',
      totalAmount: 7500,
      customerPurpose:'Agricultural Loan'
    },
    {
      id: 3,
      customerName: 'Deny',
      customerEmail:'deny@gmail.com',
      customerNumber:'8555524563',
      totalAmount: 5600,
      customerPurpose:'Agricultural Loan'
    },
    // Add more static data as needed
  ]);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Email',
      dataIndex: 'customerEmail',
      key: 'customerEmail',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'customerNumber',
      key: 'customerNumber',
    },
    {
      title: 'Loan Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
    }
    ,
    {
        title: 'Loan Purpose',
        dataIndex: 'customerPurpose',
        key: 'customerPurpose',
      }
      ,
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => handleApprove(record)} style={{backgroundColor:'green'}}>
            Approve
          </Button>
          <Button type="danger" onClick={() => handleReject(record)}>
            Reject
          </Button>
        </Space>
      ),
    },
  ];

  const handleApprove = (record) => {
    showConfirmationModal('approve', record);
  };

  const handleReject = (record) => {
    showConfirmationModal('reject', record);
  };

  const showConfirmationModal = (action, record) => {
    Modal.confirm({
      title: `Are you sure you want to ${action} the loan for Order ID ${record.id}?`,
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        // Handle the approval or rejection logic here
        message.success(`Loan for Order ID ${record.id} has been ${action}ed.`);
        updateDataSource(record);
      },
    });
  };

  const updateDataSource = (record) => {
    // Update the dataSource to reflect the approval or rejection
    const updatedDataSource = dataSource.filter((item) => item.id !== record.id);
    setDataSource(updatedDataSource);
  };

  const onSelectChange = (selectedKeys, selectedRows) => {
    setSelectedRowKeys(selectedKeys);
    setSelectedRows(selectedRows);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleBulkApprove = () => {
    // Handle bulk approval logic using selectedRows
    message.success(`${selectedRows.length} loans have been approved.`);
    clearSelection();
  };

  const handleBulkReject = () => {
    // Handle bulk rejection logic using selectedRows
    message.success(`${selectedRows.length} loans have been rejected.`);
    clearSelection();
  };

  const clearSelection = () => {
    setSelectedRowKeys([]);
    setSelectedRows([]);
  };

  return (
    <div className='App1'>
   <NavBar1/>
    
    <Header/>
   
    
    <div className="das">
    <div style={{
      backgroundImage: `url('https://img.freepik.com/free-vector/pink-watercolor-abstract-background_52683-73541.jpg?size=626&ext=jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh', // Adjust this based on your layout needs
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Table 
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        rowKey={(record) => record.id}
        rowSelection={rowSelection}
        style={{marginTop:'100px',width:'1000px',marginLeft:'80px'}}
       
        
      />
      
      
      {selectedRowKeys.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={handleBulkApprove} style={{backgroundColor:'green'}}>
            Bulk Approve
          </Button>
          <Button type="danger" onClick={handleBulkReject} style={{ marginLeft: 8}}>
            Bulk Reject
          </Button>
          
        </div>
      )}
    </div>
    </div>

  </div>
  );
};

export default LoanManagementTable;
