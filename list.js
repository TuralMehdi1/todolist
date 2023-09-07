

let input= document.querySelector('#inputx');
let btn = document.querySelector('.addTask  > button');

btn.addEventListener('click', addList)
function addList(e){
    let not =document.querySelector('.not');
    let yes =document.querySelector('.yes');

    let newList= document.createElement('li');
    let checkBtn = document.createElement('button');
    const delBtn =document.createElement('button');

    checkBtn.innerHTML ='<i class="fa-solid fa-check"></i>';
    delBtn.innerHTML ='<i class="fa-solid fa-trash"></i>';

    if(input.value !==''){
        newList.textContent =input.value;
        input.value = '';
        not.appendChild(newList);
        newList.appendChild(checkBtn);
        newList.appendChild(delBtn);
    }
     
    checkBtn.addEventListener('click',function(){
        let parent= this.parentNode;
        parent.remove();
        yes.appendChild(parent);
        checkBtn.style.display ='none';
    });

    delBtn.addEventListener('click',function(){
        let parent=this.parentNode;
        parent.remove();
        

    })
}