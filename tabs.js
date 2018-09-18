window.onload = function() {
    
 const  allBtnTab = document.querySelectorAll('.tab-h');
 allBtnTab.forEach(btnTab => btnTab.addEventListener('click', clickBtnTab));
    

 function clickBtnTab(e) {
    const dataTab = e.target.getAttribute('data-tab');
    let tabH = document.getElementsByClassName('tab-h');
    for (let i = 0; i < tabH.length; i++) {
        tabH[i].classList.remove('active');
    }

    e.target.classList.add('active');

    const allTabsBody = document.getElementsByClassName('tab-b');
     
    for (let i = 0; i < allTabsBody.length; i++) {
         if (dataTab == i) {
             allTabsBody[i].style.display = 'block';
         }
         else {
            allTabsBody[i].style.display = 'none';
         }
     }

  }


    const arrowsFront = document.querySelectorAll('#arrow-5-front');
    const arrowsBack = document.querySelectorAll('#arrow-5-back');
    const cardsBack = document.getElementsByClassName('card-5-back');
    const cardsFront = document.getElementsByClassName('card-5-front');

    arrowsFront.forEach(arrowFront => arrowFront.addEventListener('click', swapCard));

    function swapCard(e) {
        
       let dataCard = e.target.getAttribute('data-card');

        for (let i = 0; i < cardsBack.length; i++) {
            if (dataCard == i) {
            cardsBack[i].classList.add('active-5');
        }}
        
        for (let i = 0; i < cardsFront.length; i++) {
            if (dataCard == i) {
            cardsFront[i].classList.remove('active-5');
        }}
    }

    arrowsBack.forEach(arrowBack => arrowBack.addEventListener('click', swapCardBack));

    function swapCardBack(e) {

        let dataCard = e.target.getAttribute('data-card');
        
        for (let i = 0; i < cardsBack.length; i++) {
            if (dataCard == i) {
            cardsBack[i].classList.remove('active-5');
        }}
        
        for (let i = 0; i < cardsFront.length; i++) {
            if (dataCard == i) {
            cardsFront[i].classList.add('active-5');
        }}
    }

}