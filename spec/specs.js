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
  // it("will return Romans do not believe in 0 for 0", function() {
  //   expect(romNum(0)).to.equal("Romans do not believe in 0")
  // });
  it("will return LXXX for 70", function() {
    expect(romNum(70)).to.equal("LXX")
  });
});
