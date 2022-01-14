class Kit < ApplicationRecord
  belongs_to :user

  validates :name, :description, :image, :item, presence: true
end
