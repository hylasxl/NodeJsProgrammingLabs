const apiUrl = 'https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&version=home-persionalized&trackity_id=178728e9-55b9-a5c7-3105-5c592e9fb6ba&category=8322&page=1&from=header_keyword&urlKey=nha-sach-tiki'


const fetchTikiData = async () => {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",

            },
        });


        return response.json()
    } catch (error) {
        console.error('Error fetching Tiki data:', error);
        return null;
    }
};


fetchTikiData()
    .then((data) => {
        localStorage.setItem("BookData", data.data)
        renderView(data.data)
    })
    .catch(error => console.error(error));


const shortenName = (name) => {
    if (name.length >= 55) {
        name = String(name).substring(0, 50)
    }
    return name
}

const addtoCart = (data) => {
    console.log(data);
    const sessionItem = JSON.parse(sessionStorage.getItem("Cart"))
    let items = sessionItem || []
    let itemExisted = false;
    items.forEach(element=>{
        if(element.id===data.id){
            element.quantity++;
            itemExisted = true
        }
    })
    if(!itemExisted){
        let newItem = {
            id: data.id,
            name: data.name,
            image: data.image,
            quantity: 1
        }
        items.push(newItem)
    }
    sessionStorage.setItem("Cart", JSON.stringify(items))
}

const body = document.getElementsByTagName('body')[0]

const wrapper = document.createElement('div')
wrapper.style.display = "flex"
wrapper.style.flexWrap = "wrap"
wrapper.style.backgroundColor = "#efefef"
body.appendChild(wrapper)
body.style.fontFamily = ["Inter"]

function formatNumberWithCurrency(number) {
    let parts = number.toString().split(".");
    let integerPart = parts[0];
    let result = '';
    while (integerPart.length > 3) {
        result = '.' + integerPart.slice(-3) + result;
        integerPart = integerPart.slice(0, -3);
    }
    result = integerPart + result;
    if (parts.length === 2) {
        result += '.' + parts[1];
    }
    result += '₫';
    return result;
}

function addHyphenAndPercent(inputString) {
    return '-' + inputString + '%';
}


