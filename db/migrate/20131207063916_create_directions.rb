class CreateDirections < ActiveRecord::Migration
  def change
    create_table :directions do |t|
      t.integer :start_village_id
      t.integer :end_village_id
      t.text :order_array

      t.timestamps
    end
  end
end
