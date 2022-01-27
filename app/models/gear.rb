class Gear < ApplicationRecord
  belongs_to :kit

<<<<<<< HEAD
  has_many :documents, dependent: :destroy

  validates :name, :desc, :price, :model, :condition, :make, :image, :serial, :category, :bought, :quantity, presence: true
=======
  validates :name, :desc, :price, :model, :condition, :make, :type, :image, :serial,   presence: true
>>>>>>> a9fda6d (rebasing to newest version)

end
