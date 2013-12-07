class CreateCheckpoints < ActiveRecord::Migration
  def change
    create_table :checkpoints do |t|
      t.string :name
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
