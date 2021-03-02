import {request} from "./request"
export function getdetail(iid){
  return request({
    url:"/detail",
    params:{
      iid
    }
  })
}
export function getrecommend(iid){
  return request({
    url:"/recommend",
    params:{
      iid
    }
  })
}

export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
export class ShopInfo{
  constructor(data){
    this.fans = data.cFans
    this.Goods = data.cGoods
    this.Sells = data.cSells
    this.name = data.name
    this.shopLogo = data.shopLogo
    this.score = data.score
  }
}
export class GoodsParams{
  constructor(info,rule){
    this.image = info.image?info.image[0]:""
    this.infos = info.set;
    this.sizes = rule.tables
  }
}
