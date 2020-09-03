module.exports={
    // development,
    // production
    mode: 'production',
    rules:[
        {
            test:/\.scss$/,
            loaders:['style','css','sass']
        }
    ]
}