const renderView = (data) => {
    data.map((item) => {
        let badge = [], footerBadge = []
        const acceptedBagdeCodes = ['authentic_brand', 'is_hero']
        const acceptedFooterBagdeCodes = ['tikinow', 'delivery_info_badge']

        const itemCard = document.createElement('div')

        itemCard.style.height = "420px"
        itemCard.style.width = "200px"
        itemCard.style.margin = "5px"
        itemCard.style.backgroundColor = "#ffffff"

        const productImage = document.createElement('img')
        productImage.width = 200
        productImage.height = 200
        productImage.style.objectFit = "cover"
        productImage.src = item.thumbnail_url

        const bookDetail = document.createElement('div')
        bookDetail.style.padding = "5px"
        bookDetail.style.display = 'flex'
        bookDetail.style.flexDirection = 'column'
        bookDetail.style.justifyContent = 'space-between'

        const bookDetailUpper = document.createElement('div')
        bookDetailUpper.style.display = "flex"
        bookDetailUpper.style.flexDirection = "column"
        bookDetailUpper.style.justifyContent = 'space-between'
        const bookDetailFooter = document.createElement('div')
        bookDetailFooter.style.paddingBottom = '15px'

        const badges = item.badges_new
        badges.forEach(element => {
            const badgeCode = element.code
            if (acceptedBagdeCodes.includes(badgeCode)) {
                badge.push({
                    code: element.code,
                    icon: element.icon
                })
            }
            if (acceptedFooterBagdeCodes.includes(badgeCode)) {
                footerBadge.push({
                    code: element.code,
                    icon: element?.icon,
                    text: element.text
                })
            }
        });

        const badgeList = document.createElement('div')
        badgeList.style.display = "flex"
        badgeList.style.gap = "5px"
        badgeList.style.padding = "5px"

        badge.forEach(item => {
            const badgeIcon = document.createElement('div')
            const badgeImg = document.createElement('img')
            badgeImg.src = item.icon
            badgeImg.style.objectFit = "cover"
            badgeImg.style.height = '20px'
            badgeIcon.append(badgeImg)
            badgeList.append(badgeIcon)
        })


        const bookName = shortenName(item.name)

        const bookNameElement = document.createElement('p')
        bookNameElement.innerHTML = bookName
        bookNameElement.style.fontSize = '12px'
        bookNameElement.style.height = "20px"

        const productsSoldQuantity = document.createElement('p')
        const productsSoldText = item?.quantity_sold?.text || ""
        productsSoldQuantity.innerHTML = productsSoldText
        productsSoldQuantity.style.fontSize = '10px'
        productsSoldQuantity.style.color = 'rgb(128, 128, 137)'

        const HSeperator = document.createElement('hr')
        HSeperator.style.color = 'rgb(128, 128, 137)'
        HSeperator.style.margin = 0
        HSeperator.style.padding = 0

        const footerBadgeContainer = document.createElement('div')
        footerBadgeContainer.style.display = "flex"
        footerBadgeContainer.style.flexDirection = "row"
        // footerBadgeContainer.style.justifyContent = "center"
        footerBadgeContainer.style.height = "30px"
        footerBadgeContainer.style.gap = "3px"
        footerBadgeContainer.style.alignItems = "center"
        const footerBadgeDisplay = document.createElement('div')
        const footerBadgeFirstItem = footerBadge[0]
        const footerBadgeIcon = document.createElement('img')
        const footerBadgeText = document.createElement('p')
        footerBadgeText.innerHTML = footerBadgeFirstItem.text
        footerBadgeText.style.fontSize = "10px"
        footerBadgeIcon.src = footerBadgeFirstItem?.icon
        footerBadgeIcon.style.display = footerBadgeFirstItem?.icon ? "inline-block" : "none"
        footerBadgeIcon.style.objectFit = "cover"
        footerBadgeIcon.style.height = '20px'
        footerBadgeDisplay.append(footerBadgeIcon)

        footerBadgeContainer.append(footerBadgeDisplay)
        footerBadgeContainer.append(footerBadgeText)

        const bookPriceWrapper = document.createElement('div')
        bookPriceWrapper.style.display = "flex"
        bookPriceWrapper.style.alignItems = "center"
        bookPriceWrapper.style.gap = '5px'
        const bookPrice = document.createElement('p')
        bookPrice.innerHTML = formatNumberWithCurrency(item.price)
        bookPrice.style.fontSize = '16px'
        bookPrice.style.fontWeight = 'bold'
        bookPriceWrapper.append(bookPrice)
        if (item.discount_rate > 0) {
            const bookPriceDiscountWrapper = document.createElement('div')
            bookPriceDiscountWrapper.style.display = "inline-block"
            bookPriceDiscountWrapper.style.height = "18px"
            bookPriceDiscountWrapper.style.padding = "0 4px"
            bookPriceDiscountWrapper.style.background = "rgb(245, 245, 250)"
            bookPriceDiscountWrapper.style.borderRadius = "1000px"
            bookPriceDiscountWrapper.style.color = "rgb(39, 39, 42)"
            bookPriceDiscountWrapper.style.fontSize = "12px"
            bookPriceDiscountWrapper.style.fontWeight = "500"
            bookPriceDiscountWrapper.style.lineHeight = "150%"
            bookPriceDiscountWrapper.innerHTML = addHyphenAndPercent(item.discount_rate)
            bookPriceWrapper.append(bookPriceDiscountWrapper)

        }

        const addToCartButton = document.createElement('button')
        addToCartButton.innerHTML = "Add to cart"

        addToCartButton.addEventListener('click', () => addtoCart(
            {
                id: item.id,
                name: item.name,
                image: item.thumbnail_url,
            }
        ))

        bookDetailUpper.append(badgeList)
        bookDetailUpper.append(bookNameElement)
        bookDetailUpper.append(productsSoldQuantity)
        bookDetailUpper.append(bookPriceWrapper)
        bookDetailUpper.append(addToCartButton)

        bookDetailFooter.append(HSeperator)
        bookDetailFooter.append(footerBadgeContainer)

        bookDetail.append(bookDetailUpper)
        bookDetail.append(bookDetailFooter)

        itemCard.appendChild(productImage)
        itemCard.appendChild(bookDetail)

        wrapper.appendChild(itemCard)
    })

}
