import { BookOutlined, ReadOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Row, Col } from "antd";
import { MdGroups, MdPeople } from "react-icons/md";
const AdminDashboard = () => {
  

  return (
    <div className="w-100 bg-light" style={{ height: "100%" }}>
      <div className="w-100 p-3">
        <h4>Total Data</h4>
        <Row className="w-100" gutter="2">
          <Col xs={12} md={6}>
            <Card className="d-flex flex-column justify-content-center align-items-center">
              <div className="text-center">
                <UserOutlined className="fs-3" />
              </div>
              <h5 className="text-center">Total Users</h5>
              <h3 className="text-center">25</h3>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="d-flex flex-column justify-content-center align-items-center">
              <div className="text-center">
                <ReadOutlined className="fs-3" />
              </div>
              <h5 className="text-center">Total Teachers</h5>
              <h3 className="text-center">45</h3>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="d-flex flex-column justify-content-center align-items-center">
              <div className="text-center">
                <MdPeople className="fs-3" />
              </div>
              <h5 className="text-center">Total Students</h5>
              <h3 className="text-center">78</h3>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="d-flex flex-column justify-content-center align-items-center">
              <div className="text-center">
                <MdGroups className="fs-3" />
              </div>
              <h5 className="text-center">Total Departments</h5>
              <h3 className="text-center">22</h3>
            </Card>
          </Col>
          <Col span={24}>
            <Card className="d-flex flex-column justify-content-center align-items-center">
              <div className="text-center">
                <BookOutlined className="fs-3" />
              </div>
              <h5 className="text-center">Total Courses</h5>
              <h3 className="text-center">10</h3>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AdminDashboard;
