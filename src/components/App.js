import React from 'react';
import ListaProductos from './productos';
//import '../data-prueba/product'


const App = () => (
  <div>
      <ListaProductos product={ data } />
  </div>
);

const data = [
  {
      "id": 1,
      "name": "Food item #1",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZ0XV3IH9W0-3oywY2EChKSxRvLM5zfmTEJ1spp8rEgWkY7vo",
      "description": "numquam ex voluptas quo\nnatus voluptatibus repudiandae dolorem harum quasi temporibus\nharum sit minima placeat ad rerum molestiae quam nihil",
      "price": 21
    },
    {
      "id": 2,
      "name": "Food item #2",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISu_VT1T7tTyPrIEVJn58643x5pY13nAt8IeFS0Dai0VlRvdU",
      "description": "sed sit quis maiores et\naut atque dolorem quo dolores exercitationem voluptas\nperspiciatis explicabo labore\nconsequatur rerum voluptas quia voluptatum laborum aspernatur eveniet\nnihil reprehenderit illum\nsapiente quia enim non iure dolorum",
      "price": 25
    },
    {
      "id": 3,
      "name": "Food item #3",
      "image": "https://www.hogarmania.com/archivos/201308/postres-lacteos-recetas-xl-321x171x80xX.jpg",
      "description": "deserunt esse sunt quia accusantium rerum officia fugit tempora\nvel consequatur labore corrupti omnis dolores sit\ncupiditate ut id velit consequatur quia recusandae sunt perferendis voluptas",
      "price": 17
    },
    {
      "id": 4,
      "name": "Food item #4",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbY6yCnbs1SbKF_JXWymvIqbanVw_B6m5_B9APk0z6BcQX1PZoQA",
      "description": "aut magni provident corporis accusamus nisi corrupti\ndolore facere voluptates saepe\nunde quos id tempore veritatis praesentium\nporro eius in dolores maxime\nex veritatis quibusdam nam ipsum",
      "price": 20
    },
    {
      "id": 5,
      "name": "Food item #5",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZ7p2SF6CH8RR7OuLm1Nmt4W4PITQMH-dSutLoYDky0DbpoJmYA",
      "description": "tempora ipsam aut ea deserunt ea aut\nmaxime culpa et ab eum\ntenetur vitae delectus et quia voluptate ratione est quos\ncum nobis alias et sint est molestias occaecati voluptas maiores",
      "price": 5
    },
  ];

export default App;
