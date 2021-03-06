## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,|
|mail|string|null: false, unique: true|
|password|string|null: false, unique: true|

### Association
- has_many :groups_users
- has_many :messages
- has_many  :groups,  through:  :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false,|

### Association
- has_many :messages
- has_many :groups_users
- has_many  :users,  through:  :groups_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|content|string||
|image|string||
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