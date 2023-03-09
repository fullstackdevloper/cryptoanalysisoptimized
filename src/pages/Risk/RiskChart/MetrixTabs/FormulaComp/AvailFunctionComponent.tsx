import { Col, Typography } from 'antd'
import FormulaTagButtons from './formulaTags/FormulaTagButtons'

const AvailFunctionComponent = ({f, chartConfigProps, id, formulaProps}: any) => {
  return (
    <>
      <Col span={3}>
        <Typography style={{ color: 'white', textAlign: 'right' }}>
          Available functions:
        </Typography>
      </Col>
      <FormulaTagButtons f={f} chartConfigProps={chartConfigProps} id={id} formulaProps={formulaProps}/>
    </>
  )
}

export default AvailFunctionComponent
