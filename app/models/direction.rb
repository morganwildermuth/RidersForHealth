class Direction < ActiveRecord::Base
    has_many :comments

    def start_village_name
    	Village.find(self.start_village_id).name
    end    

    def end_village_name
    	Village.find(self.end_village_id).name
    end
end
