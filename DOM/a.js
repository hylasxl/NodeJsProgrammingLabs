const mainList = document.getElementById('listItem')
mainList.style.display = "flex"
mainList.style.flexWrap = "wrap"
const items = [
    {
        name: 'IELTS Cambrigde Academic 15',
        price: 20,
        description: 'no description',
        imgLink: 'https://bizweb.dktcdn.net/thumb/grande/100/283/734/products/cvr-15-aca.jpg?v=1605173282173'
    },
    {
        name: 'IELTS Cambrigde Academic 16',
        price: 11,
        description: 'no description',
        imgLink: 'https://bizweb.dktcdn.net/thumb/grande/100/283/734/products/4653c21405d28df0cace1393301e0b2a.jpg?v=1647422382630'
    },
    {
        name: 'IELTS Cambrigde Academic 17',    
        price: 12,
        description: 'no description',
        imgLink: 'https://bizweb.dktcdn.net/thumb/grande/100/283/734/products/17f.jpg?v=1675655041487'

    },
    {
        name: 'IELTS Cambrigde Academic 18',
        price: 75,
        description: 'no description',
        imgLink: 'https://bizweb.dktcdn.net/100/283/734/products/18aca.jpg?v=1695807113000'
    },
    {
        name: 'IELTS Cambrigde Academic 19',
        price: 34,
        description: 'no description',
        imgLink: 'https://wiseenglish.edu.vn/wp-content/uploads/2023/04/z4253354648619_563caa14535431a1b101773a22fac427.jpg'
    },
   
]

items.map(item => {
    const itemWrapper = document.createElement('div')
    itemWrapper.classList.add('wrapper')
    itemWrapper.style.margin = "5px 10px"
    itemWrapper.style.border = "2px solid #1a2d59"
    itemWrapper.style.padding = "10px"
    itemWrapper.style.borderRadius = "5px"
    itemWrapper.style.width = "250px"

    const name = document.createElement('h1')
    name.innerHTML = item.name
    const price = document.createElement('p')
    price.innerHTML = "Price: " + item.price
    price.style.color = item.price <= 50 ? "red" : "black"
    
    const description = document.createElement('p')
    description.innerHTML = "Description: " + item.description
    const img = document.createElement('img')

    img.src = item?.imgLink
    img.style.objectFit = "cover"
    img.width = 200
    img.height = 200
    img.style.borderRadius = "5px"

    const buyBtn = document.createElement('button')
    
    buyBtn.innerHTML = "Buy this item"
    buyBtn.style.margin = "20px 0"
    buyBtn.classList.add('btn')
    buyBtn.classList.add('btn-primary')
    buyBtn.type = "button"
    buyBtn.style.backgroundColor = "#1a2d59"
    buyBtn.style.color = "#ffffff"
    buyBtn.style.width = "150px"
    buyBtn.style.height = "30px"
    buyBtn.style.fontWeight = "500"
    buyBtn.addEventListener('mouseover',(event)=>{
        event.target.style.transform = 'scale(1.05)';
    })
    buyBtn.addEventListener('mouseleave',(event)=>{
        event.target.style.transform = 'scale(1)';
    })
    buyBtn.style.transition = 'transform 0.2s ease';
    buyBtn.classList.add('buyBtn')

    itemWrapper.appendChild(name)
    itemWrapper.appendChild(price)
    itemWrapper.appendChild(description)
    itemWrapper.appendChild(img)
    itemWrapper.appendChild(buyBtn)
    mainList.appendChild(itemWrapper)
})



