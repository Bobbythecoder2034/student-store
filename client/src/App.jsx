// import {useState, useEffect} from 'react'

import Navbar from './components/Navbar.jsx'
// import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Test from './pages/Test.jsx'
// import Detail from './pages/Detail.jsx'
// import Testimonials from './pages/Testimonials.jsx'
// import Order from './pages/Order.jsx'

const mockData = [
  {
  "_id": {
    "$oid": "697d16e7e0945a7ece358dbd"
  },
  "name": "Sawyer",
  "slug": "https://cornell.edu/vitae/nisl/aenean.aspx?accumsan=dignissim&felis=vestibulum&ut=vestibulum&at=ante&dolor=ipsum&quis=primis&odio=in&consequat=faucibus&varius=orci&integer=luctus&ac=et&leo=ultrices&pellentesque=posuere&ultrices=cubilia&mattis=curae&odio=nulla&donec=dapibus&vitae=dolor&nisi=vel&nam=est&ultrices=donec&libero=odio&non=justo&mattis=sollicitudin&pulvinar=ut&nulla=suscipit&pede=a&ullamcorper=feugiat&augue=et&a=eros&suscipit=vestibulum&nulla=ac&elit=est&ac=lacinia&nulla=nisi&sed=venenatis&vel=tristique&enim=fusce&sit=congue&amet=diam&nunc=id&viverra=ornare&dapibus=imperdiet&nulla=sapien&suscipit=urna&ligula=pretium&in=nisl&lacus=ut&curabitur=volutpat&at=sapien&ipsum=arcu&ac=sed&tellus=augue&semper=aliquam&interdum=erat&mauris=volutpat&ullamcorper=in&purus=congue&sit=etiam&amet=justo&nulla=etiam&quisque=pretium&arcu=iaculis&libero=justo&rutrum=in&ac=hac&lobortis=habitasse&vel=platea&dapibus=dictumst&at=etiam&diam=faucibus&nam=cursus",
  "description": "Quick oatmeal cups with banana and nut flavor, great for breakfast.",
  "price": 2.99,
  "category": "Food - Breakfast",
  "inStock": true,
  "featured": true
},
{
  "_id": {
    "$oid": "697d16e7e0945a7ece358dbf"
  },
  "name": "Nobe",
  "slug": "http://state.gov/sapien.json?posuere=lobortis&cubilia=sapien&curae=sapien&mauris=non&viverra=mi&diam=integer&vitae=ac&quam=neque&suspendisse=duis&potenti=bibendum&nullam=morbi&porttitor=non&lacus=quam&at=nec&turpis=dui&donec=luctus&posuere=rutrum&metus=nulla&vitae=tellus&ipsum=in&aliquam=sagittis&non=dui&mauris=vel&morbi=nisl&non=duis&lectus=ac&aliquam=nibh&sit=fusce&amet=lacus&diam=purus&in=aliquet&magna=at&bibendum=feugiat&imperdiet=non&nullam=pretium&orci=quis&pede=lectus&venenatis=suspendisse&non=potenti&sodales=in",
  "description": "Spicy and tangy chili sauce for adding heat to any dish.",
  "price": 2.99,
  "category": "Food - Condiments",
  "inStock": true,
  "featured": true
},
{
  "_id": {
    "$oid": "697d16e7e0945a7ece358dbc"
  },
  "name": "Dianne",
  "slug": "http://seattletimes.com/consequat.jsp?ipsum=maecenas&praesent=pulvinar&blandit=lobortis&lacinia=est&erat=phasellus&vestibulum=sit&sed=amet&magna=erat&at=nulla&nunc=tempus&commodo=vivamus&placerat=in&praesent=felis&blandit=eu&nam=sapien&nulla=cursus&integer=vestibulum&pede=proin&justo=eu&lacinia=mi&eget=nulla&tincidunt=ac&eget=enim&tempus=in&vel=tempor&pede=turpis&morbi=nec&porttitor=euismod&lorem=scelerisque&id=quam&ligula=turpis&suspendisse=adipiscing&ornare=lorem&consequat=vitae&lectus=mattis&in=nibh&est=ligula&risus=nec&auctor=sem&sed=duis&tristique=aliquam&in=convallis&tempus=nunc&sit=proin&amet=at",
  "description": "Durable gardening gloves with reinforced fingertips.",
  "price": 15.99,
  "category": "miniatures",
  "inStock": true,
  "featured": false
},
{
  "_id": {
    "$oid": "697d16e7e0945a7ece358dbe"
  },
  "name": "Renate",
  "slug": "https://cnbc.com/in/congue/etiam/justo/etiam/pretium.js?ut=massa&suscipit=volutpat&a=convallis&feugiat=morbi&et=odio&eros=odio&vestibulum=elementum&ac=eu&est=interdum&lacinia=eu&nisi=tincidunt&venenatis=in&tristique=leo&fusce=maecenas&congue=pulvinar&diam=lobortis&id=est&ornare=phasellus&imperdiet=sit&sapien=amet&urna=erat&pretium=nulla&nisl=tempus&ut=vivamus&volutpat=in&sapien=felis&arcu=eu&sed=sapien&augue=cursus&aliquam=vestibulum&erat=proin&volutpat=eu&in=mi&congue=nulla&etiam=ac&justo=enim&etiam=in&pretium=tempor&iaculis=turpis&justo=nec&in=euismod&hac=scelerisque",
  "description": "Creamy vanilla fudge, a sweet treat for all occasions.",
  "price": 4.49,
  "category": "miniatures",
  "inStock": false,
  "featured": true
},
{
  "_id": {
    "$oid": "697d16e7e0945a7ece358dc0"
  },
  "name": "Royall",
  "slug": "http://tinypic.com/mollis/molestie/lorem/quisque/ut/erat.png?at=eu&lorem=magna&integer=vulputate&tincidunt=luctus&ante=cum&vel=sociis&ipsum=natoque&praesent=penatibus&blandit=et&lacinia=magnis&erat=dis&vestibulum=parturient&sed=montes&magna=nascetur&at=ridiculus&nunc=mus&commodo=vivamus&placerat=vestibulum&praesent=sagittis&blandit=sapien&nam=cum&nulla=sociis&integer=natoque&pede=penatibus&justo=et&lacinia=magnis&eget=dis&tincidunt=parturient&eget=montes&tempus=nascetur&vel=ridiculus&pede=mus&morbi=etiam&porttitor=vel&lorem=augue&id=vestibulum&ligula=rutrum&suspendisse=rutrum&ornare=neque&consequat=aenean&lectus=auctor&in=gravida&est=sem&risus=praesent&auctor=id&sed=massa&tristique=id&in=nisl&tempus=venenatis&sit=lacinia&amet=aenean&sem=sit&fusce=amet&consequat=justo&nulla=morbi&nisl=ut&nunc=odio&nisl=cras&duis=mi&bibendum=pede&felis=malesuada&sed=in&interdum=imperdiet&venenatis=et&turpis=commodo&enim=vulputate&blandit=justo&mi=in",
  "description": "A sweet and spicy sauce ideal for spring rolls or chicken nuggets.",
  "price": 2.99,
  "category": "functional-parts",
  "inStock": true,
  "featured": true
}]
// const parsed = JSON.parse(mockData)
// console.log(typeof(mockData))


const App = () => {
    return (
      <div className="app">
        <Navbar/>

        <main>
          <Products products={mockData}/>
            {/* <Test/> */}
          {/* hello 4 */}
        </main>
      </div>
    )
}

export default App
