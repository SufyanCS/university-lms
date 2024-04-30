import AntdTable from "../../components/AntdTable";
import { useState } from "react";

import { Button} from "antd";

const MyLessons = () => {
  const columns = [
    {
      title: "Course Name",
      dataIndex: "courseName",
    },
    {
      title: "Course ID",
      dataIndex: "courseID",
    },
    { title: "Lesson Title", dataIndex: "lessonTitle" },
    {
      title: "Uploaded in",
      dataIndex: "uploadedDate",
    },
    {
      title: "Files",
      dataIndex: "filesCount",
    },
    {
      title: "Actions",
      dataIndex: "actions",
    },
  ];
  const data = Array.from({ length: 10 }, (_, i) => ({
    key: i,
    courseName: `Course ${i}`,
    courseID: `C${i}`,
    lessonTitle: `Lesson ${i}`,
    uploadedDate: `2024-04-${i + 1}`,
    filesCount: Math.floor(Math.random() * 5),
    actions: (
      <>
        <Button className="bg-success text-white">View Lesson</Button>
        <Button className="ms-2">Exams & Questions</Button>
      </>
    ),
  }));

  return (
    <div className="w-100">
      <h5 className="text-center">My Lessons</h5>
      <AntdTable columns={columns} data={data} width="80%" />
      {/* Modals */}
    </div>
  );
};

export default MyLessons;
