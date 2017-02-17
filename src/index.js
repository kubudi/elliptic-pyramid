import 'jquery';
import 'bootstrap-sass';
import './scss/style.scss';

// New contributers should add themselves as new object to the array.

const contributers = [
    {
      userName: "@kubudi",
      url: "https://www.usenix.org/system/files/login-logout_1305_mickens.pdf",
      urlName: "The Saddest Moment",
      className: "list-group-item list-group-item-action"
    },
    {
      userName: "@hsnthn",
      url: "https://goo.gl/riWguv",
      urlName: "Meaning of Life",
      className: "list-group-item list-group-item-action"
    },
    {
      userName: "@fsw",
      url: "https://engineering.riotgames.com/news/trip-down-lol-graphics-pipeline",
      urlName: "A Trip Down The LoL Graphics Pipeline",
      className: "list-group-item list-group-item-action"
    },
    {
      userName: "@serpilacar",
      url: "http://www.planetary.org/explore/space-topics/earth/pale-blue-dot.html",
      urlName: "Arrogance Is Bliss",
      className: "list-group-item list-group-item-action"
    }
  ]

// For loop to iterate over all contributers.

  for (var i = 0; i < contributers.length; i++) {
    const div = document.createElement('div');
    div.setAttribute('class','list-group');
    const link = document.createElement('a');
    link.href = contributers[i].url;
    link.setAttribute('class', contributers[i].className);
    link.innerHTML = contributers[i].urlName;
    const span = document.createElement('span');
    span.setAttribute('class', 'badge badge-default badge-pill');
    span.innerHTML = contributers[i].userName;
    link.appendChild(span);
    div.appendChild(link);
    document.querySelector('#container').appendChild(div);
}
