const bookshelf = app.get('bookshelf')

export class Follower extends bookshelf.Model {
    get tableName() { return 'followers' }

    get defaults() {
        return {
            property1: 'blah',
            property1: null
        }
    }

    user() { return this.belongsTo(User, 'followableId').query({where: {followableType: 'users'}}) }
    set() { return this.belongsTo(Set, 'followableId').query({where: {followableType: 'sets'}}) }
    followable() { return this.morphTo('followable', ['followableType', 'followableId'], Set, User) }
}
