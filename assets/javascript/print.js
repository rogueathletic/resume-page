function openPrintDialogue(){
    $('<iframe>', {
      name: 'myiframe',
      class: 'printFrame'
    })
    .appendTo('body')
    .contents().find('body')
    .append(`
      <h1>Our Amazing Offer</h1>
      <img src='coupon.png' />
    `);
  
    window.frames['myiframe'].focus();
    window.frames['myiframe'].print();
  
    setTimeout(() => { $(".printFrame").remove(); }, 1000);
  };
  
  $('button').on('click', openPrintDialogue);