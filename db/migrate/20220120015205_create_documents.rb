class CreateDocuments < ActiveRecord::Migration[6.1]
  def change
    create_table :documents do |t|
      t.datetime :bought
      t.string :image
      t.belongs_to :gears, null: false, foreign_key: true

      t.timestamps
    end
  end
end
