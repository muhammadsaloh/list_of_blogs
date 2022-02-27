import React from "react";
import { request } from "../../api";
import { Table, Tag, Button, Tooltip, Modal } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

const HomePage: React.FC = () => {
  const [data, setData] = React.useState({ data: [], loading: false });
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setData({ ...data, loading: true });
      const response = await request.get("/posts");
      setData({ ...data, loading: false });
      setData({ ...data, data: response.data });
    })();
  }, []);

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
        loading={data?.loading}
        dataSource={data?.data}
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
