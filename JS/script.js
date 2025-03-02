// Random Color Create in JS
document.getElementById("random-color").addEventListener("click", function(){
  const hexCode = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let color = "#"
  for(let i = 0; i < 6; i++){
    let codes = Math.floor(Math.random() * 15)
    let num  = hexCode[codes]
    color += num
    document.body.style.backgroundColor = color
  }
})
// Date Function in JS

const date = new Date()
const formats = {
  weekday: 'short',
  month: 'short',
  day: '2-digit',
  year: 'numeric',
}

const dateFormat = date.toLocaleDateString("en-US", formats).replace(/, /g , ' ')
const dateSection = document.getElementById("date-format")
const div = document.createElement('div')
div.innerHTML = `<p class="text-[#00303C] text-[19px] font-medium" id="date-format"><b>${dateFormat}</b></p>`
dateSection.appendChild(div)

// GO Blog Site
function goBlogSite(){
  window.location.href = "../blog.html"
}


const completedButtons = document.querySelectorAll("button.btn");
const historySection = document.getElementById("history-section")
for (let completedButton of completedButtons) {
  completedButton.addEventListener("click", function (event) {
    alert("Board Updated Successfully!");

    // Task Assign Button Decrease
    const taskAssignedBtn = parseInt(
      document.getElementById("task-assigned-btn").innerText
    );
    document.getElementById("task-assigned-btn").innerText =
      taskAssignedBtn - 1;
   
    //   CheckBox Button Increase
    const checkBoxBtn = parseInt(
      document.getElementById("checkbox-btn").innerText
    );
    document.getElementById("checkbox-btn").innerText = checkBoxBtn + 1;

    // History Create
    const time = new Date().toLocaleTimeString()
    const cardTitle = event.target.parentNode.parentNode.parentNode.querySelector('h3.card-title').innerText
    const p = document.createElement("p")
    p.innerHTML = `
    <p class='my-4 p-3 bg-[#F4F7FF] rounded-lg opacity-70 font-semibold text-black text-base'>
    You have completed the task ${cardTitle} at ${time}
    </p>
    `
    historySection.appendChild(p)
    
    
      // 2nd Alert after all complete button click
 if(document.getElementById("task-assigned-btn").innerText <= 0){
  alert("congrats!!! you have completed all the current task.")
 }    
  event.target.setAttribute('disabled', true)
  });

}
 
document.getElementById('clear-history').addEventListener("click", function(){
  historySection.innerHTML = ''
})

