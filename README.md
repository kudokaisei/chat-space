## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,|
|e-mail|string|null: false,|
|password|string|null: false,|

### Association
- has_many :groups
- has_many :groups_users
- has_many :messages
- has_many  :groups,  through:  :groups_tags

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|groups-name|text|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :groups_users
- has_many  :users,  through:  :groups_tags

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user