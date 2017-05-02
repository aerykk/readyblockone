const bookshelf = app.get('bookshelf')

export const Follower = require('./Models/Follower')

export const User = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: ['createdAt', 'updatedAt'],
    followers: function() {
        return this.morphMany(Follower, 'followable', ['followableType', 'followableId'])
    },
    achievements: function() {
        return this.hasMany(Data, 'primaryId').query({where: {primaryClassName: 'User', primaryFieldName: 'achievements'}})
    }
    // username
    // password
    // setsCreated
    // setsEnrolled
    // setsFinished
    // email
    // fullName
    // location
    // bio
    // createdAt
    // updatedAt
    // useMicrophone
    // useSpeaker
    // useSoundEffects
    // useVoiceAutoplay
    // role (roleId)
    // has_many badges
    // has_many memories
    // has_many
})

export const UserRole = bookshelf.Model.extend({
    tableName: 'userRoles'
    // title
})

export const Rating = bookshelf.Model.extend({
    tableName: 'ratings',
    // key - rating
    // value - 5
    user: function() {
        return this.belongsTo(User, 'rateableId').query({where: {rateableType: 'users'}})
    },
    set: function() {
        return this.belongsTo(Set, 'rateableId').query({where: {rateableType: 'sets'}})
    },
    product: function() {
        return this.belongsTo(Product, 'rateableId').query({where: {rateableType: 'products'}})
    },
    rateable: function() {
        return this.morphTo('rateable', ['rateableType', 'rateableId'], Set, Lesson, Product)
    }
})

export const Comment = bookshelf.Model.extend({
    tableName: 'comments',
    // title
    // content
    product: function() {
        return this.belongsTo(Product, 'followableId').query({where: {followableType: 'products'}})
    },
    lesson: function() {
        return this.belongsTo(Lesson, 'followableId').query({where: {followableType: 'lessons'}})
    },
    set: function() {
        return this.belongsTo(Set, 'followableId').query({where: {followableType: 'sets'}})
    },
    commentable: function() {
        return this.morphTo('commentable', ['commentableType', 'commentableId'], Set, Lesson, Product)
    }
})

