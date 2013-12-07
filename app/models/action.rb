class Action < ActiveRecord::Base
    belong_to :direction
    belongs_to :checkpoint
    has_many :comments
end
