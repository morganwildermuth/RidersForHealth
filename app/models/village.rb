class Village < ActiveRecord::Base
    validate :name, presence: true
    validate :latitude, allow_blank: true
    validate :longitude, allow_blank: true
    has_many :directions
    has_many :comments
end
