import AntdTable from "../../components/AntdTable";
import { useState } from "react";

const MyCourses = () => {
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
      title: "My Lessons",
      render(item) {
        return 0; // Placeholder for myLessons length
      },
    },
  ];

  const currentUser = { _id: "placeholder" }; // Placeholder for currentUser
  const myCourses = []; // Placeholder for myCourses array
  const [filteredCourses, setFilteredCourses] = useState(myCourses);

  return (
    <div className="w-100">
      <h5 className="text-center">My Courses</h5>
      <AntdTable columns={columns} data={filteredCourses} width="80%" />
    </div>
  );
};

export default MyCourses;
