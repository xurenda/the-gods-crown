import { memo } from 'react'
import { sixDZnArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Input } from 'antd'

function SixDInput() {
  return (
    <Input.Group compact>
      {sixDZnArr.map(item => (
        <Input key={item} placeholder={item} style={{ width: '16.6%' }} />
      ))}
    </Input.Group>
  )
}

export default memo(SixDInput)
