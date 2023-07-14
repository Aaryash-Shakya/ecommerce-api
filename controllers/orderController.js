const OrderItem = require('../models/orderItemModel')
const Order = require('../models/orderModel')

// post model
exports.postOrder = async (req, res) => {
    // post data to order item model and store id of that data
    const orderItemIds = Promise.all(req.body.orderItems.map(async orderItemData => {
        let newOrderItem = new OrderItem({
            quantity: orderItemData.quantity,
            product: orderItemData.product
        })
        newOrderItem = await newOrderItem.save()
        return newOrderItem._id
    }))
    const orderItemIdResolved = await orderItemIds
    // calculate total price
    const totalAmount =await Promise.all(orderItemIdResolved.map(async orderId=>{
        const itemOrder = await OrderItem.findById(orderId).populate('product','productPrice')
        const total = itemOrder.quantity * itemOrder.product.productPrice
        return total
    }))
    const totalPrice = totalAmount.reduce((acc,currentVal)=>acc+currentVal,0) // initial acc val = 0

    // post data to order model
    let order = new Order({
        orderItems: orderItemIdResolved,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        totalPrice: totalPrice,
        user: req.body.user
    })
    order = await order.save()
    if(!order){
        return res.status(400).json({error: 'something went wrong'})
    }
    res.send(order)
}