let heading = ['Company', 'Model', 'Memory (GB)', 'Price (RS)'];

let products = [
    ['Samsung', 'Galaxy', 64, 15000],
    ['Nokia', 'S730', 128, 22000],
    ['Xiaomi', 'Note', 32, 12000],
    ['Motorola', 'G10', 32, 15000],
    ['Apple', 'S12', 64, 25000],
];


function clear_table()
{
    let tb = document.getElementById("product_list");
    let tr_count = tb.childElementCount;

    for (let index = tr_count - 1; index > 0; index--) 
    {
        document.getElementById("product_list").deleteRow(index);   
    }
}

function search(event) 
{
    event.preventDefault();

    // debugger;
    clear_table();

    let criteria = document.getElementById("criteria");
    let term = document.getElementById("term");

    let idx_to_search = heading.indexOf(criteria.value);

    const pattern = new RegExp(term.value, 'i');

    for (const row of products) 
    {
        if(pattern.test(row[idx_to_search]))
        {
            add_row(row)
        }
    }

    console.log(criteria, term);
}

function add_row(row) 
{
    var tb = document.getElementById("product_list");
    var tr = document.createElement("tr");
    
    var td_node_arr = []

    for (const item of row) 
    {                
        // console.log(item);                   
        let td = document.createElement("td")                                                
        td.appendChild(document.createTextNode(item));
        td_node_arr.push(td);
    }            

    // console.log(td_node_arr);                     

    // console.log(td_node_arr);

    tr.appendChild(td_node_arr[0]);
    tr.appendChild(td_node_arr[1]);
    tr.appendChild(td_node_arr[2]);
    tr.appendChild(td_node_arr[3]);

    tb.appendChild(tr);

    // form.reset();        
}

function print_header() 
{
    add_row(heading);
}

function page_load()
{
    console.log("Page Loaded");
    
    print_header();

    for (const row of products) 
    {
        // console.log(row);
        add_row(row)
    }
}

window.onload = page_load;


