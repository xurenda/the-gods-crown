export enum Ancestry {
  sn = '塞宁王族',
  xr = '希尔王族',
  pr = '佩尔弗因王族',
  qw = '切瓦利王族',
  nt = '弗莱德里王族',
  fl = '法拉希尔后裔',
  jl = '高阶精灵',
  gt = '古特雅尔',
  mx = '玛夏贵族',
  hc = '宏朝贵胄',
  zz = '祖扎尔达王族',
  wn = '瓦诺遗族',
  dh = '萨尼德罕',
  aj = '黑暗精灵',
  rg = '瑞格王族',
}

export interface AncestryItem {
  key: Ancestry
  val: number
}

export type AncestryArr = AncestryItem[]
