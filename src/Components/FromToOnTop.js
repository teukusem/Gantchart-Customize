import { Row } from "antd"
import IconArrowWithCircle from "../Icons/IconArrowWIthCircle"
import IconArrowRight from "../Icons/IconArrowWithCircleRight"

export const FromToOnTop = ({}) => {
    return (
        <div style={{ position: 'absolute' }}>
            <Row
                justify="middle"
                align="middle"
                style={{
                marginTop: -35,
                fontSize: 12,
                color:'black',
                width:'200%'
                }}
            >
                <IconArrowWithCircle/>
                <span
                style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                }}
                >
                LAUT
                </span>
                <IconArrowRight/>
                <span
                style={{
                    paddingLeft: 10,
                }}
                >
                DERMAGA
                </span>
            </Row>
        </div>
    )
}