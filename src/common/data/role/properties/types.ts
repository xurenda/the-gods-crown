import { AncestryArr } from './ancestry'

export interface Properties {
  level: number // 等级
  ancestry: AncestryArr // 血统
  lifetime: number // 寿命

  life: number // 生命
  maxWeightBearing: number // 最大负重
  aggressivity: number // 攻击力
  experienceAcquisition: string // 经验获取
  hitRate: string // 命中率
  remoteHitRate: string // 远程命中率
  critRate: string // 暴击率
  antiknockRate: string // 抗暴率
  skewness: string // 偏斜率
  remoteSkewness: string // 远程偏斜率
  meleeSkewness: string // 近战偏斜率
}
