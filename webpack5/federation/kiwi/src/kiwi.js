import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';

// top level await 는 webpack config의 experiment에서 세팅을 해줘야 함. 
const HelloWorldButtonModule = await import('HelloWorldApp/HelloWorldButton');

const HelloWorldButton = HelloWorldButtonModule.default;
const helloworldButton = new HelloWorldButton();
helloworldButton.render();

const heading = new Heading();
heading.render('kiwi');
const kiwiImage = new KiwiImage();
kiwiImage.render();


// await import가 허용이 안 되는 경우 방식. import federation exposed App
// hello-world config에서 정의한 App 이름인 (HelloWorldButton)를 사용해야 함
// import('HelloWorldApp/HelloWorldButton').then(HelloWorldButtonModule => {
//     // HelloWorldButtonModule은 
//     const HelloWorldButton = HelloWorldButtonModule.default;
//     const helloworldButton = new HelloWorldButton();
//     helloworldButton.render();
// })