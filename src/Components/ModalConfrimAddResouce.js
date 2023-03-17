import { Modal } from 'antd';
import { styleGlobal } from '../Style/styleGlobal';

const ModalConfirmAddResource = ({ isModalOpen, handleCancel }) => {
  return (
    <Modal
      title="Add New Resource"
      open={isModalOpen}
      onCancel={handleCancel}
      okText={'Add Resource'}
      onOk={handleCancel}
    >
      <p style={{ textAlign: 'center', fontWeight: styleGlobal.fontWeight.normal }}>
        Are You Sure To Add{' '}
        <span style={{ fontWeight: styleGlobal.fontWeight.bold, color: 'rgb(113, 161, 247)' }}>Pilot Car Go</span> In
        This Resource
      </p>
    </Modal>
  );
};

export default ModalConfirmAddResource;
