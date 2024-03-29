import { Row, Tooltip } from 'antd';
import IconArrowWithCircle from '../Icons/IconArrowWIthCircle';
import IconArrowRight from '../Icons/IconArrowWithCircleRight';
import { TextElipsis } from '../StyledComponent/GantchartStyled';
import { styleGlobal } from '../Style/styleGlobal';

export const FromToOnTop = ({}) => {
  return (
    <div style={{ position: 'absolute' }}>
      <Row
        justify="middle"
        align="middle"
        style={{
          marginTop: -32,
          fontSize: 10,
          color: 'black',
          width: '200%',
        }}
      >
        <IconArrowWithCircle />
        <Tooltip
          color={styleGlobal.colors.netral}
          title={'LAUT'}
          overlayInnerStyle={{
            borderRadius: 10,
            maxWidth: 250,
            color: 'black',
            fontSize: 10,
          }}
          placement="topLeft"
        >
          <TextElipsis
            style={{
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            LAUT
          </TextElipsis>
        </Tooltip>
        <IconArrowRight />
        <Tooltip
          color={styleGlobal.colors.netral}
          title={
            'DERMAGA HAHHAHAHAHAHHAHAHH AHHAHHAHAHAHAHHAHAHHAHHAHHAHAHAHAHHAHAHHAHHAHHAHAHAHAHHAHAHHAHHAHHAHAHAHAHHAHAHHAH'
          }
          overlayInnerStyle={{
            borderRadius: 10,
            maxWidth: 250,
            color: 'black',
            fontSize: 10,
          }}
          placement="topLeft"
        >
          <TextElipsis
            style={{
              paddingLeft: 10,
            }}
          >
            DERMAGA HAHHAHAHAHAHHAHAHHAHHAHHAHAHAHAHHAHAHHAHHAHHAHAHAHAHHAHAHHAHHAHHAHAHAHAHHAHAHHAHHAHHAHAHAHAHHAHAHHAH
          </TextElipsis>
        </Tooltip>
      </Row>
    </div>
  );
};
