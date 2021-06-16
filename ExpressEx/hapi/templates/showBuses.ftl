<!DOCTYPE html>
<html>
    <head>
        <title>Buses</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
    <body>
        <h2>List of Buses</h2>

        <table>
            <tr>
                <th>Id</th>
                <th>Bus No</th>
                <th>Travels Name</th>
            </tr>

            <#list buses as row>
                <tr>
                    <td>${row.id}</td>
                    <td>${row.bus_no}</td>
                    <td>${row.travesl_name}</td>
                </tr>
            </#list>
        </table>
    </body>
</html>