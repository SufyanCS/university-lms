import { useEffect, useState } from "react";
import { Button, Input, Modal, Select, Table } from "antd";

const { Option } = Select;

const Lessons = () => {
  const [filteredLessons, setFilteredLessons] = useState([]);
  const [filterBy, setFilterBy] = useState("title");
  const [filterCondition, setFilterCondition] = useState("");
  const [showViewModal, setShowViewModal] = useState(false);
  const [showViewExamModal, setShowViewExamModal] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Course Name",
      dataIndex: "courseName",
      key: "courseName",
    },
    {
      title: "Course ID",
      dataIndex: "courseID",
      key: "courseID",
    },
    {
      title: "Assigned Teachers",
      dataIndex: "teachers",
      key: "teachers",
      render: (teachers) => (
        <>
          {teachers.map((teacher) => (
            <small key={teacher} className="fw-bold">
              {teacher} ,
            </small>
          ))}
        </>
      ),
    },
    {
      title: "Course Materials",
      dataIndex: "materials",
      key: "materials",
    },
    {
      title: "Exams & Questions",
      dataIndex: "examQuestions",
      key: "examQuestions",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <div className="d-flex">
          <Button
            onClick={() => {
              setSelectedLesson(record);
              setShowViewModal(true);
            }}
            type="primary"
          >
            View Lesson
          </Button>
          <Button
            className="ms-2"
            onClick={() => {
              setSelectedLesson(record);
              setShowViewExamModal(true);
            }}
          >
            Download lecture
          </Button>
        </div>
      ),
    },
  ];

  const allLessons = [
    {
      title: "Lesson 1",
      courseName: "Mathematics",
      courseID: "MATH101",
      teachers: ["John Doe", "Jane Smith"],
      materials: 5,
      examQuestions: 10,
    },
    {
      title: "Lesson 2",
      courseName: "Physics",
      courseID: "PHYS101",
      teachers: ["Alice Johnson"],
      materials: 3,
      examQuestions: 8,
    },
    // Add more lessons here...
  ];

  useEffect(() => {
    const filterData = () => {
      const filtered =
        filterBy === "title"
          ? allLessons.filter((lesson) =>
              lesson.title.toLowerCase().includes(filterCondition.toLowerCase())
            )
          : allLessons.filter((lesson) =>
              lesson.courseID.toLowerCase().includes(filterCondition.toLowerCase())
            );
      setFilteredLessons(filtered);
    };

    if (!filterCondition) setFilteredLessons(allLessons);
    else filterData();
  }, [filterCondition, filterBy]);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <Select
            defaultValue="title"
            style={{ width: 120 }}
            onChange={(value) => setFilterBy(value)}
          >
            <Option value="title">Title</Option>
            <Option value="courseID">Course ID</Option>
          </Select>
          <Input
            placeholder={`Filter by ${filterBy}`}
            className="ms-2"
            value={filterCondition}
            onChange={(e) => setFilterCondition(e.target.value)}
          />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={filteredLessons}
        rowKey={(record) => record.title}
      />
      {/* Add modals for view lesson and view exams/questions */}
    </div>
  );
};

export default Lessons;