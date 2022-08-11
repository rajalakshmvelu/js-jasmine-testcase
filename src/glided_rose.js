class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
	decrease_quality(){
		return this.quality -= 1
	}
	increase_quality(){
		return this.quality += 1
	}
	check_quality_name(){
		return (!['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros'].includes(this.name) && this.quality > 0)
	}
	check_sell_in(){
		this.increase_quality();
		if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
			if (this.sellIn < 11 && this.quality < 50)
				this.increase_quality();
			if (this.sellIn < 6 && this.quality < 50)
				this.increase_quality();
		}
	}
  check_quality_sell_in(){
    if (this.name != 'Aged Brie'){
      if (this.name != 'Backstage passes to a TAFKAL80ETC concert'){
				if (this.check_quality_name())
					this.decrease_quality 
			}
      else
        this.quality = 0
			}else if (this.quality < 50)
				this.increase_quality
  }
	item_names(){
		return ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros']
	}
}
	
class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].check_quality_name()){
				this.items[i].decrease_quality();          
      }else if (this.items[i].quality < 50) {        
				this.items[i].check_sell_in(); 
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;}
      if (this.items[i].sellIn < 0) {
				this.items[i].check_quality_sell_in()}
    }
    return this.items;
  }
}
