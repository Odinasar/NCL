var homePage=require('../Pages/Home.page.js')
var GetReadyForYourCruisePage=require('../Pages/Home.page.js')
var base=require('/Users/SMS/Desktop/bigBugs/NCL/Utilities/base.js')
var prepareForYourCruise=require('../Pages/prepareForYourCruise.Page.js')
var shoreExcursions=require('/Users/SMS/Desktop/bigBugs/NCL/Pages/ShoreExcursions.Page.js')
 

describe(' Menu Bar "Get Ready for Your Cruise" on Home page', () => {
browser.waitForAngularEnabled(false)
beforeEach(function(){
base.navigateToHome()


});
//1
it('should check if Menu bar "Get Ready for Your Cruise" is displayed ', () => {    
    expect(homePage.GetReadyForYourCruise.getText()).toEqual('Get Ready for Your Cruise')
    expect(homePage.GetReadyForYourCruise.isDisplayed()).toBe(true)
});
//2
it("should click on 'Get Ready for Your Cruise'", () => {
    homePage.GetReadyForYourCruise.click();
});
//3
it('should hover mouse over "Get Ready for Your Cruise" to make visible options under it', () => {
    browser.actions().mouseMove(homePage.GetReadyForYourCruise).perform();
});
//4
it('should count all the options under link-button "Get Ready for Your Cruise"', () => {
    homePage.GetReadyForYourCruise.click();
    expect(element(by.css('.mainMenu>:nth-child(3)>div')).all(by.css('a')).count()).toEqual(8)
    expect(element.all(by.css('.mainMenu>:nth-child(3)>div a')).count()).toEqual(8)
    expect($$('.mainMenu>:nth-child(3)>div a').count()).toEqual(base.allOptions.length)
})
//5
it('should check if all options are listed and displayed under "Get Ready for Your Cruise" ', () => {
    homePage.GetReadyForYourCruise.click();
    expect($$('.mainMenu>:nth-child(3)>div a').getText()).toEqual(base.allOptions)
    $$('.mainMenu>:nth-child(3)>div a').each(function(text){
    expect(text.getText().isDisplayed()).toBe(true)
})     
});   
 
  //6
it('should click Prepare for Your Cruise', () => {
    homePage.GetReadyForYourCruise.click();
    GetReadyForYourCruisePage.prepareForYourCruiseButton.click()
    browser.sleep(2000)
    expect($('.galleria-image>:nth-child(3)').isDisplayed()).toBe(true)
    
});
  //7
it('should check if link for video is clickable,displayed', () => {
    
   homePage.GetReadyForYourCruise.click();
   GetReadyForYourCruisePage.prepareForYourCruiseButton.click()
   expect(prepareForYourCruise.getToKnowMyNclVideo.isPresent()).toBe(true); 
   expect(prepareForYourCruise.getToKnowMyNclVideo.isDisplayed()).toBe(true);
   prepareForYourCruise.getToKnowMyNclVideo.click();

  })
//8
  it('should check name of the video is dispalyed', () => {
    homePage.GetReadyForYourCruise.click();
    GetReadyForYourCruisePage.prepareForYourCruiseButton.click()
    prepareForYourCruise.getToKnowMyNclVideo.click();
    browser.switchTo().frame(browser.driver.findElement(by.css('div#vid1>iframe')))
    expect(element(by.linkText('My NCL: Check-In and Start Planning Your Cruise')).getText().isDisplayed()).toBe(true);

 });
//9
  it('should check if video is playable', () => {
    
    homePage.GetReadyForYourCruise.click();
    GetReadyForYourCruisePage.prepareForYourCruiseButton.click()
    prepareForYourCruise.getToKnowMyNclVideo.click();
    browser.switchTo().frame(browser.driver.findElement(by.css('div#vid1>iframe')).click())
    browser.sleep(5000)
    
    
})
//10
it('should check if Shore Excursions link is clickable', () => {
    homePage.GetReadyForYourCruise.click();
    shoreExcursions.shoreExcursionsButton.click()
    expect(element(by.css('.btn-cta.btn-primary.btn-large.search-submit')).isDisplayed()).toBe(true)
    browser.sleep(3000)

})

//    describe('Shore Excursions', () => {
    
// //11
// it('should check if all dropdown boxes are present', () => {
//     homePage.GetReadyForYourCruise.click();
//     shoreExcursions.shoreExcursionsButton.click()
//     $$('.chosen-single>span').each(function(el){
//     expect(el.isDisplayed()).toBe(true)

// })
// })
// //12
// it('should check if all 3 dropdown boxes are displayed', () => {
//     homePage.GetReadyForYourCruise.click();
//     shoreExcursions.shoreExcursionsButton.click()
//     expect($$('.chosen-single>span').getText()).toEqual([ 'DESTINATION', 'PORT', 'ACTIVITY TYPE' ])
 
    
// })
// //13
// it('should check if all options in Destionation dropdown box are displayed', () => {
//     homePage.GetReadyForYourCruise.click();
//     shoreExcursions.shoreExcursionsButton.click()
//     $$('.chosen-single>span').get(0).click()
//     $$('#search_destinations_chosen > div > ul > li').each(function(text){
//     expect(text.isDisplayed()).toBe(true)

// })

// })
// //14
// it('should check if Search box is functional inside Destionation dropdown box', () => {
//     homePage.GetReadyForYourCruise.click();
//     shoreExcursions.shoreExcursionsButton.click()
//     $$('.chosen-single>span').get(0).click()
//     element(by.css('#search_destinations_chosen>div>div input')).sendKeys('alaska').sendKeys(protractor.Key.ENTER)

// })
// //15
// it('should check if all options in PORT dropdown box are displayed', () => {
//     homePage.GetReadyForYourCruise.click();
//     shoreExcursions.shoreExcursionsButton.click()
//     $$('.chosen-single>span').get(1).click()
//     $$('#search_ports_chosen>:nth-child(2) >:nth-child(2)>li').each(function(text){
//     expect(text.isDisplayed()).toBe(true)
       
// })

// })
// //16
// it('should check if Search box is functional inside Port dropdown box', () => {
//     homePage.GetReadyForYourCruise.click();
//     shoreExcursions.shoreExcursionsButton.click()
//     $$('.chosen-single>span').get(1).click()
//    element(by.css('#search_ports_chosen>div>div input')).sendKeys('acapulco').sendKeys(protractor.Key.ENTER)
//     browser.sleep(3000)

// })
// //17
// it('should check if all options in ACTIVITY TYPE dropdown box are displayed', () => {
//     homePage.GetReadyForYourCruise.click();
//     shoreExcursions.shoreExcursionsButton.click()
//     $$('.chosen-single>span').get(2).click()
//     $$('#search_activities_chosen>:nth-child(2)>:nth-child(2)>li').each(function(text){
//         expect(text.isDisplayed()).toBe(true)
//     })
// })
// //18
// it('should check if Search box is functional inside ACTIVITY TYPE dropdown box', () => {
//     homePage.GetReadyForYourCruise.click();
//     shoreExcursions.shoreExcursionsButton.click()
//     $$('.chosen-single>span').get(2).click()
//     element(by.css('#search_activities_chosen>div input')).sendKeys('family').sendKeys(protractor.Key.ENTER)
//     browser.sleep(3000)
// })
// //19
// it('should check if FIND EXCURSIONS button is displayed', () => {
//     homePage.GetReadyForYourCruise.click();
//     shoreExcursions.shoreExcursionsButton.click()
//     expect(element(by.buttonText('FIND EXCURSIONS')).isDisplayed()).toBe(true)
// })
// //20
// it('should check if FIND EXCURSIONS button is clickable', () => {
//     homePage.GetReadyForYourCruise.click();
//     shoreExcursions.shoreExcursionsButton.click()
    
//     $('#search_destinations_chosen span').click()
//     element(by.css('#search_destinations_chosen>div input')).sendKeys('Carib').sendKeys(protractor.Key.ENTER)


//     browser.sleep(1000)
//     $('#search_ports_chosen span').click()
//     element(by.css('#search_ports_chosen>div>div input')).sendKeys('boston').sendKeys(protractor.Key.ENTER)
//     browser.sleep(1000)
//     $('#search_activities_chosen span').click()
//     element(by.css('#search_activities_chosen>div input')).sendKeys('family').sendKeys(protractor.Key.ENTER)
//     browser.sleep(1000)
//     element(by.buttonText('FIND EXCURSIONS')).click()
//     expect($('div.infobox >:nth-child(1)').getText().isDisplayed()).toBe(true)
// })

// fit('should check if FIND EXCURSIONS button is clickable', () => {
//     homePage.GetReadyForYourCruise.click();
//     shoreExcursions.shoreExcursionsButton.click()
//     element(by.css('[type="submit"][class="btn-cta btn-primary btn-large search-submit"]')).click()
    
   
//    //browser.switchTo().frame(browser.driver.findElement(by.id('simplemodal-close-img')).click());
  


   
  
//     // $$('.holder').getText().then(function(text){
        
//     // for (var i=0;i<text.length-1;i++){
//     //     browser.sleep(3000)
//     //     $('.bx-next .ngi-icon-chevron-right').click() 
       
//     //    $$('.holder').each(function(x){
        
//     //        x.getText().then(function(list){
//     //            console.log(list)
               
//     //        })
//     //    })

    
//     //   }
      
//     //  })       
    
     
   
   
// })
// });
 });

