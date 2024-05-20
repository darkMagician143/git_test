let qouteCont = document.querySelector(".qoute");
let author = document.querySelector(".author");
let button = document.querySelector(".qoutebtn");

let qoutes = [
    {
        qoute: "1   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perspiciatis ipsum voluptas deleniti, architecto corrupti beatae, dicta impedit odit nobis nam sint similique vel debitis neque eligendi! Quam, amet? Nisi!",

        person: "Javier Mokamad"
    },
    {
        qoute: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vitae dolore eveniet eos corporis! Necessitatibus consequuntur doloribus ipsum molestias sed magni, voluptates quis provident soluta! Explicabo ea delectus, voluptatem dolorem iure, minus laudantium incidunt at voluptate eveniet iste nihil porro",


        person: "Kumi Kinangina"
    },
    {
        qoute: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur suscipit a nemo sapiente in ullam beatae repellat ducimus ratione.",

        person: "Bobby Gago"
    },
    {
        qoute: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus qui velit aspernatur consequatur saepe libero earum repellendus. Odio ipsa autem, ratione provident veritatis amet molestiae tempora ad aperiam deleniti, exercitationem fuga suscipit est aspernatur nam.",

        person: "Loki Inamo"
    },
    {
        qoute: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quod!",

        person: "Ana Santos"
    }
];

button.addEventListener("click", function(){

    let random = Math.floor(Math.random() * qoutes.length);
    qouteCont.innerText = qoutes[random].qoute;
    author.innerText = qoutes[random].person;
})






