class AddDescriptionToDirections < ActiveRecord::Migration
  def change
  	add_column :directions, :description, :text
  end
end
