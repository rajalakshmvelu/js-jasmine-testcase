const item_names = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros']
class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  decrease_quality = () => { this.quality -= 1 }
  increase_quality = () => { this.quality += 1 }
  check_quality_name = () => {
    return (!item_names.includes(this.name) && this.quality > 0)
  }
  check_sell_in = () =>{
    this.increase_quality();
    if (this.name === item_names[1]) {
      if (this.sellIn < 11 && this.quality < 50)
        this.increase_quality();
      if (this.sellIn < 6 && this.quality < 50)
        this.increase_quality();
    }
  } 
  check_quality_sell_in = () => {
    let names = item_names;
    if (this.name !== names[0]){
      if (this.name !== names[1]){
        if (this.check_quality_name())
          this.decrease_quality
        }
      else
        this.quality = 0
      }else if (this.quality < 50)
        this.increase_quality
  }
 }

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(function (item){
      if (item.check_quality_name()){
        item.decrease_quality();    
      }else if (item.quality < 50) {
        item.check_sell_in();
      }
      if (item.name !==item_names[2]) {
        item.sellIn -= 1;}
      if (item.sellIn < 0) {
        item.check_quality_sell_in()}
    });
    return this.items;
  }
}