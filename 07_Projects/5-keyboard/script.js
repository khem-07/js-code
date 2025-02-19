const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {
    insert.innerHTML = `
    
    <div class='color'>
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " "? "Space": e.key}</td>
    <td>${e.keyCode }</td>
    <td>${  e.code }</td>
  </tr>
  
 
</table>

    </div>
    
    `;
});


// const insert = document.getElementById('insert');

// // Create the table once and keep adding rows
// insert.innerHTML = `
//     <div class='color'>
//         <table id="keyTable">
//             <tr>
//                 <th>Key</th>
//                 <th>Key Code</th>
//                 <th>Code</th>
//             </tr>
//         </table>
//     </div>
// `;

// const table = document.getElementById('keyTable');

// window.addEventListener('keydown', (e) => {
//     const newRow = document.createElement('tr');

//     newRow.innerHTML = `
//         <td>${e.key === " " ? "Space" : e.key}</td>
//         <td>${e.keyCode}</td>
//         <td>${e.code}</td>
//     `;

//     table.appendChild(newRow); // Append new row instead of replacing content
// });
