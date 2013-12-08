class Comment < ActiveRecord::Base
    belongs_to :village
    belongs_to :direction
    belongs_to :checkpoint
    belongs_to :action
    validates :content, presence: true
    validates :commentable_id, presence: true
    validates :commentable_type, presence: true
    has_many :comments
end
