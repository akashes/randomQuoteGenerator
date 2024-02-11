const quoteText = document.querySelector(".quote")
const quoteBtn = document.querySelector('button')
soundBtn=document.querySelector('.sound')
copyBtn=document.querySelector('.copy')
twitterBtn=document.querySelector('.twitter')
const author = document.querySelector('.name')


function randomQuote(){
    const quoteArea = document.querySelector('.quote')
const author = document.querySelector('.name')
quoteBtn.classList.add('loading')
quoteBtn.innerText='Loading Quote...'
    fetch('http://api.quotable.io/random').then((res)=>{
        res.json().then((result)=>{
            console.log(result);
            quoteArea.innerHTML=result.content
            author.innerHTML=result.author
            quoteBtn.innerText="New Quote"
            quoteBtn.classList.remove('loading')
        })
    }).catch((err)=>{
        console.log(err);
    })
}

quoteBtn.addEventListener("click",randomQuote)
soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.inn}`)
    speechSynthesis.speak(utterance)
})

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerText)

})
twitterBtn.addEventListener("click",()=>{
    let tweet =     `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweet,"_blank")

})