export const Article = bookshelf.Model.extend({
//    comments: function() {
//        return this.morphMany(Comment, 'commentable', 'Article')
//    }
//})
//
//var article = Article.forge({title: 'hello world'})
//article.save().then(function() {
//    article.comments().add({comment: 'This is a comment', commentable_type: 'Article', commentable_id: article.get('id')})
//})
export const Set = bookshelf.Model.extend({
    tableName: 'sets',
    hasTimestamps: ['createdAt', 'updatedAt'],
    // title
    // description
    // createdAt
    // updatedAt
    // rating - 4.32
    author: function() {
        return this.belongsTo(User, 'authorId')
    },
    contributors: function() {
        return this.belongsToMany(User, 'setContributors', 'setId', 'contributorId') // TODO: join table
    },
    lessons: function() {
        return this.belongsToMany(Lesson) // TODO: join table
    },
    followers: function() {
        return this.morphMany(Follower, 'followable', ['followableType', 'followableId'])
    },
    ratings: function() {
        return this.morphMany(Rating, 'rateable', ['rateableType', 'rateableId'])
    },
    comments: function() {
        return this.morphMany(Comment, 'commentable', ['commentableType', 'commentableId'])
    }
})

export const SetContributor = bookshelf.Model.extend({
    tableName: 'setContributors',
    contributor: function() {
        return this.belongsTo(User, 'contributorId')
    }
})

export const Lesson = bookshelf.Model.extend({
    tableName: 'lessons',
    // id
    // title
    // description
    set: function() {
        return this.belongsTo(Set, 'setId')
    },
    steps: function() {
        return this.hasMany(Step) // TODO: join table
    },
    ratings: function() {
        return this.morphMany(Rating, 'rateable', ['rateableType', 'rateableId'])
    },
    followers: function() {
        return this.belongsToMany(User)
    },
    comments: function() {
        return this.morphMany(Comment, 'commentable', ['commentableType', 'commentableId'])
    }
})


// Examples:
//  Fill in the lyrics video - LyricsTrainingModule
//  Flash cards for those vocab - FlashCardModule
//  Crossword with those vocab - CrosswordModule
//
export const Step = bookshelf.Model.extend({
    tableName: 'steps',
    // moduleName: 'LyricsTrainingModule'
    // config
    lesson: function() {
        return this.belongsTo(Lesson, 'lessonId')
    }
})

export const Lyric = bookshelf.Model.extend({
    tableName: 'lyrics',
    hasTimestamps: ['createdAt', 'updatedAt']
    // content
    // title
    // content2
    // content3
    // content4
    // status
})

export const View = bookshelf.Model.extend({
    tableName: 'views'
    // id
    // siteId
    // path
    // data
})

export const Definition = bookshelf.Model.extend({
    tableName: 'definitions'
    // id
    // term
    // meaning
    // kana
    // kanji
    // language
    // romaji
    // popularity
    // type (hiragana/romaji)
})

export const Memory = bookshelf.Model.extend({
    tableName: 'memories',
    hasTimestamps: ['createdAt', 'updatedAt'],
    //
    user: function() {
        return this.belongsTo(User, 'userId')
    },
    definition: function() {
        return this.belongsTo(Definition, 'definitionId')
    },
    triggers: function() {
        return this.hasMany(MemoryTrigger) // TODO: join table
    }
})

export const MemoryTrigger = bookshelf.Model.extend({
    tableName: 'memoryTriggers',
    // id
    // content
    // title
    // photo
    memory: function() {
        return this.belongsTo(Memory, 'memoryId')
    }
})

export const Badge = bookshelf.Model.extend({
    tableName: 'badges',
    // id
    // title
    acquirers: function() {
        return this.belongsToMany(User, 'userId')
    }
})

export const ActivityLog = bookshelf.Model.extend({
   tableName: 'activityLogs'
})

export const Product = bookshelf.Model.extend({
    tableName: 'products',
    // title
    // description
    // price
    ratings: function() {
        return this.morphMany(Rating, 'rateable', ['rateableType', 'rateableId'])
    },
    comments: function() {
        return this.morphMany(Comment, 'commentable', ['commentableType', 'commentableId'])
    }
})

export const OrderItem = bookshelf.Model.extend({
    tableName: 'orderItems',
    order: function() {
        return this.belongsTo(Order, 'orderId')
    },
    product: function() {
        return this.belongsTo(Product, 'productId')
    }
})

export const Order = bookshelf.Model.extend({
    tableName: 'orders',
    items: function() {
        return this.hasMany(OrderItem, 'orderItemId')
    }
})

export const Invoice = bookshelf.Model.extend({
    tableName: 'invoices',
    order: function() {
        return this.belongsTo(Order, 'orderId')
    }
})

export const Message = bookshelf.Model.extend({
    tableName: 'messages',
    sender: function() {
        return this.belongsTo(User, 'userId')
    },
    receivers: function() {
        return this.hasMany(User) // TODO: join table
    }
    // title
    // content
    //
})

export const Site = bookshelf.Model.extend({
    tableName: 'sites'
    // title
    // description
    // keywords
    // host
})

export const Page = bookshelf.Model.extend({
    tableName: 'pages',
    hasTimestamps: ['createdAt', 'updatedAt'],
    // title
    // content
    // siteId
    site: function() {
        return this.belongsTo(Site, 'siteId')
    },
    comments: function() {
        return this.morphMany(Comment, 'commentable', ['commentableType', 'commentableId'])
    }
})

export const Achievement = bookshelf.Model.extend({
    tableName: 'achievements'
    // id
    // title
    // type
    // content
})

export const Gift = bookshelf.Model.extend({
    tableName: 'gifts'
    // id
    // title
    // type
    // content
})

export const Notification = bookshelf.Model.extend({
    tableName: 'notifications'
    // id
    // title
    // type
    // content
})

export const Data = bookshelf.Model.extend({
    tableName: 'data'
    // id
    // primaryId
    // primaryClassName
    // primaryFieldName
    // secondaryId
    // string1
})

export const Asset = bookshelf.Model.extend({
    tableName: 'assets'
    // id
    // mimType
    // size
    // name
    // description
    // masterClass
    // masterField
    // masterId
    // sortOrder
    // createdAt
    // updatedAt
    // userId
    // path
})

export const Plugin = bookshelf.Model.extend({
    tableName: 'plugins',
    hasTimestamps: ['createdAt', 'updatedAt']
    // id
    // title
    // key
})


// Report

// Followers
// follower_id
// following_id
