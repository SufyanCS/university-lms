import { BookOutlined } from "@ant-design/icons";
import { FaPencilAlt } from "react-icons/fa";
import { Card, Row, Col } from "antd";
const TeacherDashboard = () => {


  return (
    <div className="w-100 bg-light" style={{ height: "100%" }}>
      <div className="w-100">
        <Row className="w-100" gutter="2">
          <Col span={12}>
            <Card className="d-flex flex-column justify-content-center align-items-center">
              <div className="text-center">
                <BookOutlined className="fs-3" />
              </div>
              <h5 className="text-center">My Courses</h5>
              <h3 className="text-center">22</h3>
            </Card>
          </Col>
          <Col span={12}>
            <Card className="d-flex flex-column justify-content-center align-items-center">
              <div className="text-center">
                <FaPencilAlt className="fs-3" />
              </div>
              <h5 className="text-center">My Lessons</h5>
              <h3 className="text-center">23</h3>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TeacherDashboard;