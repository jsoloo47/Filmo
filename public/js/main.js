const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const randomButton = document.querySelector('#random')
const todoComplete = document.querySelectorAll('span.completed')

randomButton.addEventListener('click', () => location.reload())

// On Click, #movieName (invisible text box) for a form, gets the value of the randomly generated movie title.
document.getElementById('watchlist').addEventListener('click',changeName)
function changeName(){
    document.getElementById('movieName').value = document.querySelector('#incoming-title').innerHTML
 }


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteMovie)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteMovie(){
    const movieTitleId = this.parentNode.dataset.id;
    console.log(movieTitleId);
    try{
        const response = await fetch('watchlist/deleteMovie', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieTitleIdFromJSFile': movieTitleId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const movieTitleId = this.parentNode.dataset.id
    try{
        const response = await fetch('watchlist/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieTitleIdFromJSFile': movieTitleId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const movieTitleId = this.parentNode.dataset.id
    try{
        const response = await fetch('watchlist/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieTitleIdFromJSFile': movieTitleId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}