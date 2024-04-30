import { Button, Input, Modal, Select } from "antd";
import AntdTable from "../../components/AntdTable";
import { useEffect, useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons";

const Courses = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "title",
    },
    {
      title: "Course Id",
      dataIndex: "id",
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Actions",
      render(item) {
        return (
          <div>
            <Button onClick={() => {}}>View Course</Button>
          </div>
        );
      },
    },
  ];

  const [filteredCourses, setFilteredCourses] = useState([]);
  const [filterBy, setFilterBy] = useState("name");
  const [filterCondition, setFilterCondition] = useState("");

  useEffect(() => {
    setFilteredCourses(initialCourses);
  }, []);

  const handleFilterChange = (value) => {
    setFilterBy(value);
    setFilterCondition("");
  };

  const handleInputChange = (e) => {
    setFilterCondition(e.target.value);
  };

  const handleFilter = () => {
    const filtered = initialCourses.filter((course) => {
      const fieldValue = course[filterBy].toLowerCase();
      const condition = filterCondition.toLowerCase();
      return fieldValue.includes(condition);
    });
    setFilteredCourses(filtered);
  };



  const generateRandomCourse = () => {
    const departments = ["Computer Science", "Electrical Engineering", "Mathematics"];
    return {
      title: `Course ${Math.floor(Math.random() * 100)}`,
      id: `C00${Math.floor(Math.random() * 100)}`,
      department: departments[Math.floor(Math.random() * departments.length)],
    };
  };

  const initialCourses = Array.from({ length: 10 }, generateRandomCourse);

  return (
    <div className="w-100">
      <h5 className="text-center">Courses</h5>
      <div className="mx-auto d-flex align-items-center justify-content-between p-2" style={{ minHeight: "2rem", maxWidth: "80%" }}>
        <div style={{ maxWidth: "30%" }}>
          <Button type="primary" icon={<PlusCircleFilled />}>
            Add Course
          </Button>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-end" style={{ maxWidth: "50%" }}>
          <div className="d-flex align-items-center justify-content-center" style={{ maxWidth: "10rem" }}>
            <small>Filter By : </small>
            <Select value={filterBy} className="ms-2" onChange={handleFilterChange}>
              <Select.Option value="name">Name</Select.Option>
              <Select.Option value="id">Course ID</Select.Option>
              <Select.Option value="department">Department</Select.Option>
            </Select>
          </div>
          
        </div>
      </div>
      <AntdTable columns={columns} data={filteredCourses} width="80%" />
      <Modal
        title={<p className="text-center m-0">View Course</p>}
        visible={false} // Set visibility according to your logic
        onCancel={() => {}}
        footer={[]}
      >
        {/* Content of the View Course modal */}
      </Modal>
    </div>
  );
};

export default Courses;
