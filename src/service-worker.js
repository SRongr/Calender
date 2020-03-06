import { register } from 'register-service-worker'
register('/service-worker.js', {
  ready (registration) {
    console.log('Service worker is active.')
  },
  registered (registration) {
    console.log('Service worker has been registered.')
  },
  cached (registration) {
    console.log('Content has been cached for offline use.')
  },
  updatefound (registration) {
    console.log('New content is downloading.')
  },
  updated (registration) {
    console.log('New content is available; please refresh.')
  },
  offline () {
    console.log('No internet connection found. App is running in offline mode.')
  },
  error (error) {
    console.error('Error during service worker registration:', error)
  }
})

// console.log(navigator)
// if ('serviceWorker' in navigator) {
//     // 开始注册service workers
//     navigator.serviceWorker.register('./sw-demo-cache.js', {
//         scope: './'
//     }).then(function (registration) {
//         console.log('注册成功');
//         var serviceWorker;
//         if (registration.installing) {
//             serviceWorker = registration.installing;
//             console.log('安装installing');
//         } else if (registration.waiting) {
//             serviceWorker = registration.waiting;
//             console.log('等待waiting');
//         } else if (registration.active) {
//             serviceWorker = registration.active;
//             console.log('激活active');
//         }
//         console.log('=>serviceWorker:', serviceWorker);
//         if (serviceWorker) {
//             console.log(serviceWorker.state);
//             serviceWorker.addEventListener('statechange', function (e) {
//                 console.log('&emsp;状态变化为', e.target.state);
//             });
//              // 创建信道
//             var channel = new MessageChannel();
//             // port1留给自己
//             channel.port1.onmessage = e => {
//                 console.log('main thread receive message...');
//                 console.log(e);
//             }
//             console.log('给对方', window.RES_MAP);
//             // port2给对方
//             serviceWorker.postMessage(window.RES_MAP, [channel.port1]);
//             serviceWorker.addEventListener('statechange', function (e) {
//                 // logState(e.target.state);
//             });
//         }
//     }).catch(function (error) {
//         console.log('注册没有成功');
//     });
// } else {
//     console.log('不支持');
// }