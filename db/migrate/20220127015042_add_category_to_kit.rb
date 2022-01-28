class AddCategoryToKit < ActiveRecord::Migration[6.1]
  def change
    add_column :kits, :category, :string
  end
end
