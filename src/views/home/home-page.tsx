import React from "react";
import { Posts, SinglePost } from "../../services/requests/home-page";
import { Table, Tag, Button, Tooltip, Modal, Select, Input } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import "./home-page.css";

const HomePage: React.FC = () => {
  const [modal, setModal] = React.useState<boolean>(false);
  const [postId, setPostId] = React.useState<number>();
  const [userId, setUserId] = React.useState<number>();
  const [search, setSearch] = React.useState<string>("");
  const PostsData = Posts(`${userId && `userId=${userId}`}&like_title=${search}`);
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

  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const handleSelectChange = (userId: number) => setUserId(userId);
  const handleSearchChange = (value: string) => setSearch(value)

  return (
    <div className="home_page">
      <div className="home_page-select_box">
        <label className="home_page-select_box-search_label" htmlFor="search">Search</label>
        <Input.Search onSearch={handleSearchChange} id="search" className="home_page-select_box-search" placeholder="Search" />
        <label htmlFor="select" className="home_page-select_box-label">
          Select userId
        </label>
        <Select id="select" placeholder="User id" onChange={handleSelectChange}>
          {users.map((user, idx) => (
            <Select.Option value={user} key={idx}>{user}</Select.Option>
          ))}
        </Select>
      </div>
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
        centered
      >
        {SinglePostData.loading ? (
          <div>Loading...</div>
        ) : (
          SinglePostData?.data?.map((post: any) => (
            <ul className="home_page-list">
              <li className="home_page-list-item">
                <b>Id:</b>
                <p>{post?.id}</p>
              </li>
              <li className="home_page-list-item">
                <b>Email:</b>
                <p>{post?.email}</p>
              </li>
              <li className="home_page-list-item">
                <b>Name:</b>
                <p>{post?.name}</p>
              </li>
            </ul>
          ))
        )}
      </Modal>
    </div>
  );
};

export default HomePage;
