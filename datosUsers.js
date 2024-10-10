let url = "https://jsonplaceholder.typicode.com/users";

const obtenerUsaurios = async () => {
    try {
        let response = await fetch(url);
        if(!response.ok){
            throw new Error('Error en la respuesta')
        }
        let data = await response.json();
        pintarUsuarios(data);
    }catch(error){
        console.log(error);
    }
}
obtenerUsaurios();

const pintarUsuarios = (data) => 
{
    let body = ""
    for(let i = data.length - 1 ; i >= 0; i--){
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`;
    }
    document.getElementById("data").innerHTML=body;
}