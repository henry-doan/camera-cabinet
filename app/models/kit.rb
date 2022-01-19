class Kit < ApplicationRecord
  belongs_to :user

  validates :name, :description, :image, presence: true
end
