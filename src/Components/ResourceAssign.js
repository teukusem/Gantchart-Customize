import { styleGlobal } from '../Style/styleGlobal';
import {
  StyledColCardAssignIcon,
  StyledColCardDetailResources,
  StyledRowCardAssign,
  StyledSpanTitleResources,
  StyledWrapperTopDetailResouces,
} from '../StyledComponent/ModalAssignStyled';

const ResourceAssign = ({ onClick, IconResource }) => {
  return (
    <StyledRowCardAssign onClick={onClick}>
      <StyledColCardAssignIcon span={4}>{IconResource}</StyledColCardAssignIcon>
      <StyledColCardDetailResources span={20}>
        <StyledWrapperTopDetailResouces>
          <StyledSpanTitleResources>ID PL-001</StyledSpanTitleResources>
          <span
            style={{
              fontWeight: styleGlobal.fontWeight.normal,
              padding: '4px 8px 4px 8px',
              borderRadius: 8,
              background: '#1BC5BD',
              color: styleGlobal.colors.netral,
              fontSize: 12,
            }}
          >
            Available
          </span>
        </StyledWrapperTopDetailResouces>
        <div style={{ fontSize: 12 }}>Pilot Car (B 222 UJK) , Ciwandan</div>
      </StyledColCardDetailResources>
    </StyledRowCardAssign>
  );
};

export default ResourceAssign;
