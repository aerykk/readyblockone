# StokeGames.com

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
            loader: 'json'
        },
