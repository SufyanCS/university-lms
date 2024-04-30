import AntdTable from "../../components/AntdTable";
import { useState } from "react";

const Teachers = () => {
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
      title: "Assigned Courses",
      render(item) {
        const assignedCourses = courses.filter((course) =>
          course.teachers.includes(item._id)
        );
        return assignedCourses.map((ab) => (
          <small className="fw-bold">{ab.title}&nbsp;,&nbsp;</small>
        ));
      },
    },
  ];

  const generateRandomTeacher = () => {
    return {
      _id: `T00${Math.floor(Math.random() * 100)}`,
      name: `Teacher ${Math.floor(Math.random() * 100)}`,
      department: `department_${Math.floor(Math.random() * 3)}`,
    };
  };

  const generateRandomCourses = () => {
    return Array.from({ length: 5 }, (_, index) => ({
      _id: `C00${index}`,
      title: `Course ${index}`,
      teachers: [`T00${Math.floor(Math.random() * 100)}`],
    }));
  };

  const teachers = Array.from({ length: 10 }, generateRandomTeacher);
  const departments = Array.from({ length: 3 }, (_, index) => ({
    value: `department_${index}`,
    name: `Department ${index + 1}`,
  }));
  const courses = generateRandomCourses();
  
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);

  return (
    <div className="w-100">
      <h5 className="text-center">Teachers</h5>
      <AntdTable columns={columns} data={filteredTeachers} width="80%" />
    </div>
  );
};

export default Teachers;
