import React from "react";
import { Input, Select } from "antd";
import AntdTable from "../AntdTable";

const Courses = () => {
  const data = [
    {
      id: 1,
      title: "Course 1",
      status: "Active",
      myStatus: "Enrolled",
      totalLessons: 10,
    },
    {
      id: 2,
      title: "Course 2",
      status: "Inactive",
      myStatus: "Not Enrolled",
      totalLessons: 8,
    },
    // Add more sample data here...
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "title",
    },
    {
      title: "Course ID",
      dataIndex: "id",
    },
    {
      title: "Activity",
      dataIndex: "status",
    },
    {
      title: "My Status",
      dataIndex: "myStatus",
    },
    {
      title: "Total Lessons",
      dataIndex: "totalLessons",
    },
  ];

  const handleFilterChange = (value) => {
    // Handle filter change logic here
  };

  const handleInputChange = (e) => {
    // Handle input change logic here
  };

  return (
    <div className="w-100">
      <h5 className="text-center">All Courses</h5>
      <div
        className="mx-auto d-flex align-items-center justify-content-end p-2"
        style={{ minHeight: "2rem", maxWidth: "80%" }}
      >
        <div className="d-flex justify-content-end" style={{ width: "50%" }}>
          <div
            className="d-flex align-items-center"
            style={{ minWidth: "5rem" }}
          >
            <small>Filter By: </small>
            <Select className="ms-2" onChange={handleFilterChange}>
              <Select.Option value="title">Name</Select.Option>
              <Select.Option value="id">Course ID</Select.Option>
            </Select>
          </div>
          <div
            className="d-flex align-items-center ms-2"
            style={{ minWidth: "10rem" }}
          >
            <Input onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <AntdTable columns={columns} data={data} width="80%" />
    </div>
  );
};

export default Courses;