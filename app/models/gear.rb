class Gear < ApplicationRecord
  belongs_to :kit

<<<<<<< HEAD
  has_many :documents, dependent: :destroy

  validates :name, :desc, :price, :model, :condition, :make, :image, :serial,   presence: true
=======
  validates :name, :desc, :price, :model, :condition, :make, :image, :serial, :bought, :quantity,   presence: true
>>>>>>> df5f7da (about us done and styled)

end
