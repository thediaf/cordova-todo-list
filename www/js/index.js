function addTask() 
{
    let inputElement = document.getElementById('task');
    let inputContent = inputElement.value;

    let new_item = document.createElement('li');

    let new_item_label = document.createElement('a');
    new_item_label.innerHTML = inputContent;

    new_item.appendChild(new_item_label);
    
    let list = document.getElementById('listTask');
    list.appendChild(new_item);

    inputElement.value = '';
    inputElement.focus();

    // themeroller.jquerymobile.com

    let task_done = document.getElementById('TasksDone');

    $(new_item).on('swiperight', function() {
        //$this.toggleClass("termine");
        if(new_item.parentElement.id == 'listTask'){
          task_done.appendChild(new_item);
        }
        else{
            list.appendChild(new_item);
        }
      });

    $(new_item).on('swipeleft', function(){
        // this.remove();
        $(new_item).slideUp('slow', function(){
          this.remove();
        });
      });


    
    $(list).listview('refresh');
}

function resetList() 
{
    let listTask = document.getElementById('listTask');

    while (listTask.firstChild) {
        listTask.removeChild(listTask.firstChild);
    }
}
