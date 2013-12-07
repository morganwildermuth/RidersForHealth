class CreateDemographics < ActiveRecord::Migration
  def change
    create_table :demographics do |t|
      t.integer :village_id
      t.integer :population
      t.text :notes

      t.timestamps
    end
  end
end
