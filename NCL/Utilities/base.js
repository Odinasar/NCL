var base=function(){
    this.allOptions=['Prepare for Your Cruise',
    'Online Check-in',
    'Transfers & Getting To The Pier',
    'Shore Excursions',
    'Gifts & More',
    'Onboard Packages',
    'BookSafe Travel Protection',
    'Required Travel Documentation'];


    this.homeUrl='https://www.ncl.com/';

    this.navigateToHome=function(){
        browser.get(this.homeUrl)
    }
};

module.exports=new base();

