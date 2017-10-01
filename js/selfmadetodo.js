"use strict"

let list=null;
let listElements = [];

window.onload()=function() {

    list=document.getElementById('list');
    let addNewtodo=document.getElementById('add-new-todo');
    let addBtn=document.getElementById('add-btn');
    let delBtn=document.getElementById('del-btn');

    addBtn.onclick = function () {

        let todovalue=addNewtodo.value;
        addtodo(todovalue);
        showtodo();

        function showtodo() {

            let list.innerHTML="";
            for(var i in listElements)
            {
                makelist(listElements.task[i],listElements.done[i],i);
            }

        }

        function makelist(todoValue,done,id) {

            let lili=document.createElement('list');
            lili.className='list-group-item';
            lili.setAttribute('data-id',id);


            let cbox=document.createElement(input);
            cbox.className='col-1';
            cbox.setAttribute('type','checkbox')
            cbox.onchange=strikespan;

            let spanitem=document.createElement('span');
            spanitem.className='col-8';
            span.innerText = todoValue;
            if(done){
                checkBox.setAttribute('checked','true');
                span.style.textDecoration = 'line-through';
            }


            let icono=document.createElement('i');
            icono.className='col-1 fa fa-times';


        }
        function addtodo(name)
        {
            let addNewtask={
                task:name,done:false;
            };
        }
    }
}
