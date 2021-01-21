let todoObjects = []
let input = document.querySelector('#input')
let inputBtn = document.querySelector('#addBtn')
let errorMessage = document.querySelector('#small')
let outputP = document.querySelector('#todoText')
let outputBtn = document.querySelector('#trashBtn')
let outputDiv = document.querySelector('#output')

let listing = () => {
todoObjects.forEach(todoObject => {
    outputDiv.innerHTML=''
    let makeList=
    `<div class="addedTodo d-flex justify-content-center mt-5" id="output">
        <p class="savedTodo d-flex justify-content-between rounded" id="todoText">${todoObject.title}
            <button id="trashBtn">
                <i class="fas fa-trash"></i>
            </button>
        </p>
    </div>`
    outputDiv.insertAdjacentHTML('beforebegin', makeList)
})
}

let useFetch = () => {
fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
.then(response => response.json())
.then(data => {
 todoObjects=data;    
 console.log(todoObjects)
 listing()
 })
} 
useFetch()
