// 画像の透明度を変更するためのコード
const images = document.querySelectorAll('.Image-Combination img');
const TopImframes = document.querySelectorAll('.iframe-style-up');

//const ScrollLinks = document.querySelectorAll('.scroll-link');
const linkSulfur = document.querySelector('a[href="#Sulfur"]');
const linkStormEdge = document.querySelector('a[href="#StormEdge"]');
const linkWindblown = document.querySelector('a[href="#Windblown"]');
const AllGameLinks = [linkSulfur, linkStormEdge, linkWindblown];






//スマホ用の画像位置
const MovingImagesForSP = [
  [
    { left: '2%', top: '100px', scale: '1' , opacity: '1' , zIndex: '2' , boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.5)'},
    { left: '-73%', top: '70px', scale: '0.7' , opacity: '0.5', zIndex: '1' , boxShadow: '0px 0px 5px rgba(0, 0, 0, 0)'},
    { left: '-211%', top: '70px', scale: '0.7', opacity: '0.5', zIndex: '1' , boxShadow: '0px 0px 5px rgba(0, 0, 0, 0)'}
  ],
  [
    { left: '-19%', top: '70px', scale: '0.7' , opacity: '0.5' , zIndex: '1' , boxShadow: '0px 0px 5px rgba(0, 0, 0, 0)'},
    { left: '-94%', top: '100px', scale: '1' , opacity: '1', zIndex: '2' , boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.5)'},
    { left: '-169%', top: '70px', scale: '0.7', opacity: '0.5', zIndex: '1' , boxShadow: '0px 0px 5px rgba(0, 0, 0, 0)'}
  ],
  [
    { left: '23%', top: '70px', scale: '0.7' , opacity: '0.5' , zIndex: '1' , boxShadow: '0px 0px 5px rgba(0, 0, 0, 0)'},
    { left: '-115%', top: '70px', scale: '0.7' , opacity: '0.5', zIndex: '1' , boxShadow: '0px 0px 5px rgba(0, 0, 0, 0)'},
    { left: '-190%', top: '100px', scale: '1', opacity: '1', zIndex: '2' , boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.5)'}
  ]
];

//PC用の画像位置
const  MovingImagesForPC =[
  [
    { left: '31%', top: '45px', scale: '1.2' , opacity: '1' , zIndex: '2' , boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.5)'},
    { left: '10%', top: '5px', scale: '1' , opacity: '0.5', zIndex: '1' , boxShadow: '0px 0px 5px rgba(0, 0, 0, 0)'},
    { left: '-65%', top: '5px', scale: '1', opacity: '0.5', zIndex: '1' , boxShadow: '0px 0px 5px rgba(0, 0, 0, 0)'}
  ],
  [
    { left: '13%', top: '5px', scale: '1' , opacity: '0.5' , zIndex: '1' , boxShadow: '0px 0px 5px rgba(0, 0, 0, 0)'},
    { left: '-8%', top: '45px', scale: '1.2' , opacity: '1', zIndex: '2' , boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.5)'},
    { left: '-29%', top: '5px', scale: '1', opacity: '0.5', zIndex: '1' , boxShadow: '0px 0px 5px rgba(0, 0, 0, 0)'}
  ],
  [
    { left: '49%', top: '5px', scale: '1' , opacity: '0.5' , zIndex: '1' , boxShadow: '0px 0px 5px rgba(0, 0, 0, 0)'},
    { left: '-26%', top: '5px', scale: '1' , opacity: '0.5', zIndex: '1' , boxShadow: '0px 0px 5px rgba(0, 0, 0, 0)'},
    { left: '-47%', top: '45px', scale: '1.2', opacity: '1', zIndex: '2' , boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.5)'}
  ]
]

const WindowMovingImages = [{opacity: '0.5'}]


const allElements = document.querySelectorAll('*');

let mousecheck = true;
let ChangeImage = 0;
let timeoutID = null;
let setIntervalTime=3000;




document.querySelectorAll('*').forEach(element => {
  element.style.transition = 'all 0.3s ease-in-out';

});

const getMovingImagesForCurrentWidth = () => {
  let currentWidth = window.outerWidth;
  return currentWidth <= 768 ? MovingImagesForSP : MovingImagesForPC;
};



window.addEventListener('resize', () => {

  let currentWidth = window.outerWidth;
  let width = currentWidth <= 768 ? MovingImagesForSP : MovingImagesForPC;  

  let WindowMovingImagesData = WindowMovingImages[0];

  ChangeImage = 0;



    for (let index = 0; index < AllGameLinks.length; index++) {

      let imagesData = images[index];
      imagesData[index] = AllGameLinks;
      MovingImagesForCheckData = width[0][index];


  

    for (let i = 1; i <= AllGameLinks.length; i++) {
      
      index = (index === AllGameLinks.length) ? 0 : index;


      imagesData.style.left = MovingImagesForCheckData.left;
      imagesData.style.top = MovingImagesForCheckData.top;
      imagesData.style.transform = `scale(${MovingImagesForCheckData.scale})`;
      imagesData.style.opacity = WindowMovingImagesData.opacity;

    }
  }



mousecheck = false;
lastWidth = currentWidth;

clearTimeout(timeoutID);

timeoutID = window.setTimeout(function(){
    if (currentWidth === lastWidth) {
      mousecheck = true;
      }
    }, 1);
});
setInterval(() => {
  
  

  console.log('チェック:'+mousecheck);
  if(mousecheck){
    AllGameLinks.forEach((link, index) => {

      link.addEventListener('mouseover', () => {
        console.log('オーバー中Chacgr:'+index);
        mousecheck = false;
        ChangeImage = index;
        ImageMovementExecution();
        const timerId = window.setTimeout(function() {
          console.log('オーバー中Chacgr:'+index);
          TopImframes[index].style.opacity = '1';
          images[index].style.opacity = '0.1';
    
          }, 1500);
    
    
      
      link.addEventListener('mouseout', () => {
        
        clearTimeout(timerId);
    
        TopImframes[ChangeImage].style.opacity = '0';
        images[index].style.opacity = '1';
        console.log('アウト中Chacgr:',ChangeImage);
        mousecheck = true;
      });
    });
    });
    ChangeImage++;
  if(ChangeImage >= AllGameLinks.length){
    ChangeImage = 0;
  } 
  ImageMovementExecution();
}
},setIntervalTime);


const ImageMovementExecution = () => {
  let width = getMovingImagesForCurrentWidth();
  


    for (let index = 0; index < AllGameLinks.length; index++) {
      console.log(`リンク${ChangeImage}の初めて`);
     let imagesData = images[index];
         imagesData[index] = AllGameLinks;

      

      MovingImagesForCheckData = width[ChangeImage][index];

      imagesData.style.left = MovingImagesForCheckData.left;
      imagesData.style.top = MovingImagesForCheckData.top;
      imagesData.style.transform = `scale(${MovingImagesForCheckData.scale})`;
      imagesData.style.opacity = MovingImagesForCheckData.opacity;
      imagesData.style.zIndex = MovingImagesForCheckData.zIndex;
      imagesData.style.boxShadow = MovingImagesForCheckData.boxShadow;



    

  }
  


}
  
// スムーズスクロールを実装
// .scroll-link クリック時にスムーズスクロール
// スムーズスクロールを実装
document.querySelectorAll('.scroll-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // デフォルトのリンク動作を防ぐ
      const targetId = this.getAttribute('href').substring(1); // href属性からターゲットIDを取得
      const targetElement = document.getElementById(targetId); // 対応する要素を取得
      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth' // スムーズスクロールを指定
          });
      }
  });
});


