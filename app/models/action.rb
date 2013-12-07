class Action < ActiveRecord::Base
    belongs_to :direction
    belongs_to :checkpoint
    has_many :comments
end
