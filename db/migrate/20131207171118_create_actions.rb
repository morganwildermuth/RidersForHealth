class CreateActions < ActiveRecord::Migration
  def change
    create_table :actions do |t|
      t.text :description
      t.integer :direction_id
      t.integer :checkpoint_id

      t.timestamps
    end
  end
end
