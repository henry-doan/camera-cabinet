class AddQuantityToGear < ActiveRecord::Migration[6.1]
  def change
    add_column :gears, :quantity, :string
  end
end
