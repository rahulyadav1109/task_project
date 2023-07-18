var form=document.getElementById('form');
var button=document.getElementById('button')
form.addEventListener('submit', additem);



function additem(e){
    e.preventDefault();
    //Create ul
    var ul=document.createElement('ul');
    ul.className='items';
    
    
    //Create Button
    var new_button=document.createElement('button');
    new_button.id='new_button';
    new_button.className='btn delete-btn btn-sm float-right delete btn-danger';
    new_button.appendChild(document.createTextNode('Delete Expenses'));
    
    //create edit expense button

    var edit_btn=document.createElement('button');
    edit_btn.id='edit_btn';
    edit_btn.className='btn float-right btn-sm edit btn-primary';
    edit_btn.appendChild(document.createTextNode('Edit Expenses'));
    //Get Input Value
    
    var newItem = document.getElementById('Amount').value;
    var newItem2 = document.getElementById('Description').value;
    var newItem3 = document.getElementById('Category').value;
    // Create new li element
    
    var li= document.createElement('li');
    li.className='list-group-item';
    // Add text node input value
    li.appendChild(document.createTextNode(newItem+'-'));
    li.appendChild(document.createTextNode(newItem2+'-'));
    li.appendChild(document.createTextNode(newItem3+'  '));
    li.appendChild(new_button);
    li.appendChild(edit_btn);
    form.insertAdjacentElement('afterend',ul);
    ul.appendChild(li);
    
    //delete button function
    document.getElementById('new_button').addEventListener('click', delete_expense)
    document.getElementById('edit_btn').addEventListener('click',edit_value)
    function delete_expense(e){
        var li=e.target.parentElement;
        ul.removeChild(li);
    }

    //edit button function
    function edit_value(e){
        e.preventDefault();
        var li=e.target.parentElement;
        ul.removeChild(li);
        document.getElementById('Amount').value=newItem;
        document.getElementById('Description').value=newItem2;
        document.getElementById('Category').value=newItem3;

        
    }
}


