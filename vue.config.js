const autoprefixer = require('autoprefixer')
const pxtoviewport = require('postcss-px-to-viewport')

module.exports = {
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                    autoprefixer,
                    pxtoviewport({
                        viewportWidth:375
                    })
                ]
            }
        }
    },
    devServer:{
        proxy:{
            '/':{
                target:"http://localhost:3000/h5",
                ws: true,
                changeOrigin:true
            }
        }

    }
}