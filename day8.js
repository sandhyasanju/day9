var data = [
  {
    sno: 1,
    Sid: 4567,
    Sname: "sandhya",
    gender: "f",
    age: 22,
    salary: 200000,
    Sstatus: "Average"
  },
  {
    sno: 2,
    Sid: 4566,
    Sname: "ajay",
    gender: "m",
    age: 24,
    salary: 100000,
    Sstatus: "notbad"
  },
  {
    sno: 3,
    Sid: 4569,
    Sname: "bhanu",
    gender: "f",
    age: 26,
    salary: 400000,
    Sstatus: "vergood"
  },
  {
     sno: 1,
    Sid: 4568,
    Sname: "chandra",
    gender: "m",
    age: 25,
    salary: 250000,
    Sstatus: "good"
  },
  {
    sno: 11,
    Sid: 4562,
    Sname: "dev",
    gender: "f",
    age: 20,
    salary: 500000,
    Sstatus: "better"
  },
  {
    sno: 8,
    Sid: 4570,
    Sname: "ravi",
    gender: "m",
    age: 35,
    salary: 1100000,
    Sstatus: "excellent"
  }
];
function create()
{
  var table = $('<table id = "table" ></table>').attr('class' , 'table10');
  $("#table").css("border" , '1px');
  var colnames = Object.keys(data[0]);
  var thead = $('<thead></thead>').attr('class' , 'table10');
  for(i = 0 ; i < colnames.length ; i++ )
  {
    var th = $("<th id = 'th'>" + colnames[i] + "<p onclick='sortingI(" + i + ")' class = 'p'>" + "&#x025B4" + "</p>" + "<p onclick = 'sortingD(" + i + ")' class = 'p'>" + "&#x025BE" + "</th>").attr('class' , 'th').attr('class' , 'table10');
    thead.append(th);
  }
  table.append(thead);
  var tbody = $('<tbody id = "tbody"></tbody>').attr('class' , 'table10');
  var l = colnames.length;
  for( var r = 0 ; r < data.length ; r++ )
  {
    var tr = $('<tr></tr>').attr('class' , 'table10');
    for ( var c = 0 ; c < l ; c++ )
    {
      var td = $('<td>' + data[r][colnames[c]] + '</td>').attr('class' , 'table10');
      tr.append(td);
    }
    tbody.append(tr);
  }
  table.append(tbody);
  $("#division").append(table);
}
function sortingI(colid)
{
  var e1 , e2 , i , j , t;
  var columns = Object.keys(data[0]);
  for( i = 0 ; i < data.length ; i++)
  {
    for( j = 0 ; j < data.length-1 ; j++ )
    {
      var k = j+1;
      e1 = data[j][columns[colid]];
      e2 = data[k][columns[colid]];
      if(e1 < e2)
      {
        t = data[j];
        data[j] = data[k];
        data[k] = t;
      }
    }
  }
table(data);
}
function sortingD(colid)
{
  var columns = Object.keys(data[0]);
  for(var i=0; i<data.length;i++)
  {
  for(var j=0;j<data.length-1;j++)
  {
    var e1 = data[j][columns[colid]];
    var e2 = data[j+1][columns[colid]];
      if(e1>e2)
      {
       var t = data[j];
        data[j] = data[j+1];
        data[j+1] = t;

      }
    }
    }
    table(data);
}
function table(d)
{
      var columns=Object.keys(d[0]);
  var i,j;
  for(i=0;i<d.length;i++)
  {

    for(j=0;j<columns.length;j++)
    {
      $('#table tr:eq("'+i+'") td:eq("'+j+'")').html(d[i][columns[j]]).attr('class' , 'table20');
    }
  }
}
function refresh()
{
  location.reload();
}
var columns = Object.keys(data[0]);
var count = columns.length;
$("#textboxes").click(function(){
  for( var c = 0 ; c < count ; c++ )
  {
    var th = '<th>  <input id = "columns" onkeyup = "filter('+c+')" type = "text"> </th>';
    $("#table").append(th);
  }
});

function filter(colid)
{
  var i , j , rowlength , value ;
  var searchterm = $("#columns");
  rowlength = $("#table tr").length;
  for( i = 0 ; i < rowlength ; i++ )
  {
    value = $("table tr:eq("+i+") td:eq("+colid+")").text();
    if( searchterm === value)
    {
      $("#table tr:eq("+i+")").show();
    }
    else {
      $("#table tr:eq("+i+")").hide();
    }
  }
}
