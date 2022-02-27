import React from "react";
import Posts from "../../services/requests/home-page";
import { Table, Tag, Button, Tooltip, Modal } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

const HomePage: React.FC = () => {
  const [modal, setModal] = React.useState(false);
  const {data, loading} = Posts();

  const columns = [
    {
      title: "Name",
      render: (_: object, post: any) => <div>{post.title}</div>,
    },
    {
      title: "UserId",
      render: (_: object, post: any) => (
        <Tag color="success">{post.userId}</Tag>
      ),
    },
    {
      title: "Description",
      render: (_: object, post: any) => <div>{post.body}</div>,
    },
    {
      title: "Action",
      render: (_: object, post: any) => (
        <Tooltip placement="bottom" title="Read">
          <Button onClick={() => setModal(true)} size="small" type="primary">
            <FileTextOutlined />
          </Button>
        </Tooltip>
      ),
    },
  ];

  return (
    <div className="home_page">
      <Table
        loading={loading}
        dataSource={data}
        columns={columns}
        rowKey="id"
      />
      <Modal title="Post info" onCancel={() => setModal(false)} visible={modal} onOk={() => setModal(false)}>
        Hello
      </Modal>
    </div>
  );
};

export default HomePage;
