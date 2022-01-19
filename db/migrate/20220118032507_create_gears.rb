class CreateGears < ActiveRecord::Migration[6.1]
  def change
    create_table :gears do |t|
      t.string :name
      t.string :desc
      t.integer :price
      t.string :model
      t.string :condition
      t.string :make
      t.string :type
      t.string :image
      t.integer :serial

      t.timestamps
    end
  end
end
