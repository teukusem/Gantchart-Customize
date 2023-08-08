import { Form, DatePicker, Select } from 'antd';

export function FilterDropdownContent() {
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;

  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  return (
    <div style={{ fontSize: 12 }}>
      <Form form={form} layout="vertical">
        <Form.Item label="Status :" name="status" style={{ marginBottom: 0 }}>
          <Select mode="multiple" placeholder="Select Status Filter" size="small" options={options} />
        </Form.Item>

        <Form.Item label="Movement :" name="movement" style={{ marginBottom: 0 }}>
          <Select mode="multiple" placeholder="Select Movement Filter" size="small" options={options} />
        </Form.Item>

        <Form.Item label="Date :" name="date" style={{ marginBottom: 0 }}>
          <RangePicker size="small" />
        </Form.Item>

        <Form.Item label="Pandu :" name="pandu" style={{ marginBottom: 0 }}>
          <Select mode="multiple" placeholder="Select Pandu Filter" size="small" options={options} />
        </Form.Item>

        <Form.Item label="Tunda :" name="tunda" style={{ marginBottom: 0 }}>
          <Select mode="multiple" placeholder="Select Tunda Filter" size="small" options={options} />
        </Form.Item>
      </Form>
    </div>
  );
}
