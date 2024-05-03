import { useState, useEffect } from "react";
import { Button, Input, Select, Modal, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import AntdTable from "../../components/AntdTable"; // Import the AntdTable component

const { Option } = Select;

const Assignments = () => {
  const [filteredLessons, setFilteredLessons] = useState([]);
  const [filterBy, setFilterBy] = useState("title");
  const [filterCondition, setFilterCondition] = useState("");
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [note, setNote] = useState("");
  const [file, setFile] = useState(null);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Lesson ID",
      dataIndex: "lessonID",
      key: "lessonID",
    },
    {
      title: "Uploaded Assignment",
      dataIndex: "uploadedAssignment",
      key: "uploadedAssignment",
    }
  ];

  const allLessons = [
    {
      title: "Lesson 1",
      lessonID: "L1",
      uploadedAssignment: "", // Initialize uploaded assignment name as empty string
    },
    {
      title: "Lesson 2",
      lessonID: "L2",
      uploadedAssignment: "",
    },
  ];

  useEffect(() => {
    setFilteredLessons(allLessons);
  }, []);

  const handleUpload = () => {
    if (!selectedLesson) {
      message.error("Please select a lesson.");
      return;
    }
    if (!file) {
      message.error("Please upload a file.");
      return;
    }
    console.log("Uploading assignment for lesson:", selectedLesson, "with note:", note, "and file:", file);
    
    // Update the uploadedAssignment property of the selected lesson
    const updatedLessons = filteredLessons.map((lesson) =>
      lesson.lessonID === selectedLesson.lessonID
        ? { ...lesson, uploadedAssignment: file.name }
        : lesson
    );
    setFilteredLessons(updatedLessons);

    setShowUploadModal(false);
  };

  const handleLessonSelect = (value) => {
    const selected = allLessons.find((lesson) => lesson.lessonID === value);
    setSelectedLesson(selected);
  };

  const handleChangeNote = (e) => {
    setNote(e.target.value);
  };

  const handleFileChange = (info) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setFile(info.file.originFileObj);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <Button type="primary" onClick={() => setShowUploadModal(true)}>Upload Assignment</Button>
      </div>
      <AntdTable columns={columns} data={filteredLessons} width="80%" /> {/* Use the AntdTable component */}
      <Modal
        title="Upload Assignment"
        visible={showUploadModal}
        onCancel={() => setShowUploadModal(false)}
        footer={[
          <Button key="cancel" onClick={() => setShowUploadModal(false)}>Cancel</Button>,
          <Button key="upload" type="primary" onClick={handleUpload}>Upload</Button>
        ]}
      >
        <div>
          <Select placeholder="Select Lesson" onChange={handleLessonSelect} style={{ width: "100%", marginBottom: "1rem" }}>
            {allLessons.map((lesson) => (
              <Option key={lesson.lessonID} value={lesson.lessonID}>{lesson.title}</Option>
            ))}
          </Select>
          {selectedLesson && (
            <div>
              <h3>Lesson: {selectedLesson.title}</h3>
              <label>Note:</label>
              <Input.TextArea value={note} onChange={handleChangeNote} rows={4} />
              <div style={{ marginTop: "1rem" }}>
                <Upload
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  beforeUpload={(file) => {
                    const isLt10M = file.size / 1024 / 1024 < 10;
                    if (!isLt10M) {
                      message.error("File must be smaller than 10MB!");
                    }
                    return isLt10M;
                  }}
                  fileList={file ? [file] : []}
                >
                  <Button icon={<UploadOutlined />}>Upload Assignment</Button>
                </Upload>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Assignments;
