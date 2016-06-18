# StokeGames.com


## Port Guide

11010 - Web Server
11011 - Styleguide

## TODO

Figure this out:

patched styleguidist:

module: {
    loaders: [
        {
            test: /\.json$/,
            include: [
                getPackagePath('entities'),
                getPackagePath('cheerio'),
                getPackagePath('css-select')
            ],
            loader: 'raw'
        },
        
+


resolve: {
    extensions: ['', '.js', '.jsx', '.json']
