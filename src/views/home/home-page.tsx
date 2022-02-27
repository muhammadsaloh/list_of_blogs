import React from "react";
import { Posts, SinglePost } from "../../services/requests/home-page";
import { Table, Tag, Button, Tooltip, Modal } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import "./home-page.css";

const HomePage: React.FC = () => {
  const [modal, setModal] = React.useState<boolean>(false);
  const [postId, setPostId] = React.useState<number>();
  const PostsData = Posts();
  const SinglePostData = SinglePost(postId);

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
          <Button
            onClick={() => {
              setModal(true);
              setPostId(post.userId);
            }}
            size="small"
            type="primary"
          >
            <FileTextOutlined />
          </Button>
        </Tooltip>
      ),
    },
  ];

  return (
    <div className="home_page">
      <Table
        loading={PostsData.loading}
        dataSource={PostsData.data}
        columns={columns}
        rowKey="id"
      />
      <Modal
        title="Post info"
        onCancel={() => setModal(false)}
        visible={modal}
        onOk={() => setModal(false)}
      >
        {SinglePostData.loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="home_page-list">
            <li className="home_page-list-item">
              <b>Card Id:</b>
              <p>{SinglePostData.data?.id}</p>
            </li>
            <li className="home_page-list-item">
              <b>User Id:</b>
              <p>{SinglePostData.data?.userId}</p>
            </li>
            <li className="home_page-list-item">
              <b>Title:</b>
              <p>{SinglePostData.data?.title}</p>
            </li>
          </ul>
        )}
      </Modal>
    </div>
  );
};

export default HomePage;
