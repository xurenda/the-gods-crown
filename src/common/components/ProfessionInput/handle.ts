import professionData from '@/common/data/profession/professions'
import { ProfessionGrade, ProfessionType } from '@/common/data/profession/types'

interface AntdOpt {
  value: string
  label: string
  children?: AntdOpt[]
}

export const antdProfessionOptDefaultValue = ['步兵', 'P1', '新兵']

export const antdProfessionOpt: AntdOpt[] = generateAntdOpt(professionData, 3)

function generateAntdOpt(obj: Record<string, any>, depth = 1): AntdOpt[] {
  if (depth === 0) return []

  return Object.keys(obj).map(key => {
    const res: AntdOpt = {
      value: key,
      label: key,
    }

    const children = generateAntdOpt(obj[key], depth - 1)
    if (children.length) {
      res.children = children
    }

    return res
  })
}
