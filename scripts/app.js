const btnUnread = document.querySelector('.unread');
const unreadContainer = document.querySelectorAll('.notify-container');
const notify = document.querySelectorAll('.notify');
const count = document.querySelector('.count')
const colorDiv = document.querySelectorAll('.readNotify') 
const BtnCon = document.getElementById('containerDiv')




btnUnread.addEventListener('click',()=>{
    unreadContainer.forEach((UnreadCon)=>{
        UnreadCon.classList.remove('colorContainer')
        UnreadCon.classList.remove('readNotify')
    })
    notify.forEach(dots=>{
        dots.classList.remove('dot')
    })
    counterUnread()
})


unreadContainer.forEach((container) => {
    container.addEventListener('click', () => {
        container.classList.remove('colorContainer');
        const dotsToRemove = container.querySelectorAll('.dot');
        dotsToRemove.forEach((dot) => {
            dot.classList.remove('dot');
        });
        counterUnread();
    });
});



function counterUnread(){
    let counter = 0;
    colorDiv.forEach( div => {
        if(div.classList.contains('colorContainer')){
            counter++;
        }
    })
    count.textContent = counter;
}
counterUnread();


