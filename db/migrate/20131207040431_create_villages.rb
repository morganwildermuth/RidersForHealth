class CreateVillages < ActiveRecord::Migration
  def change
    create_table :villages do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.integer :population
      t.text :note

      t.timestamps
    end
  end
end
