<html>
<head>
</head>
<title> javascript part </title>
 <body>
  <input type="button" onclick="CreateTableFromJSON()" value="Create Table From JSON" />
    <p id="showData"></p>

      
<script>
    function CreateTableFromJSON() {
        var myBooks = [
            {
                "BookID": "1",
                "BookName": "computer",
                "Category": "Computers",
                "Price": "125.60",
                "url":"https://www.w3schools.com/js/default.asp"
	
            },
            {
                "BookID": "2",
                "BookName": "Asp.Net 4 Blue Book",
                "Category": "Programming",
                "Price": "56.00",
                "url":"https://www.w3schools.com/js/default.asp"
            },
            {
                "BookID": "3",
                "BookName": "Popular Science",
                "Category": "Science",
                "Price": "210.40",
                "url":"https://www.w3schools.com/js/default.asp"
            }
        ];

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < myBooks.length; i++) {
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < myBooks.length; i++) {
            
            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var out = "";
                var tabCell = tr.insertCell(-1);
		if(j==2)
                 {
		out = '<a href="' + myBooks[i].url + '">' + myBooks[i][col[j]] + '</a><br>';

                   tabCell.innerHTML = out;}
                 else
                tabCell.innerHTML = myBooks[i][col[j]];
       
                       
            }
        }
       


               

                

             
          

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
       
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
</script>
</body>
</html>
        
