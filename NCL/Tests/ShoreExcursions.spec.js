var homePage=require('../Pages/Home.page.js')
var GetReadyForYourCruisePage=require('../Pages/Home.page.js')
var base=require('/Users/SMS/Desktop/bigBugs/NCL/Utilities/base.js')
var prepareForYourCruise=require('../Pages/prepareForYourCruise.Page.js')
var shoreExcursions=require('/Users/SMS/Desktop/bigBugs/NCL/Pages/ShoreExcursions.Page.js')

describe('Shore Excursions', () => {
    
    //11
    it('should check if all dropdown boxes are present', () => {
        homePage.GetReadyForYourCruise.click();
        shoreExcursions.shoreExcursionsButton.click()
        $$('.chosen-single>span').each(function(el){
        expect(el.isDisplayed()).toBe(true)
    
    })
    })
    //12
    it('should check if all 3 dropdown boxes are displayed', () => {
        homePage.GetReadyForYourCruise.click();
        shoreExcursions.shoreExcursionsButton.click()
        expect($$('.chosen-single>span').getText()).toEqual([ 'DESTINATION', 'PORT', 'ACTIVITY TYPE' ])
     
        
    })
    //13
    it('should check if all options in Destionation dropdown box are displayed', () => {
        homePage.GetReadyForYourCruise.click();
        shoreExcursions.shoreExcursionsButton.click()
        $$('.chosen-single>span').get(0).click()
        $$('#search_destinations_chosen > div > ul > li').each(function(text){
        expect(text.isDisplayed()).toBe(true)
    
    })
    
    })
    //14
    it('should check if Search box is functional inside Destionation dropdown box', () => {
        homePage.GetReadyForYourCruise.click();
        shoreExcursions.shoreExcursionsButton.click()
        $$('.chosen-single>span').get(0).click()
        element(by.css('#search_destinations_chosen>div>div input')).sendKeys('alaska').sendKeys(protractor.Key.ENTER)
    
    })
    //15
    it('should check if all options in PORT dropdown box are displayed', () => {
        homePage.GetReadyForYourCruise.click();
        shoreExcursions.shoreExcursionsButton.click()
        $$('.chosen-single>span').get(1).click()
        $$('#search_ports_chosen>:nth-child(2) >:nth-child(2)>li').each(function(text){
        expect(text.isDisplayed()).toBe(true)
           
    })
    
    })
    //16
    it('should check if Search box is functional inside Port dropdown box', () => {
        homePage.GetReadyForYourCruise.click();
        shoreExcursions.shoreExcursionsButton.click()
        $$('.chosen-single>span').get(1).click()
       element(by.css('#search_ports_chosen>div>div input')).sendKeys('acapulco').sendKeys(protractor.Key.ENTER)
        browser.sleep(3000)
    
    })
    //17
    it('should check if all options in ACTIVITY TYPE dropdown box are displayed', () => {
        homePage.GetReadyForYourCruise.click();
        shoreExcursions.shoreExcursionsButton.click()
        $$('.chosen-single>span').get(2).click()
        $$('#search_activities_chosen>:nth-child(2)>:nth-child(2)>li').each(function(text){
            expect(text.isDisplayed()).toBe(true)
        })
    })
    //18
    it('should check if Search box is functional inside ACTIVITY TYPE dropdown box', () => {
        homePage.GetReadyForYourCruise.click();
        shoreExcursions.shoreExcursionsButton.click()
        $$('.chosen-single>span').get(2).click()
        element(by.css('#search_activities_chosen>div input')).sendKeys('family').sendKeys(protractor.Key.ENTER)
        browser.sleep(3000)
    })
    //19
    it('should check if FIND EXCURSIONS button is displayed', () => {
        homePage.GetReadyForYourCruise.click();
        shoreExcursions.shoreExcursionsButton.click()
        expect(element(by.buttonText('FIND EXCURSIONS')).isDisplayed()).toBe(true)
    })
    //20
    it('should check if FIND EXCURSIONS button is clickable', () => {
        homePage.GetReadyForYourCruise.click();
        shoreExcursions.shoreExcursionsButton.click()
        
        $('#search_destinations_chosen span').click()
        element(by.css('#search_destinations_chosen>div input')).sendKeys('Carib').sendKeys(protractor.Key.ENTER)
    
    
        browser.sleep(1000)
        $('#search_ports_chosen span').click()
        element(by.css('#search_ports_chosen>div>div input')).sendKeys('boston').sendKeys(protractor.Key.ENTER)
        browser.sleep(1000)
        $('#search_activities_chosen span').click()
        element(by.css('#search_activities_chosen>div input')).sendKeys('family').sendKeys(protractor.Key.ENTER)
        browser.sleep(1000)
        element(by.buttonText('FIND EXCURSIONS')).click()
        expect($('div.infobox >:nth-child(1)').getText().isDisplayed()).toBe(true)
    })
    
    
        
       
       //browser.switchTo().frame(browser.driver.findElement(by.id('simplemodal-close-img')).click());
      
    
    
       
      
        // $$('.holder').getText().then(function(text){
            
        // for (var i=0;i<text.length-1;i++){
        //     browser.sleep(3000)
        //     $('.bx-next .ngi-icon-chevron-right').click() 
           
        //    $$('.holder').each(function(x){
            
        //        x.getText().then(function(list){
        //            console.log(list)
                   
        //        })
        //    })
    
        
        //   }
          
        //  })       
        
         
       
       
})

    