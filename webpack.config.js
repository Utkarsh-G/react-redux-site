const path = require("path");

module.exports = {
	mode:"development", // which mode, dev or prod etc
	entry:{ //entry point
		app: path.resolve(__dirname, "src")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename:"bundle.js", // what to output
        publicPath:"/" //??
    },
    resolve: {
        extensions:['.js','.jsx'] //will need to extend for .css .less etc.
    },
    module:{ //we tell it to use babel. Could use another tool like ES6-ify loader.
        rules:[{
            test: /\.jsx?/,
            loader: 'babel-loader'
        }]
    }

};