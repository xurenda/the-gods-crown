import { memo } from 'react'
import { Cascader } from 'antd'
import { antdProfessionOptDefaultValue, antdProfessionOpt } from './handle'

function ProfessionInput() {
  return (
    <Cascader
      allowClear={false}
      showSearch={true}
      options={antdProfessionOpt}
      defaultValue={antdProfessionOptDefaultValue}
      expandTrigger="hover"
      displayRender={displayRender}
      onChange={onChange}
    />
  )

  function onChange(value: any) {
    window.log('选择职业', value)
  }

  /**
   * 仅显示最后一个选项
   */
  function displayRender(label: string[]) {
    return label[label.length - 1]
  }
}

export default memo(ProfessionInput)
