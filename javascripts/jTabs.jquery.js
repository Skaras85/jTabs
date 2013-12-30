$(function(){
    
(function($){
    $.fn.jTabs = function(params){
        $(this).each(function(i,e){
            var tabsWrapper = $(e),
                tabsHeader = tabsWrapper.find('ul:first');
            
            tabsWrapper.addClass('tabsWrapper');
                
            if(tabsWrapper.is(":not([id])"))
                tabsWrapper.attr('id','tab_'+$('.tabsWrapper').index(tabsWrapper));
            
            if(!tabsWrapper.hasClass('tabsHorizontal') && !tabsWrapper.hasClass('tabsVertical'))
                tabsWrapper.addClass('tabsHorizontal');
        });
        
        $('.tabsWrapper > nav a').click(function(){
            var link = $(this),
                tabsWrapper = $('#'+link.closest('.tabsWrapper').attr('id')),
                tabsContentWrapper = tabsWrapper.find('div:first');
        
            showChosenTab(tabsWrapper,link,tabsContentWrapper);
        });
        
        function showChosenTab(tabsWrapper,link,tabsContentWrapper)
        {
            tabsWrapper.find('nav:first a').removeClass('chosenTab');
            link.addClass('chosenTab');
            
            tabsContentWrapper.children('article').hide();
            tabsContentWrapper.find(link.attr('href')).show();
        }
        
        function recurrentTabFind(tabsWrapper)
        {   
            var higherTabsWrapper = tabsWrapper.parent().closest('.tabsWrapper');
            if(higherTabsWrapper)
            {
                higherTabsWrapper.find('div:first > article').hide();
                higherTabsWrapper.find('nav:first a').removeClass('chosenTab');
                var id = tabsWrapper.closest('article').show().attr('id');
                $('a[href="#'+id+'"]').addClass('chosenTab');
            }
            else
                return;
        }  
        
        if($('.tabsWrapper').length && window.location.hash!='')
        {
            var id = window.location.hash,
                tab = $(id),
                link = $('.tabsWrapper a[href="'+id+'"]'),
                tabsWrapper = link.closest('.tabsWrapper'),
                tabsContentWrapper = tabsWrapper.find('div:first');
            
            showChosenTab(tabsWrapper,link,tabsContentWrapper);
            
            recurrentTabFind(tabsWrapper);
        }
    }
})(jQuery);
})
