import { Col, Divider, Row } from 'antd';
import { styleGlobal } from '../Style/styleGlobal';

const TooltipCard = () => {
  return (
    <div style={{ color: 'black', padding: '0.5rem' }}>
      <Divider orientation="left" orientationMargin="0">
        <span
          style={{
            color: styleGlobal.colors.primary,
            fontWeight: styleGlobal.fontWeight.bold,
          }}
        >
          Detail Job
        </span>
      </Divider>
      <Row>
        <Col span={12}>
          <p
            style={{
              fontSize: 10,
              fontWeight: styleGlobal.fontWeight.bold,
            }}
          >
            Vessel Name
          </p>
        </Col>
        <Col span={12}>
          <p style={{ fontSize: 10 }}>Mv Paros</p>
        </Col>
        <Col span={12}>
          <p
            style={{
              fontSize: 10,
              fontWeight: styleGlobal.fontWeight.bold,
            }}
          >
            SPK Number
          </p>
        </Col>
        <Col span={12}>
          <p style={{ fontSize: 10 }}>1231123</p>
        </Col>
        <Col span={12}>
          <p
            style={{
              fontWeight: styleGlobal.fontWeight.bold,
              fontSize: 10,
            }}
          >
            GRT
          </p>
        </Col>
        <Col span={12}>
          <p style={{ fontSize: 10 }}>6.21</p>
        </Col>
        <Col span={12}>
          <p
            style={{
              fontWeight: styleGlobal.fontWeight.bold,
              fontSize: 10,
            }}
          >
            LOA
          </p>
        </Col>
        <Col span={12}>
          <p style={{ fontSize: 10 }}>6.12</p>
        </Col>
        <Col span={12}>
          <p
            style={{
              fontWeight: styleGlobal.fontWeight.bold,
              fontSize: 10,
            }}
          >
            Order Number
          </p>
        </Col>
        <Col span={12}>
          <p style={{ fontSize: 10 }}>21361823812 - 1</p>
        </Col>
      </Row>
    </div>
  );
};

export default TooltipCard;
