module.exports = {
    configureWebpack: {
      devServer:{
          proxy:{
              "/api":{
                  target:"http://bb.shoujiduoduo.com",
                  pathRewrite:{
                      "^/api":""
                  }
              }
          }
      }
    }
  }