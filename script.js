var input = document.querySelector('#formGroupExampleInput');
var myTable = document.getElementById("myTable");

document.querySelector('.savebtn').addEventListener('click', ()=> {
        var currentIndex = myTable.rows.length;
        var task = input.value;
        let template =`
                        <tr>
                            <td>${currentIndex}</td>
                            <td>${task}</td>
                            <td>"Pending"</td>
                            <td>
                                <button class="btn btn-danger" >
                                    Delete
                                </button>
                                <button class="btn btn-success" >
                                    Finished
                                </button>
                            </td>
                        </tr>`;
        myTable.innerHTML +=template;

  });

  myTable.addEventListener('click',(e)=>{
        if(!e.target.classList.contains('btn-danger'))
        {
            return;
        }
        const btn = e.target;
        btn.closest('tr').remove();

  })

  myTable.addEventListener('click',(e)=>{
    if(!e.target.classList.contains('btn-success'))
    {
        return;
    }
    const btn = e.target;
    btn.closest('tr').style.backgroundColor = "#D0F0C0";
    btn.closest('tr').cells[2].innerText = "Completed";
    var taskDone = btn.closest('tr').cells[1].innerText;
    btn.closest('tr').cells[1].innerHTML = `<strike>${taskDone}</strike>`;
    
})