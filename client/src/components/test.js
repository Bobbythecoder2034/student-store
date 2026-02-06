
const mockData = [{"id":1,"name":"Janelle","slug":"jblakeslee0","description":"id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc","price":299.99,"inStock":true,"featured":false},
{"id":2,"name":"Thorstein","slug":"tlaban1","description":"blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat","price":59.99,"inStock":false,"featured":true},
{"id":3,"name":"Marrilee","slug":"mfletcher2","description":"nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis","price":4.99,"inStock":true,"featured":false},
{"id":4,"name":"Welby","slug":"wflahive3","description":"volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam","price":14.99,"inStock":true,"featured":true},
{"id":5,"name":"Hyacinth","slug":"hyesenev4","description":"mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur","price":1.99,"inStock":false,"featured":false},
{"id":6,"name":"Bonnie","slug":"bphilpin5","description":"duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget","price":3.29,"inStock":true,"featured":true},
{"id":7,"name":"Weylin","slug":"wvere6","description":"ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis","price":5.49,"inStock":true,"featured":false},
{"id":8,"name":"Arv","slug":"aleech7","description":"interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec","price":79.99,"inStock":false,"featured":true},
{"id":9,"name":"Marco","slug":"mballham8","description":"diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget","price":1.99,"inStock":true,"featured":false},
{"id":10,"name":"Sue","slug":"sseys9","description":"at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget","price":39.99,"inStock":false,"featured":true}]


let search = "jan"

console.log(mockData.filter((person) => person.name.match(new RegExp(search,'i'))))