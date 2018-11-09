var homePage=function(){
this.homeButton=element(by.linkText('Norwegian Cruise Line'));
}
module.exports=new homePage();

///////////////
var popwindow=function(){
this.popwindow=element(by.id('simplemodal-close-img'))
}
module.exports= new popwindow();


//////////
var GetReadyForYourCruisePage=function(){
this.GetReadyForYourCruise=element(by.css('#mainMenu > li.menu-42774.menu_clearfix > a'));
this.prepareForYourCruiseButton=element(by.css('.menu-42775 a'))
}
module.exports=new GetReadyForYourCruisePage();



