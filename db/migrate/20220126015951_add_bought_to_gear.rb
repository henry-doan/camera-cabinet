class AddBoughtToGear < ActiveRecord::Migration[6.1]
  def change
    add_column :gears, :bought, :date
  end
end
