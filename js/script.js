let notas = prompt("Nota: ")

switch(notas.toUpperCase()){
    case "A":
        alert ("A -> Excelente");
        break;

    case "B":
        alert ("B -> Ótimo");
        break;

    case "C":
        alert ("C -> Bom");
        break;

    case "D":
        alert ("D -> Regular");
        break;

    case "E":
        alert ("E -> Ruim")
        break;

    case "F":
        alert ("F -> Nos vemos de novo ano que vem...")
        break;

    default:
        alert ("A nota inserida é errada!");
        break;

}