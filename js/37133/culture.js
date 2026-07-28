function companyVisionAccordion(){var Accordion=function(el,multiple){this.el=el||{};this.multiple=multiple||false;var links=this.el.find('.wmpage73-page1-link');links.on('click',{el:this.el,multiple:this.multiple,},this.dropdown,)};Accordion.prototype.dropdown=function(e){var $el=e.data.el;($this=$(this)),($next=$this.next());$next.slideToggle();$this.parent().toggleClass('wmpage73-page1-open');if(!e.data.multiple){$el.find('.wmpage73-page1-content').not($next).slideUp().parent().removeClass('wmpage73-page1-open')}};new Accordion($('#wmpage73-page1-accordion'),false)}companyVisionAccordion();if(typeof Swiper!=='undefined'){var wmpage73page3Swiper=new Swiper('#wmpage73-page3-Swiper',{slidesPerView:1,spaceBetween:10,autoplay:{disableOnInteraction:false,delay:2000,},loop:true,pagination:{el:'#wmpage73-page3-Swiper .swiper-pagination',clickable:true,},breakpoints:{320:{slidesPerView:2,spaceBetween:10,},768:{slidesPerView:6,spaceBetween:20,},},})};
$(document).ready(function () {
  $('.wmpage05-sec-list a').eq(0).addClass('active');
  $('.wmpage05-sec-list a').click(function () {
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.wmpage05-sec-box').eq(index).show().siblings().hide()
  })
});