class Comment < ActiveRecord::Base
    belongs_to :direction
    belongs_to :checkpoint
    belongs_to :action
end
