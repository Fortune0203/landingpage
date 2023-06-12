$(function () {
    $(document).scroll(function () {
        const $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-hero');
        } else{
            entry.target.classList.remove('show-hero');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hero');
hiddenElements.forEach((el) => observer.observe(el))

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-ft');
        } else{
            entry.target.classList.remove('show-ft');
        }
    })
})
const hiddenElements2 = document.querySelectorAll('.features-wrapper');
hiddenElements2.forEach((el) => observer2.observe(el))

document.querySelector(".link1").onclick = function receive(){
    // const bkg = document.querySelector(".link1")
    // bkg.style.backgroundColor = '#F9956B'
    // bkg.style.color = '#FFFFFF'

    // const img1 = document.querySelector(".state")
    // img1.setAttribute('src', "images/screenreceive.svg") 
    
    const transferText = document.querySelector(".heading")
    transferText.innerText = "Receive Money"
    // transferText.style.opacity = '1'
    
    const transferPrg = document.querySelector(".prg")
    transferPrg.innerText = "Say goodbye to complicated payment methods and delays. Now, you can easily receive money instantly from anyone, anywhere. Simplify your payment collection with YurWallet using a unique account ID created."
}

document.querySelector(".link2").onclick = function transfer(){
    // const bkg = document.querySelector(".link2")
    // bkg.style.backgroundColor = '#F9956B'
    // bkg.style.color = '#FFFFFF'

    const transferText = document.querySelector(".heading")
    transferText.innerText = "Transfer Money"
    
    const transferPrg = document.querySelector(".prg")
    transferPrg.innerText = "No more worries about delayed or failed transactions. YurWallet enables you to send money effortlessly to any bank of your choice. With just a few taps, you can transfer funds quickly and safely, allowing you to fulfil your financial obligations without any hassles. Enjoy peace of mind knowing that your transactions are completed smoothly and promptly."
}

document.querySelector(".link3").onclick = function fund(){
    // const bkg = document.querySelector(".link3")
    // bkg.style.backgroundColor = '#F9956B'
    // bkg.style.color = '#FFFFFF'

    const transferText = document.querySelector(".heading")
    transferText.innerText = "Fund Wallet"
    
    const transferPrg = document.querySelector(".prg")
    transferPrg.innerText = "Instantly top-up your wallet using your card, USSD codes, or a simple bank transfer. YurWallet ensures that your funds are readily available whenever needed, enabling you to make seamless payments and enjoy uninterrupted services."
}

const buttons = document.querySelectorAll(".btn")
buttons.forEach(active => {
    active.addEventListener("click", () => {
        document.querySelector('.clicked')?.classList.remove('clicked')
        active.classList.add('clicked')
    })
})



