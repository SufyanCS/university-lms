import AntdTable from "../../components/AntdTable";
import { useState } from "react";

const Students = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Department",
      render(item) {
        return departments
          ? departments.filter((dept) => dept.value === item.department)[0].name
          : "";
      },
    },
    {
      title: "Grade",
      dataIndex: "grade",
    },
  ];

  const generateRandomStudent = () => {
    return {
      _id: `S00${Math.floor(Math.random() * 100)}`,
      name: `Student ${Math.floor(Math.random() * 100)}`,
      department: `department_${Math.floor(Math.random() * 3)}`,
      grade: Math.floor(Math.random() * 100) + 1,
    };
  };

  const students = Array.from({ length: 10 }, generateRandomStudent);
  const departments = Array.from({ length: 3 }, (_, index) => ({
    value: `department_${index}`,
    name: `Department ${index + 1}`,
  }));

  const [filteredStudents, setFilteredStudents] = useState(students);

  return (
    <div className="w-100">
      <h5 className="text-center">Students</h5>
      <AntdTable columns={columns} data={filteredStudents} width="80%" />
    </div>
  );
};

export default Students;
