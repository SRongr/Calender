self.addEventListener('message', ev => {
    console.log('sw receive message..');
    console.log(ev);
    fileMap = ev.data.RES_MAP;
    var arr1 = [].slice.call(fileMap); // ['a', 'b', 'c']
    // 取main thread传来的port2
    ev.ports[0].postMessage('Hi, hello too');
  });
  
  // var fs = require('fs');
  // console.log(fs);