import { useEffect, useState } from "react";
import { Button, Input, Modal, Select, Table } from "antd";

const { Option } = Select;

const Lessons = () => {
  const [filteredLessons, setFilteredLessons] = useState([]);
  const [filterBy, setFilterBy] = useState("title");
  const [filterCondition, setFilterCondition] = useState("");
  const [showViewModal, setShowViewModal] = useState(false);
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
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Example video URL
      content: "This is the content of lesson 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", // Example content
    },
    {
      title: "Lesson 2",
      courseName: "Physics",
      courseID: "PHYS101",
      teachers: ["Alice Johnson"],
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Example video URL
      content: "This is the content of lesson 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", // Example content
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
      {/* View Lesson Modal */}
      <Modal
        title={selectedLesson ? selectedLesson.title : ""}
        visible={showViewModal}
        onCancel={() => setShowViewModal(false)}
        footer={null}
        width={800}
      >
        {selectedLesson && (
          <div>
            <video url={selectedLesson.videoUrl} controls={true} />
            <div className="mt-4">
              <p>{selectedLesson.content}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Lessons;
