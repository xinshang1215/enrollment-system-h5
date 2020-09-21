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
            '/api':{
                target:"http://localhost:8088",
                ws: true,
                changeOrigin:true
            }
        }

    }
}