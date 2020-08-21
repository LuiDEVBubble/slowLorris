let expandLorris = () =>
{
    let expandedParagraph = "Slow lorises are a group of several species\
    of trepsirrhine primates which make up the genus Nycticebus.\
    They have a round head, narrow snout, large eyes, and a variety of\
    distinctive coloration patterns that are species-dependent. \
    The hands and feet of slow lorises have several\
    adaptations that give them a pincer-like grip and enable them to grasp \
    branches for long periods of time.\
    Slow lorises have a toxic bite, a rare trait among mammals.";

    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

let placeAList = () =>
{
 
    listToPlace = "This is my list of loris: <ol><li>Slow loris<br /> <img src='lorisPhotos/slowLorris.jpg' width='500' height='300'> </li><br />\
    <li>Fast loris<br /> <img src='lorisPhotos/fastLoris.jpg' width='500' height='300'></li><br />\
    <li>Just-right loris<br /> <img src='lorisPhotos/regularLoris.png' width='500' height='300'></li></ol>;"
    document.getElementById("lorisList").innerHTML = listToPlace;
}