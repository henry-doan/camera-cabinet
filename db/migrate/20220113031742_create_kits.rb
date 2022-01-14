class CreateKits < ActiveRecord::Migration[6.1]
  def change
    create_table :kits do |t|
      t.string :name
      t.string :description
      t.string :image
      t.integer :item
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
