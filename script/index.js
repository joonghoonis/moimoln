
// ===========상단 배너 닫기 이벤트===========
const topBanner = document.querySelector('.top_banner')
const closeBtn = topBanner.querySelector('.close_btn')
closeBtn.addEventListener('click',()=>{
    topBanner.style.display = 'none '
})
//==========footer회사 화살표 버튼 정보 열기 이벤트=======
const companyBtn = document.querySelector('.company_btn')
const companyInfo = document.querySelector('.company_btn_click')
companyBtn.addEventListener('click',()=>{
    companyInfo.classList.toggle('active')
})

//======================스와이퍼===========================
const mainSwiper = new Swiper ('#main_view',{
    autoplay:{delay:5000},
    loop:true,
    pagination:{
        el:'#main_view .swiper-pagination'
    }
})
const newProductSwiper = new Swiper ('#new_product',{
    slidesPerView: 4,
    spaceBetween: 20,
})
const lookBookSwiper = new Swiper ('#look_book_swiper',{
    slidesPerView: 8,
    spaceBetween:20,
    loop:true,
    speed:4000,
    allowTouchMove: false,
    autoplay: {
        delay : 0,
        disableOnInteraction: false,
    }
})
const instaSwiper = new Swiper ('#insta_swiper',{
    slidesPerView:4,
    slidesPerGroup:4,
    spaceBetween:25,
    autoplay: {delay : 4000,},
    scrollbar:{
        el:'#insta_swiper .swiper-scrollbar'
    }
})