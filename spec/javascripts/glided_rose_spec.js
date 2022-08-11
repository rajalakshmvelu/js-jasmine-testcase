
//var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item('+5 Dexterity Vest', -10, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });
	
  it("Quality is negative - sell in negative", function() {
    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', -1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80)
  });
	
	it("Aged Brie increases in Quality", function() {
    const gildedRose = new Shop([ new Item('Aged Brie', 2, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(5)
  });
	
	it("Conjured decrease the quality", function() {
    const gildedRose = new Shop([ new Item('Conjured Mana Cake', 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(5)
  });
	
	it("Sulfuras no decrease in quality", function() {
    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80)
  });
	
	it("Quality increases by 1", function() {
    const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(21)
	 });
	 
	it("Quality increases by 2 , sell_in < 11 ", function() {
		const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(47)
	});
	
	it("Quality increases by 3 sell_in < 6", function() {
		const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(48)
  });
	
});

