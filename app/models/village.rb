class Village < ActiveRecord::Base
    validates :name, presence: true
    validates :latitude, allow_blank: true
    validates :longitude, allow_blank: true
    has_many :directions
end
