describe('romNum', function() {
  it("will return I for 1", function (){
    expect(romNum(1)).to.equal("I")
  });
  it("will return 3 I's for 3", function() {
    expect(romNum(3)).to.equal("III")
  });
  it("will return IX for 9", function() {
    expect(romNum(9)).to.equal("IX")
  });
  it("will return LXXX for 70", function() {
    expect(romNum(70)).to.equal("LXX")
  });
  it("will return CD for 400", function() {
    expect(romNum(400)).to.equal("CD")
  });
  it("will return MM for 2000", function() {
    expect(romNum(2000)).to.equal("MM")
  });
  it("will return XI for 11", function() {
    expect(romNum(11)).to.equal("XI")
  });
  it("will return DCCCLXXVI for 876", function() {
    expect(romNum(876)).to.equal("DCCCLXXVI")
  });
  it("will return MMMCMXCIX for 3999", function() {
    expect(romNum(3999)).to.equal("MMMCMXCIX")
  });

});
