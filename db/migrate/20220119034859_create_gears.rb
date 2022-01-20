class CreateGears < ActiveRecord::Migration[6.1]
  def change
    create_table :gears do |t|
      t.string :name
      t.string :desc
      t.integer :price
      t.string :model
      t.string :condition
      t.string :make
      t.string :image
      t.string :serial
      t.belongs_to :kit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
