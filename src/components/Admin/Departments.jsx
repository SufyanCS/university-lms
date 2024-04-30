import { Button, Input, Modal, Popconfirm, Select } from "antd";
import AntdTable from "../../components/AntdTable";
import { useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons";

const Departments = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Number of courses",
      render(item) {
        return (
          <div>
            <Button
              onClick={() => {
                setSelectedDept(item);
                setShowViewModal(true);
              }}
            >
              View More
            </Button>
          </div>
        );
      },
    },
  ];

  const [selectedDept, setSelectedDept] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterBy, setFilterBy] = useState("name");
  const [filterCondition, setFilterCondition] = useState("");
  const [input, setInput] = useState({ name: "" });

  const departments = [
    { name: "Department 1", value: 1 },
    { name: "Department 2", value: 2 },
    { name: "Department 3", value: 3 },
  ];
  const courses = [
    { title: "Course 1", department: 1 },
    { title: "Course 2", department: 2 },
    { title: "Course 3", department: 1 },
    { title: "Course 4", department: 3 },
  ];

  const initialDepts = departments;
  const [filteredDepts, setFilteredDepts] = useState(departments);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="w-100">
      <h5 className="text-center">Departments</h5>
      <div className="mx-auto d-flex align-items-center justify-content-between p-2" style={{ minHeight: "2rem", maxWidth: "80%" }}>
        <div style={{ maxWidth: "30%" }}>
          <Button onClick={() => { setShowAddModal(true); }} type="primary" icon={<PlusCircleFilled />}>
            Add Department
          </Button>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-end" style={{ maxWidth: "50%" }}>
          <div className="d-flex align-items-center justify-content-center" style={{ maxWidth: "10rem" }}>
            <small>Filter By : </small>
            <Select value={filterBy} onChange={(val) => { setFilterBy(val); setFilteredDepts(initialDepts); setFilterCondition(""); }} className="ms-2">
              <Select.Option value="name">Name</Select.Option>
            </Select>
          </div>
          
        </div>
      </div>
      <AntdTable columns={columns} data={filteredDepts} width="80%" />
      <Modal open={showViewModal} title={<p className="text-center m-0">View Department</p>} onCancel={() => { setShowViewModal(false); }} footer={[]}>
        {showViewModal && (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <ul className="mt-2" style={{ width: "60%" }}>
              <li>Name : {selectedDept.name}</li>
              <li>Total Courses : {courses.filter((course) => course.department === selectedDept.value).length}</li>
              <li>Courses : {
                courses.filter((course) => course.department === selectedDept.value).length > 0 ?
                  courses.filter((course) => course.department === selectedDept.value).map((course) => (
                    <small className="fw-bold">{course.title} &nbsp;,&nbsp;</small>
                  )) : "-"
              }</li>
            </ul>
            <div className="d-flex justify-content-between align-items-center" style={{ width: "30%", minHeight: "2rem" }}>
              <Popconfirm onConfirm={() => console.log("Delete")} title="Delete Department ?" okText="Yes">
                <Button className="bg-danger text-white">Delete</Button>
              </Popconfirm>
            </div>
          </div>
        )}
      </Modal>
      <Modal open={showAddModal} title={<p className="text-center m-0">Add Department</p>} onCancel={() => { setShowAddModal(false); }} maskClosable={false} footer={[]}>
        <form>
          <label>Name</label>
          <Input name="name" id="name" value={input.name} onChange={handleChange} required />
          <Button className="mx-auto d-block mt-2" style={{ width: "10rem" }} type="primary" htmlType="submit">
            Save
          </Button>
        </form>
      </Modal>
      <Modal open={showEditModal} title={<p className="text-center m-0">Edit Department</p>} onCancel={() => { setShowEditModal(false); }} footer={[]} maskClosable={false}>
        {showEditModal && (
          <form>
            <label>Name</label>
            <Input name="name" id="name" value={input.name} onChange={handleChange} required />
            <Button className="mx-auto d-block mt-2" style={{ width: "10rem" }} type="primary" htmlType="submit" disabled={selectedDept && selectedDept.name === input.name}>
              Save
            </Button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Departments;
