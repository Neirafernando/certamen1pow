
tinymce.init({
    selector: '#descripcion-reo-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  



const delincuentes = [];
const cargarTabla = ()=>{

    let tbody = document.querySelector("#tbody-tabla");
    tbody.innerHTML = "";
    for(let i=0; i < delincuentes.length; ++i){
    let p = delincuentes[i];
    let tr = document.createElement("tr");
    let tdnumreo = document.createElement("td");
    let tdnombrereo= document.createElement("td");
    let tddetallereo = document.createElement("td");
    let tdciudadreo = document.createElement("td");
    let tdgravedad = document.createElement("td");

    
    tdnumreo.innerText = i + 1;
    tdnombrereo.innerText = p.Nombre;
    

    let gravedad = document.createElement("i");
    if(p.gravedad <= 3 ){
      gravedad.classList.add("fas" ,"fa-meh", "text-dark", "fa-3x", "text-center");
    }else if(p.gravedad >= 4 & p.gravedad <= 6 ){
      gravedad.classList.add("fas" ,"fa-frown-open", "text-secondary", "fa-3x");
    }else if(p.gravedad >= 7 & p.gravedad <= 15){
      gravedad.classList.add("fas" ,"fa-angry", "text-warning", "fa-3x");
    }else if(p.gravedad > 16){
      gravedad.classList.add("fas", "fa-dizzy", "text-danger", "fa-3x");
    }


    let ciudad = document.createElement("i");
    if(p.ciudad == "1"){
        tdciudadreo.innerText = "viña del mar"
    }else if(p.ciudad == "2"){
        tdciudadreo.innerText = "quilpue"
    }else if(p.ciudad == "3"){
        tdciudadreo.innerText="curico"
    }


    tdgravedad.appendChild(gravedad)
    tddetallereo.innerHTML = p.Detalle;
    tr.appendChild(tdnumreo);
    tr.appendChild(tdnombrereo);
    tr.appendChild(tddetallereo);
    tr.appendChild(tdciudadreo);
    tr.appendChild(tdgravedad);
    tbody.appendChild(tr);
    }
};

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
 let nombre = document.querySelector("#nombre-reo-txt").value;
 let ciudad = document.querySelector("#tipo-select").value;
 let detalle = tinymce.get("descripcion-reo-txt").getContent(); 
 let graveadad = document.querySelector("#cant-crimenes-txt").value;
 



 let reo = {};
 reo.Nombre = nombre;
 reo.Detalle = detalle;
 reo.ciudad= ciudad;
 reo.gravedad = graveadad ;

 delincuentes.push(reo); 
 cargarTabla();
 Swal.fire("Tarea exitosa!", " antisocial registrado", "info");

} );
  
