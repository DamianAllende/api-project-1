const { Model } = require('objection')

class List extends Model {
	static get tableName(){
		return 'lists'
	}
	static get relationMappings() {
		const Tweet = require('./Tweet')

		return{
			tweets: {
				relation: Model.HasManyRelation,
				modelClass: Tweet,
				join: {
					from: 'lists.id',
					to: 'tweets.listId'
				}
			}
		}
	}
}

module.exports = List