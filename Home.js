
const searchinput = () => {
  
  let filter = document.getElementById('searchinput').value.toUpperCase();

  let table = document.getElementById('table_data');

  let tr = table.getElementsByTagName('tr');

  for(var i = 0; i < tr.length; i++) {
    let a = tr[i].getElementsByTagName('font1')[0];

    let textValue = a.textContent || a.innerHTML;

    if(textValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = 'block';
    } else {
      tr[i].style.display = 'none';
    }

  }
}