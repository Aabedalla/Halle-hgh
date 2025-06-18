// -----------السلايدر الأول ---------------
function scrollSlider(direction) {
    const slider = document.getElementById('slider');
    const scrollAmount = 320; // عرض البطاقة + هامش
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

// -----------السلايدر الثاني ---------------

  function scrollSlider2(direction) {
    const slider = document.getElementById('slider2');
    const scrollAmount = 320; // عرض البطاقة تقريبًا
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

  // -----------السلايدر الثالث ---------------

    function scrollSlider3(direction) {
    const slider = document.getElementById('slider3');
    const scrollAmount = 320; // عرض البطاقة تقريبًا
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }


//   --------------تحديد لعدد الاحرف------------

function cardId(cardid){
  const element = document.getElementById(cardid);
  const fullText = element.innerText;
  const maxLength = 120;

  if (fullText.length > maxLength) {
    element.innerText = fullText.substring(0, maxLength) + '...';
  }
}
cardId('trimmed-text')