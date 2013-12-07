class Demographic < ActiveRecord::Base
    belongs_to :village
    has_many :comments
end
