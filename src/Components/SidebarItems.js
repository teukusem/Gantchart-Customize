import { Col, Tooltip } from 'antd';
import { styleGlobal } from '../Style/styleGlobal';
import { StyledSidebarItems } from '../StyledComponent/GantchartStyled';
import { TooltipSideBarCard } from '../utils/TooltipSideBarCard';
import { IconYacht } from '../Icons/IconYacht';

const SidebarItem = ({ spogColor, setDetailCard }) => {
  return (
    <StyledSidebarItems onClick={() => setDetailCard((prev) => !prev)}>
      <Col span={18} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Tooltip
          color={styleGlobal.colors.netral}
          title={<TooltipSideBarCard />}
          overlayInnerStyle={{
            borderRadius: 10,
            width: 210,
          }}
          placement="left"
        >
          <span style={{ fontSize: 14, fontWeight: styleGlobal.fontWeight.bold, display: 'flex', gap: 10 }}>
            <IconYacht color={spogColor} />
            MV Paros
          </span>
        </Tooltip>
        <span style={{ fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          Order No : 123456789 - 2
        </span>
      </Col>
      <Col span={6} style={{ display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center' }}>
        <span
          style={{
            fontSize: 10,
            background: ' #FFA800',
            padding: 6,
            borderRadius: 6,
            textAlign: 'center',
            minWidth: 68,
          }}
        >
          Assigned
        </span>
      </Col>
    </StyledSidebarItems>
  );
};

export default SidebarItem;
