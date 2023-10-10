(function(){
  const personalInfoContent = document.querySelector('.personal-info-content');
  const personalInfoImg = document.querySelector('.personal-info-img');
  const personalInfoParagraph = [...document.querySelectorAll('.personal-info-show')];

  personalInfoContent.addEventListener('click',()=>{

    personalInfoParagraph.forEach(paragraph => {

      let height = 0;
      paragraph.classList.toggle('show');      

      if(paragraph.classList.contains('show')){
        height = paragraph.scrollHeight;
        personalInfoImg.setAttribute('src','../Img/minus-icon.svg');
      }else{ personalInfoImg.setAttribute('src','../Img/plus-icon.svg'); }

      paragraph.style.height = `${height}px`;
    })

  });

})();