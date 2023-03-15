import { Modal } from 'antd';
import { styleGlobal } from '../Style/styleGlobal';

const ModalConfirmationAssignResources = ({ modalConfrim, handleOk, handleCancel }) => {
  return (
    <Modal
      title="Confrim Assign Resource"
      open={modalConfrim}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={'Confrim'}
    >
      <p style={{ textAlign: 'center', fontWeight: styleGlobal.fontWeight.normal }}>
        Are You Sure To Add{' '}
        <span style={{ fontWeight: styleGlobal.fontWeight.bold, color: 'rgb(113, 161, 247)' }}>
          Avanza location in Makassar
        </span>{' '}
        For Resource <br /> <span style={{ fontWeight: styleGlobal.fontWeight.bold }}>Pilot Car Go</span>
      </p>
    </Modal>
  );
};

export default ModalConfirmationAssignResources;
