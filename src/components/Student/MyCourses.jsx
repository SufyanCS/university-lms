import React, { useState } from "react";
import { Button, Input, Select, Table, Space } from "antd";

const MyCourses = () => {
  const [filterBy, setFilterBy] = useState("title");
  const [filterCondition, setFilterCondition] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  const allCourses = [
    { id: 1, title: "Course 1", department: "Department A" },
    { id: 2, title: "Course 2", department: "Department B" },
    { id: 3, title: "Course 3", department: "Department A" },
    { id: 4, title: "Course 4", department: "Department C" },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Course ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => handleFinishCourse(record)}>
            Finish
          </Button>
        </Space>
      ),
    },
  ];

  const handleFinishCourse = (course) => {
    console.log("Finishing course:", course);
  };

  const filterData = () => {
    const filtered =
      filterBy === "title"
        ? allCourses.filter((course) =>
            course.title.toLowerCase().includes(filterCondition.toLowerCase())
          )
        : allCourses.filter((course) =>
            course.id.toString().includes(filterCondition.toLowerCase())
          );
    setFilteredCourses(filtered);
  };

  const handleFilterByChange = (value) => {
    setFilterBy(value);
    setFilterCondition("");
  };

  const handleFilterConditionChange = (e) => {
    setFilterCondition(e.target.value);
  };

  const handleFilter = () => {
    if (!filterCondition) setFilteredCourses(allCourses);
    else filterData();
  };

  return (
    <div className="w-100">
      <h5 className="text-center">My Courses</h5>
      <div
        className="mx-auto d-flex align-items-center justify-content-end p-2"
        style={{ minHeight: "2rem", maxWidth: "80%" }}
      >
        <div className="d-flex justify-content-end" style={{ width: "50%" }}>
          <div
            className="d-flex align-items-center"
            style={{ minWidth: "5rem" }}
          >
            <small>Filter By : </small>
            <Select
              value={filterBy}
              className="ms-2"
              onChange={handleFilterByChange}
            >
              <Select.Option value="title">Name</Select.Option>
              <Select.Option value="id">Course ID</Select.Option>
            </Select>
          </div>
          <div
            className="d-flex align-items-center ms-2"
            style={{ minWidth: "10rem" }}
          >
            <Input
              onChange={handleFilterConditionChange}
              value={filterCondition}
            />
          </div>
          <Button type="primary" className="ms-2" onClick={handleFilter}>
            Filter
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={filteredCourses} />
    </div>
  );
};

export default MyCourses;